import React from 'react'
import SearchBar      from './SearchBar'
import RentSelect     from './RentSelect'
import BedBathSelect  from './BedBathSelect'

class SearchForm extends React.Component {

    // static propTypes = {
    // }
    //
    // static defaultProps = {
    // }

    render() {
        return (
          <div className="columns is-mobile box search-box">
            <div className="column is-5 is-paddingless">
              <SearchBar />
            </div>

            <div className="column is-3 is-paddingless">
              <RentSelect />
            </div>

            <div className="column is-3 is-paddingless">
              <BedBathSelect />
            </div>

            <div className="column is-1 is-paddingless">
              <a className="button is-primary search-button">Search</a>
            </div>
          </div>
        )
    }
}

export default SearchForm
