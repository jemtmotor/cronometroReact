import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core'

const StopwatchButton = ({text, onClick, style}) => {
    return <Button onClick = {onClick} 
                   style = {style}
                   variant="raised"
                   color="secondary"
                   > {text}</Button>
}

StopwatchButton.propTypes ={
    text: PropTypes.string.isRequired,
    style : PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired
}




export default StopwatchButton;