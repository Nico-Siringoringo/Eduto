"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {

    const {user} = useUser()

  return (
    <div className='p-5 bg-blue-600 w-full text-white rounded-lg flex items-center gap-6'>
        <Image src={'/book.png'} alt='book' width={100} height={100} />
        <div>
            <h2 className='font-bold text-3xl'> Hello {user?.firstName} </h2>
            <p>Welcome Back, Its time to Grind</p>
        </div>
    </div>
  )
}

export default WelcomeBanner