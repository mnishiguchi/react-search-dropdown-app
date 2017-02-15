import React, { PropTypes as T } from 'react'

// USAGE: <SearchDropdown>
//          {/* childeren nodes here becomes dropdown items */}
//        </SearchDropdown>
class SearchDropdown extends React.Component {

    static propTypes = {
        children: T.oneOfType([ T.array, T.element ]).isRequired
    }

    static defaultProps = {
        children: []
    }

    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            value   : '(Select one)'
        }

        // Store the reference to the dropdown node.
        this._dropdown = this.renderDropdown()
    }

    render() {
        return (
            <div
              className={`dropdown ${this.state.expanded ? 'active' : ''}`}
              tabIndex="0"
              onBlur={e => this.collapse() }
            >
                <div
                  className="dropdown-triggar"
                  style={{ padding: '.5rem 0'}}
                  onClick={e => this.handleClickTrigger(e) }
                >
                    {this.state.value}
                </div>

                <aside className="menu">
                    { this.state.expanded ? this._dropdown : '' }
                </aside>
            </div>
        )
    }

    renderDropdown() {
      const { children } = this.props
      if (children.length < 1) {
        console.info('No options provided for the dropdown. Please add elements as children.')
        return
      }

      return (
          <ul className="menu-list">
            {children.map((node, i) => {
                  return (
                    <li className="" onClick={ e => this.handleClickItem(e) } key={i}>
                      <a>{node}</a>
                    </li>
                  )
              })
            }
          </ul>
      )
    }

    // ---
    // PRIVATE METHODS
    // ---

    expand() {
        this.setState({
          expanded: true
        })
    }

    collapse() {
        this.setState({
          expanded: false
        })
    }

    handleClickItem(e) {
        this.setState({
          expanded: false,
          value   : e.target.innerText
        })
    }

    handleClickTrigger(e) {
        this.setState({
            expanded: !this.state.expanded
        })
    }
}

export default SearchDropdown
