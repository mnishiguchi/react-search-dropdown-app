import React from 'react'

// Define constants for modes.
const MODE_MIN = 0
const MODE_MAX = 1

class RentSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            min     : null,
            max     : null,
            mode    : MODE_MIN, // MODE_MIN or MODE_MAX
            expanded: false
        }
    }

    render() {
        console.debug(this.state)

        const dropdown = this.state.mode === MODE_MAX ? this.renderMaxDropdown()
                                                      : this.renderMinDropdown()

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
                    { this.state.expanded ? dropdown : '' }
                </aside>
            </div>
        )
    }

    renderRange() {
        return (
            <div
                className="columns range-container"
                style={{ padding: '0', margin: '0' }}
                onKeyPress={e => this._handleKeyPress(e)}
            >
                <div className="column is-6 left-input">
                    <input
                        className="input minRentInput active"
                        maxLength={6}
                        placeholder="Min"
                        type="tel"
                        ref={ input => { this._minInputNode = input }}
                        onFocus={e => {
                            e.preventDefault()
                            this.setState({ mode: MODE_MIN })
                        }}
                    />
                </div>
                <div className="column is-6 right-input">
                    <input
                        className="input maxRentInput"
                        maxLength={6}
                        placeholder="Max"
                        type="tel"
                        ref={ input => { this._maxInputNode = input }}
                        onFocus={e => {
                            e.preventDefault()
                            this.setState({ mode: MODE_MAX })
                        }}
                    />
                </div>
            </div>
        )
    }

    renderCaret() {
        return (
            this.state.expanded ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                : <i className="fa fa-caret-down" aria-hidden="true"></i>
        )
    }

    renderMinDropdown() {
        return (
            <div>
                {this.renderRange()}
                <ul className="menu-list min-options">
                    <li onClick={ e => this._updateMin(null) }><a>No Min</a></li>
                    <li onClick={ e => this._updateMin(500)  }><a>$500</a></li>
                    <li onClick={ e => this._updateMin(700)  }><a>$700</a></li>
                    <li onClick={ e => this._updateMin(900)  }><a>$900</a></li>
                    <li onClick={ e => this._updateMin(1100) }><a>$1100</a></li>
                    <li onClick={ e => this._updateMin(1300) }><a>$1300</a></li>
                    <li onClick={ e => this._updateMin(1500) }><a>$1500</a></li>
                </ul>
            </div>
        )
    }

    renderMaxDropdown() {
        return (
            <div>
                {this.renderRange()}
                <ul className="menu-list max-options">
                    <li onClick={ e => this._updateMax(500)  }><a>$500</a></li>
                    <li onClick={ e => this._updateMax(700)  }><a>$700</a></li>
                    <li onClick={ e => this._updateMax(900)  }><a>$900</a></li>
                    <li onClick={ e => this._updateMax(1100) }><a>$1100</a></li>
                    <li onClick={ e => this._updateMax(1300) }><a>$1300</a></li>
                    <li onClick={ e => this._updateMax(1500) }><a>$1500</a></li>
                    <li onClick={ e => this._updateMax(null) }><a>No Max</a></li>
                </ul>
            </div>
        )
    }

    // ---
    // PRIVATE METHODS
    // ---

    // Show min max if those values exist.
    _filterText() {
        const min = parseInt(this.state.min, 10)
        const max = parseInt(this.state.max, 10)

        if (min && max) {
            return `$${min} - ${max}`
        } else if (min) {
            return `$${min} <`
        } else if (max) {
            return `< $${max}`
        }

        return 'Rent range'
    }

    _handleClickTrigger(e) {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded,
            mode    : MODE_MIN
        })
    }

    _handleKeyPress(e) {
        const { mode } = this.state

        if(e.key === 'Enter') {
            if (mode === MODE_MIN) {
                this._updateMin(this._minInputNode.value)
            } else if (mode === MODE_MAX) {
                this._updateMax(this._maxInputNode.value)
            }
        }
    }

    _updateMin(value) {
        const parsedValue = parseInt(value, 10)

        // Refect invalid input.
        if (this.state.max && this.state.max <= parsedValue) {
            alert("Must be min < max")
            return
        }

        this.setState({
            expanded: true,
            mode    : MODE_MAX,
            min     : parsedValue
        })
    }

    _updateMax(value) {
        const parsedValue = parseInt(value, 10)

        // Refect invalid input.
        if (this.state.min && this.state.min >= parsedValue) {
            alert("Must be min < max")
            return
        }

        this.setState({
            expanded: false,
            mode    : MODE_MIN,
            max     : parsedValue
        })
    }
}

export default RentSelect
