import React from 'react';
import PropTypes from 'prop-types'

class MessageBox extends React.Component {

    render() {
        return (
            <p style={msgBxStyle}>{this.props.message}</p>
        );
    }
}

const msgBxStyle = {
    fontSize: '0.4em',
    marginTop: '20px'
}

//PropTypes
MessageBox.propTypes = {
    message: PropTypes.string
}

export default MessageBox;