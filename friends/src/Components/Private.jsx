import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../axios/axiosWithAuth'


export default function Private(props) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends', JSON.stringify(localStorage.getItem('token')))
      .then(res => {
        setFriends(res.data)
      })
  }, [])
  return (
    <div>
      {friends.map(friend => {
        return (
          <>
            <h4>{friend.name}</h4>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </>
        )
      })}
    </div>
  )
}
