import React from 'react'

// Modes
const MODE_BEDS  = 0
const MODE_BATHS = 1

// Beds
const STUDIO = 'Studio'
const BEDS_1 = '1 Bed'
const BEDS_2 = '2 Beds'
const BEDS_3 = '3 Beds'
const BEDS_4 = '4+ Beds'

// Baths
const BATHS_1 = '1+ Baths'
const BATHS_2 = '2+ Baths'
const BATHS_3 = '3+ Baths'


class BedBathSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beds    : null,
            baths   : null,
            mode    : MODE_BEDS, // MODE_BEDS or MODE_BATHS
            expanded: false
        }
    }

    render() {
        console.debug(this.state)

        return (
            <div>
                <a
                    className="button dropdown-trigger"
                    style={{ width: '100%' }}
                    href="#"
                    title="rents"
                    onClick={e => this._handleClickTrigger(e) }
                >
                    <div style={{ position: 'relative', width: '100%' }}>
                        {this._filterText()}
                        <span style={{ position: 'absolute', right: '0' }}>
                            {this.renderCaret()}
                        </span>
                    </div>
                </a>

                <aside className="menu">
                    { this.state.expanded ? this.renderBedsDropdown() : '' }
                    { this.state.expanded ? this.renderBathsDropdown() : '' }
                </aside>
            </div>
        )
    }

    renderCaret() {
        return (
            this.state.expanded ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                : <i className="fa fa-caret-down" aria-hidden="true"></i>
        )
    }

    renderBedsDropdown() {
        const { beds } = this.state

        return (
            <div>
                <h4>Beds</h4>
                <ul className="menu-list beds-options">
                    <li onClick={ e => this._updateBeds(null)   }><a className={!beds           ? 'is-active' : ''}>All beds</a></li>
                    <li onClick={ e => this._updateBeds(STUDIO) }><a className={beds === STUDIO ? 'is-active' : ''}>{STUDIO}</a></li>
                    <li onClick={ e => this._updateBeds(BEDS_1) }><a className={beds === BEDS_1 ? 'is-active' : ''}>{BEDS_1}</a></li>
                    <li onClick={ e => this._updateBeds(BEDS_2) }><a className={beds === BEDS_2 ? 'is-active' : ''}>{BEDS_2}</a></li>
                    <li onClick={ e => this._updateBeds(BEDS_3) }><a className={beds === BEDS_3 ? 'is-active' : ''}>{BEDS_3}</a></li>
                    <li onClick={ e => this._updateBeds(BEDS_4) }><a className={beds === BEDS_4 ? 'is-active' : ''}>{BEDS_4}</a></li>
                </ul>
            </div>
        )
    }

    renderBathsDropdown() {
        const { baths } = this.state

        return (
            <div>
                <h4>Baths</h4>
                <ul className="menu-list baths-options">
                    <li onClick={ e => this._updateBaths(null)    }><a className={!baths            ? 'is-active' : ''}>All baths</a></li>
                    <li onClick={ e => this._updateBaths(BATHS_1) }><a className={baths === BATHS_1 ? 'is-active' : ''}>{BATHS_1}</a></li>
                    <li onClick={ e => this._updateBaths(BATHS_2) }><a className={baths === BATHS_2 ? 'is-active' : ''}>{BATHS_2}</a></li>
                    <li onClick={ e => this._updateBaths(BATHS_3) }><a className={baths === BATHS_3 ? 'is-active' : ''}>{BATHS_3}</a></li>
                </ul>
            </div>
        )
    }

    // ---
    // PRIVATE METHODS
    // ---

    // Show beds baths if those values exist.
    _filterText() {
        const { beds, baths }  = this.state

        if (beds && baths) {
            return `${beds} X ${baths}`
        } else if (beds) {
            return `${beds} X All Baths`
        } else if (baths) {
            return `All Beds X ${baths}`
        }

        return 'Beds X Baths'
    }

    _handleClickTrigger(e) {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded,
            mode    : MODE_BEDS
        })
    }

    _updateBeds(value) {
        this.setState({
            expanded: true,
            mode    : MODE_BATHS,
            beds    : value
        })
    }

    _updateBaths(value) {
        this.setState({
            expanded: false,
            mode    : MODE_BEDS,
            baths   : value
        })
    }
}

export default BedBathSelect
