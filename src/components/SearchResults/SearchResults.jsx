import React from 'react';
import './SearchResults.scss';

function SearchResults(props) {
    return (
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id} className='result_container'>
                        <img src={result.album.images[0].url} alt="Album cover"/>
                        <div className='texts'>
                            <h3>{result.name} | {result.artists[0].name}</h3>
                            <p>{result.album.name} | {result.album.release_date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults;