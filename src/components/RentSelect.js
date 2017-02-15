import React from 'react'

class RentSelect extends React.Component {

    // static propTypes = {
    // }
    //
    // static defaultProps = {
    // }

    render() {
        return (
            <div className="price-block">
              <a className="button" href="#" title="Rent Range">
                <span>Rent Range</span>
              </a>
              <div className="dropdown-container">
                <div className="dropdown is-hidden">
                  <div className="range-container">
                    <div className="left-input">
                      <input className="minRentInput active" maxLength={6} placeholder="Min Rent" type="tel" />
                    </div>
                    <div className="right-input">
                      <input className="maxRentInput" maxLength={6} placeholder="Max Rent" type="tel" />
                    </div>
                  </div>
                  <ul className="min-options">
                    <li>No Min</li>
                    <li>$500</li>
                    <li>$700</li>
                    <li>$900</li>
                    <li>$1100</li>
                    <li>$1300</li>
                    <li>$1500</li>
                  </ul>
                  <ul className="max-options">
                    <li>$1100</li>
                    <li>$1300</li>
                    <li>$1500</li>
                    <li>$1700</li>
                    <li>$1900</li>
                    <li>$2100</li>
                    <li>No Max</li>
                  </ul>
                </div>
              </div>
            </div>
        )
    }
}

export default RentSelect
