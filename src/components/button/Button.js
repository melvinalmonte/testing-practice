import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  const { btnTitle, btnAction } = props

  return (
    <button onClick={btnAction}>{btnTitle}</button>
  )
}

Button.propTypes = {
  btnAction: PropTypes.func,
  btnTitle: PropTypes.string
}
