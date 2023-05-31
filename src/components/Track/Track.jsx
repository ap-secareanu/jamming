import React from 'react';
import './Track.scss'

function Track(props) {
    return (
        <div className='track'>
            <img src={props.track.cover} className='cover' alt="Album Cover" />
            <div className='details'>
                <h3 className='song_title'>{props.track.song} | {props.track.artist}</h3>
                <p className='album'>{props.track.album} - {props.track.release}</p>
            </div>
        </div>
    )
};

export default Track