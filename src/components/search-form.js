import React from 'react';

export default function SearchForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="search">Search</label>&emsp;
            <input onChange={(e) => props.setCharacterSearch(e.target.value)}
                aria-controls="character-count"
                type="search"
                id="search"
                name="search"
                placeholder="Dale Cooper"
                onChange={e => props.handleUpdate(e.target.value)}
            />
        </form>
    );
}
