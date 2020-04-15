import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../axios/axiosWithAuth'
import Card from './Friends/Card'

export default function Private(props) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    axiosWithAuth().get('http://localhost:5000/api/friends', JSON.stringify(localStorage.getItem('token')))
      .then(res => {
        setFriends(res.data)
      })

  }, [])

  const logOut = () => {
    console.log("log out");
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <>
      <div className="friendContainer">
        {friends.map(friend => {
          return (
            <Card friend={friend} />
          )
        })}
      </div >
      <button onClick={() => logOut()}>Log Out</button>
    </>
  )
}
