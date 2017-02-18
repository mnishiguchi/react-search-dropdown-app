import React from 'react'
import SearchBar      from './SearchBar'
import RentSelect     from './RentSelect'
import BedBathSelect  from './BedBathSelect'

class SearchForm extends React.Component {
    render() {
        return (
            <div className="columns is-mobile box search-box">
                <div className="column is-5">
                    <SearchBar />
                </div>

                <div className="column is-3">
                    <RentSelect />
                </div>

                <div className="column is-3">
                    <BedBathSelect />
                </div>

                <div className="column is-1">
                    <a className="button is-primary search-button">Search</a>
                </div>
            </div>
        )
    }
}

export default SearchForm
