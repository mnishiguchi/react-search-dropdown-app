import React          from 'react'
import SearchBar      from './SearchBar'
import RentSelect     from './RentSelect'
import BedBathSelect  from './BedBathSelect'

const FORM_INITIAL_STATE = {
    searchTerm: '',
    min       : null,
    max       : null,
    beds      : null,
    baths     : null,
}

function reducer(formState = FORM_INITIAL_STATE, action) {
    const { type, payload } = action

    switch (type) {
        case 'SearchBar':
            const { searchTerm } = payload
            return {
                ...formState,
                searchTerm
            }
        case 'RentSelect':
            const { min, max } = payload
            return {
                ...formState,
                min,
                max
            }
        case 'BedBathSelect':
            const { beds, baths } = payload
            return {
                ...formState,
                beds,
                baths
            }
        default:
            return formState
    }
}

class SearchForm extends React.Component {
    constructor(props) {
        super(props)

        // The form object.
        this._form = FORM_INITIAL_STATE
    }

    render() {
        return (
            <div className="columns is-mobile box search-box">
                <div className="column is-5">
                    <SearchBar dispatchStateChange={payload => this.updateState({ type: 'SearchBar', payload })} />
                </div>

                <div className="column is-3">
                    <RentSelect dispatchStateChange={payload => this.updateState({ type: 'RentSelect', payload })} />
                </div>

                <div className="column is-3">
                    <BedBathSelect dispatchStateChange={payload => this.updateState({ type: 'BedBathSelect', payload })} />
                </div>

                <div className="column is-1">
                    <a className="button is-primary search-button">Search</a>
                </div>
            </div>
        )
    }

    updateState(action) {
        // Create a new form state using the reducer.
        this._form = reducer(this._form, action)

        console.debug(this._form)
    }
}

export default SearchForm
