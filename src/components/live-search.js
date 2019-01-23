import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: 'Dale',
            characters: props.characters
        }
    }

    setSearchTerm(searchTerm){
        console.log(`I ran and searchTerm is ${searchTerm}`);
        this.setState({searchTerm})
    }
    //Make a state for the characters, update based on SearchForm
  render(){
    return (
        <div className="live-search">
            <SearchForm handleUpdate={input => this.setSearchTerm(input)} />
            <CharacterCount count={this.state.characters.length} />
            <CharacterList characters={this.state.characters} />
        </div>
    );
}
}
