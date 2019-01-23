import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    
    setSearchTerm(searchTerm){
        console.log(`I ran and searchTerm is ${searchTerm}`);
        this.setState({searchTerm});
    }

    filteredCharacters(){
        return this.props.characters.filter(character => character.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    
    //Make a state for the characters, update based on SearchForm
  render(){
    return (
        <div className="live-search">
            <SearchForm handleUpdate={input => this.setSearchTerm(input)} />
            <CharacterCount count={this.props.characters.length} />
            <CharacterList characters={this.filteredCharacters()} />
        </div>
        
        );
    } 
}
