import React from 'react'
import passwordMeter from '../../lib/passwordMeter.scss'


export default function getStrength(password) {
  if (password.length < 6) {
    return 'weak'
  } else {
    return 'good'
  }  
}