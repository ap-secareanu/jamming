const clientID = "4b56dd199fe84d8dbcd8ac5c6dac46ad";
const redirectUri = "http://localhost:3000/"; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

const Spotify = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public%20user-top-read&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },


  // ? This method fecth the user profile data from Spotify's API
  async getProfileData() {
    const accessToken = this.getAccessToken();

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if(response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      }
    } 
    catch (error) {
        console.log(error);
    }
  },

  async getUserTracks() {
    const accessToken = this.getAccessToken();

    try {
      const response = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5&offset=0', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if(response.ok) {
        const data = await response.json();
        return data.items.map(track => ({
          artist: track.artists[0].name,
          song: track.name,
          album: track.album.name,
          release: track.album.release_date,
          id: track.id,
          cover: track.album.images[0].url,
        }));
      }
    } 
    catch (error) {
        console.log(error);
    }
  },

  async searchSong(term) {
    const accessToken = this.getAccessToken();

    try {
      const response = await fetch(`https://api.spotify.com/v1/search?q=${term}&type=track&limit=3&offset=0`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });
      if(response.ok) {
        const data = await response.json();
        return data.tracks.items;
      }
    }
    catch (error) {
      console.log(error);
    }
  }

}

export default Spotify;
