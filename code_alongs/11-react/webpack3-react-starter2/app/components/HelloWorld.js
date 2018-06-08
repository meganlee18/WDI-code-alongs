import React from 'react'
import './HelloWorld.scss' //extension for SASS

export default function HelloWorld(props) {
  return <div className="beautiful">hello {props.name}</div>
}

// module.exports = HelloWorld