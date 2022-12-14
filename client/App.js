import React, { Component } from 'react'
import { render } from 'enzyme'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Routes from './Routes'
import { connect } from 'react-redux'
import auth from './store/auth'
import { ToastContainer } from 'react-toastify'

class App extends React.Component {
 
  render() {
    console.log(this.props)
    const {isLoggedIn} = this.props;

    return (
      <div>
        {/* <Navbar /> */}
        {isLoggedIn ? (
          <div className='main-container'>
          <Sidebar />
          <ToastContainer />
          <Routes />
          </div>
        ) : (
          <Routes />
        )}

      </div>
    )

  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.auth.id,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(App)

