import React from 'react'
import logo  from './logo.svg'

import SearchDropdown from '../components/SearchDropdown'

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="title" style={{ color: '#ddd' }}>
        React Search Dropdown App
      </h2>
    </div>
  )
}

// The root node of this react app.
const App = (props) => {
  return (
    <div className="App">
      <Header />

      <SearchDropdown>
        <p>React</p>
        <p>Angular</p>
        <p>Vue</p>
      </SearchDropdown>


    </div>
  )
}

export default App
