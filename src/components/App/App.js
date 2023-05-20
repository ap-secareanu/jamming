import './App.scss';
import Container from '@mui/material/Container';
import TracksList from '../Tracklist/TracksList';
import Spotify from '../util/Spotify';
import { useState } from 'react';

function App() {
  const [ userName, setUserName ] = useState([]);

  const profileData = Spotify.getProfileData().then(setUserName);


  return (
    <div className="App">
      <Container className="app_container">
        <TracksList text={userName} />
      </Container>
    </div>
  );
}

export default App;
