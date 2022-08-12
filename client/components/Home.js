import React from 'react'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'
import AllJumps from './AllJumps'

/**
 * COMPONENT
 */
export const Home = props => {
  const {firstName} = props

  return (
    <div className='main'>
      <Sidebar />
      <h3>Welcome, {firstName}</h3>
      {/* <AllJumps /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.auth.email
  }
}

export default connect(mapState)(Home)
