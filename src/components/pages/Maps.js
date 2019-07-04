import React from 'react';

class Maps extends React.Component {

   state = {
    worldCode: 'CITIA',
    mapTitle: 'Citia',
    mapDescription: 'Citia, the fantasy world in which humans, elves, dwarves, gnomes, halflings, orcs, and goblins, all live together in a walled city without killing each other. The caveat is that outside the city walls are endless monsters that attack in endless waves.',
    mapImageUrl: 'https://cdna.artstation.com/p/assets/images/images/018/706/132/large/katie-van-map.jpg?1560385682',
    pins: [
      {
        locName: 'Industrial Area', //loc for location
        locDescription: `The cities' powerhouse for weapons, new inventions, and processed food made from monster drops. Factories, smoke, molten metal, and hip invention think tank rooms, can be seen in all directions. Dwarves, gnomes, and goblins seem to thrive here and are most dense in this region. Rumors reside here of an underground market and fighting arena.`,
        experiencedDescription: 'Although this is the most productive area of Citia, it is also the area with the most entrepeneurs with get rich quick schemes, scams, and other sketchy money practices. Despite the high probability of scams, players can find unique inventions here.',
        exDescHidden: false,
        locX: 0,
        loxY: 0,
        isLocked: false,
        isHidden: false,
        
      }
    ]

  }

  render() {  //actually we'll replace mapStyle div with another component. (make map it's own component.)
    return (  
      <div style={bgStyle}>
        
      </div>
      
    );
  }
}

const bgImageURL = '/images/woodBackgroundImage.jpg';

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
