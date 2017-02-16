import React from 'react'

class BedBathSelect extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            beds    : null,  // TODO: Define select items
            baths   : null,  // TODO: Define select items
            expanded: false,
        }
    }

    render() {
        console.debug(this.state)

        const dropdown = this.renderDropdown()

        return (
            <div>
              <a
                className="button dropdown-trigger"
                style={{ width: '100%' }}
                href="#"
                title="beds and baths"
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

    renderCaret() {
        return (
            this.state.expanded ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                : <i className="fa fa-caret-down" aria-hidden="true"></i>
        )
    }

    renderDropdown() {
        return (
            <div>
              {this.renderBedSelect()}
              {this.renderBathSelect()}
            </div>
        )
    }

    renderBedSelect() {
        return (
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
        )
    }

    renderBathSelect() {
        return (
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
        )
    }

    // ---
    // PRIVATE METHODS
    // ---

    // Show bed-bath text if those values exist.
    displayText() {
        // const min = parseInt(this.state.min, 10)
        // const max = parseInt(this.state.max, 10)
        //
        // if (min && max) {
        //     return `${min} - ${max}`
        // } else if (min) {
        //     return `${min} <`
        // } else if (max) {
        //     return `< ${max}`
        // }

        return 'Beds x Baths'
    }

    handleClickTrigger(e) {
        e.preventDefault()
        this.setState({
            expanded: !this.state.expanded,
        })
    }

    _handleKeyPress(e) {
      if (e.key === 'Enter') {
        console.log('enter clicked');
      }
    }

    _updateBeds(value) {
        // if (this.state.max && this.state.max <= parseInt(value)) {
        //   alert("Must be min < max")
        //   return
        // }
        // this.setState({
        //     expanded: true,
        // })
    }

    _updateBaths(value) {
        // if (this.state.min && this.state.min >= parseInt(value)) {
        //   alert("Must be min < max")
        //   return
        // }
        // this.setState({
        //     expanded: false,
        // })
    }
}

export default BedBathSelect
