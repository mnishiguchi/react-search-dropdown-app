import React from 'react'
import logo  from './logo.svg'

import BasicDropdown from '../components/BasicDropdown'
import SearchForm     from '../components/SearchForm'

const Header = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="title" style={{ color: '#ddd', fontSize: '1rem' }}>
        React Search Dropdown App
      </h1>
    </div>
  )
}

// The root node of this react app.
const App = (props) => {
  return (
    <div className="App">
      <Header />

      <section className="section">
        <div className="container">
          <div className="heading">
            <h2 className="title">Basic dropdown</h2>
            <div className="card">
              <BasicDropdown>
                <p>React</p>
                <p>Angular</p>
                <p>Vue</p>
              </BasicDropdown>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading">
            <h2 className="title">Search dropdown</h2>
            <SearchForm />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
