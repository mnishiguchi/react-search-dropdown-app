import React  from 'react'

class SearchBar extends React.Component {

    // static propTypes = {
    // }
    //
    // static defaultProps = {
    // }

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }

        // Store reference to the text input node.
        this._inputNode = null
    }

    render() {
        const { searchTerm } = this.state

        return (
          <p className="control">
            <input
              className="input"
              id="q"
              type="text"
              placeholder="Address, City, State"
              ref={ input => { this._inputNode = input }}
              onChange={e => {
                e.preventDefault()
                this.handleInputChange(this._inputNode.value)
              }}
            />
            <span className="help">{searchTerm}</span>
          </p>
        )
    }

     handleInputChange(searchTerm) {
        this.setState({
            searchTerm
        })
    }
}

export default SearchBar
