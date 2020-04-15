import React from 'react'

export default function Card(props) {
  const { friend } = props;
  return (
    <div className="friendCard">
      <h4>{friend.name}</h4>
      <p>{friend.age}</p>
      <p>{friend.email}</p>
    </div>
  )
}
