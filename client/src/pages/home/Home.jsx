import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'

import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <div className='postSide'>Posts</div>
        <div className='RightSide'>RightSide</div>
    </div>
  )
}

export default Home