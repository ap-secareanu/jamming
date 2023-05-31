import React from 'react';
import { useState } from 'react';
import './SearchBar.scss'

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = (event) => {
        setTerm(event.target.value);
      };

    const search = () => {

            props.onSearch(term);
  
    };

    return (
        <div className='search'>
            <input type='text' name='search' id='search' onChange={handleTermChange} placeholder='Search your song'></input>
            <button onClick={search} className='search_button'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="25px"><rect width="256" height="256" fill="none"/><circle cx="116" cy="116" r="84" fill="none" stroke="#89d2d7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#89d2d7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg></button>
        </div>
    )
};

export default SearchBar;