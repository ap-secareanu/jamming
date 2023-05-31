import React from 'react';
import Track from '../Track/Track'

const TracksList = (props) => {
    return (
        <div>
            {props.trackList.map(track => {
               return (
                    <Track
                     track={track}
                     key={track.id}
                     cover={track.cover}
                     release={track.release}
                     album={track.album}
                    />
               ) 
            })} 
        </div>
    )
};

export default TracksList;