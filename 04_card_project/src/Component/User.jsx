import React from 'react'

function User(props) {
  return (
    <div>
      <div style={{'color':'white'}}>
        {props.name}
      </div>
    </div>
  )
}

export default User
