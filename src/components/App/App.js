import './App.scss';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TracksList from '../Tracklist/TracksList';
import UserProfile from '../UserProfile/UserProfile';
import Spotify from '../util/Spotify';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import { useState, useEffect } from 'react';

function App() {

  const [ userData, setUserData ] = useState([]);
  const [ userTracks, setUserTracks] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);

  useEffect(() => {
    Spotify.getProfileData().then(setUserData);
    Spotify.getUserTracks().then(setUserTracks);
  }, [])

  const search = (term) => {
    if(term) {
      Spotify.searchSong(term).then(setSearchResults);
    } else {
      setSearchResults([]);
      
    }
   
  };

  if(userData.length === 0) {
    return null;
  };


  console.log(searchResults);

  return (
    <div className="App">
      <Container className="app_container">
        <Grid container spacing={2}>
          <Grid item md={5}>
           <UserProfile name={userData.display_name} link={userData.href} src={userData.images[0].url} followers={userData.followers.total} />
           <SearchBar onSearch={search}/>
           <SearchResults results={searchResults} />
          </Grid>
          <Grid item md={7}>
           <TracksList trackList={userTracks} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
