import React from 'react'

class BedBathSelect extends React.Component {

    // static propTypes = {
    // }
    //
    // static defaultProps = {
    // }

    render() {
        return (
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
        )
    }
}

export default BedBathSelect
