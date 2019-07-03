import React from 'react';

class Maps extends React.Component {

  render() {
    return (
      <div style={bgStyle}>
        <div>
          
        </div>
      </div>
      
    );
  }
}

const bgImageURL = 'https://images.unsplash.com/photo-1510148199876-8a856ee41d42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

const bgStyle = {
  backgroundImage: `url(${bgImageURL})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'noRepeat',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  color: 'white'
}

export default Maps;
