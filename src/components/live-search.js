import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: props.characters
        }
    }

    setCharacterCount(characterCount) {
        console.log(`${this.state.characterCount} characters`)
        this.setState({characterCount})
    }

    setCharacterList(characterList) {
        console.log(`displayed ${this.state.characterList}`)
        this.setState({characterList})
    }

    setCharacterSearch(characterSearch) {
        console.log(`searched for ${this.state.characterSearch}`)
        this.setState(characterSearch)
    }
    
    render() {
        return <div className="live-search">
                <SearchForm />
                <CharacterCount  count={this.state.characters.length}/>
                <CharacterList  characters={this.state.characters}/>
            </div>
        };
    }