import React from 'react'
import axios from 'axios'

export default function axiosWithAuth() {
  const token = localStorage.getItem('token')

  return axios.create({
    headers: {
      Authorization: token
    }
  })
}
