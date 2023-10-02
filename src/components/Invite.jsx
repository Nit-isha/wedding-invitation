import React, {useEffect, useState} from 'react'
import Cards from '../util/Cards'
import Content from '../util/Content'
import "../styles/Invite.css"

export default function Invite() {
  var images = ['/1.jpeg', '3.png','4.jpg','5.png'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);


  return (
    <div>
        <div className="image-container"><img src={images[index]} /></div>
        
        <div className="event-heading">Functions</div>
        <Content />
    </div>
  )
}
