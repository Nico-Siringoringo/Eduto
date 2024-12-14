import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function Profile() {
  return (
    <div className='flex justify-center items-center'>
        <UserProfile/>
    </div>
  )
}

export default Profile