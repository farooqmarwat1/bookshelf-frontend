import React from 'react'

const Button = (props) => {
  return (
    <>
      <button type="button" class="btn btn-warning text-white text-lg fs-4 rounded-pill">{props.text}</button>
    </>
  )
}

export default Button