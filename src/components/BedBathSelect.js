import React from 'react'

// TODO: Implement this, using the markup at the bottom of this file.
class BedBathSelect extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            min     : '',
            max     : '',
            mode    : 'min', // min or max
            expanded: false
        }
    }

    render() {

        console.debug(this.state)

        const dropdown = this.state.mode === 'max' ? this.renderMaxDropdown() : this.renderMinDropdown()

        return (
            <div>
                <a
                  className="button dropdown-trigger"
                  style={{ width: '100%' }}
                  href="#"
                  title="rents"
                  onClick={e => this.handleClickTrigger(e) }
                >

                  <div style={{ position: 'relative', width: '100%' }}>
                    {this.displayText()}
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
                this.setState({mode: 'min'})
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
                this.setState({mode: 'max'})
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
            <li onClick={ e => this._updateMin(500) }><a>$500</a></li>
            <li onClick={ e => this._updateMin(700) }><a>$700</a></li>
            <li onClick={ e => this._updateMin(900) }><a>$900</a></li>
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
            <li onClick={ e => this._updateMax(500) }><a>$500</a></li>
            <li onClick={ e => this._updateMax(700) }><a>$700</a></li>
            <li onClick={ e => this._updateMax(900) }><a>$900</a></li>
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
    displayText() {
        const min = parseInt(this.state.min, 10)
        const max = parseInt(this.state.max, 10)

        if (min && max) {
            return `${min} - ${max}`
        } else if (min) {
            return `${min} <`
        } else if (max) {
            return `< ${max}`
        }

        return 'Beds x Baths'
    }

    _handleKeyPress(e) {
      if (e.key === 'Enter') {
        console.log('enter clicked');
      }
    }

    handleClickTrigger(e) {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded,
            mode: 'min'
        })
    }

    _handleKeyPress(e) {
        if(e.key === 'Enter') {
            if (this.state.mode === 'min') {
                this._updateMin(this._minInputNode.value)
            } else if (this.state.mode === 'max') {
                this._updateMax(this._maxInputNode.value)
            }
        }
    }

    _updateMin(value) {
        if (this.state.max && this.state.max <= parseInt(value)) {
          alert("Must be min < max")
          return
        }
        this.setState({
            expanded: true,
            mode    : 'max',
            min     : value
        })
    }

    _updateMax(value) {
        if (this.state.min && this.state.min >= parseInt(value)) {
          alert("Must be min < max")
          return
        }
        this.setState({
            expanded: false,
            mode    : 'min',
            max     : value
        })
    }
}

export default BedBathSelect

/*
<div className="price-block">
  <a className="button" href="#" title="Extra's">
    <span>Beds x Baths</span>
  </a>
  <div className="dropdown-container">
    <div className="dropdown is-hidden">
      <div className="options-container">
        <p>Beds</p>
        <div className="checkbox">
          <label htmlFor="allBed">
            <input id="allBeds" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          All Beds
        </div>
        <div className="checkbox">
          <label htmlFor="studioBed">
            <input id="studioBed" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          Studio
        </div>
        <div className="checkbox">
          <label htmlFor="oneBed">
            <input id="oneBed" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          1 Bed
        </div>
        <div className="checkbox">
          <label htmlFor="twoBed">
            <input id="twoBed" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          2 Beds
        </div>
        <div className="checkbox">
          <label htmlFor="threeBed">
            <input id="threeBed" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          3 Beds
        </div>
        <div className="checkbox">
          <label htmlFor="maxBeds">
            <input id="maxBeds" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          4+ Beds
        </div>
      </div>
      <div className="options-container">
        <p>Baths</p>
        <div className="checkbox">
          <label htmlFor="allBath">
            <input id="allBath" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          All Baths
        </div>
        <div className="checkbox">
          <label htmlFor="oneBath">
            <input id="oneBath" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          1+ Bath
        </div>
        <div className="checkbox">
          <label htmlFor="twoBath">
            <input id="twoBath" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          2+ Bath
        </div>
        <div className="checkbox">
          <label htmlFor="threeBath">
            <input id="threeBath" type="checkbox" />
            <span className="checkbox-material">
              <span className="check" />
            </span>
          </label>
          3+ Baths
        </div>
      </div>
    </div>
  </div>
</div>
 */
