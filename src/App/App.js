import React from 'react'

import BasicDropdown from '../components/BasicDropdown'
import SearchForm    from '../components/SearchForm'

const Header = () => {
  return (
    <div className="App-header">
      <h1 className="title" style={{ color: '#ddd', fontSize: '1rem' }}>
        <span>
          React Search Dropdown App
        </span>
      </h1>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="App-footer">
      <div className="contact-info">
        Masatoshi Nishiguchi
        {' '} &middot; {' '}
        <a href="http://www.mnishiguchi.com/">
          mnishiguchi.com
        </a>
      </div>
    </footer>
  )
}

// The root node of this react app.
const App = (props) => {
  return (
    <div className="App">
      <Header />

      <main>
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
      </main>

      <Footer />
    </div>
  )
}

export default App
