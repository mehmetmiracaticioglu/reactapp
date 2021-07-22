import React from 'react'
import PropTypes from "prop-types"
function navbar(props) {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}
navbar.propTypes={
    title : PropTypes.string.isRequired
}

navbar.defaultProps={
    title :"Default App"
}
export default navbar;
