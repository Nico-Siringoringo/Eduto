"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useEffect } from 'react'

function Provider({children}) {

    const {user} = useUser();

    useEffect(() => {
        user&&CheckIsNewUser()
    }, [user])

    const CheckIsNewUser = async () => {

        // const result = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress))
        // console.log(result)

        // if(result?.length == 0) {
        //     const userResponse = await db.insert(USER_TABLE).values({
        //         name:user?.fullName,
        //         email:user?.primaryEmailAddress?.emailAddress
        //     }).returning({id:USER_TABLE.id})

        //     console.log(userResponse)
        // }

        const response = await axios.post('/api/create-user', {user: user})
        console.log(response.data)
    }

  return (
    <div>
        {children}
    </div>
  )
}

export default Provider