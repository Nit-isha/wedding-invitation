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
    <div className='invite-container'>
        <div className="image-container"><img src={images[index]} /></div>
        <div className="invite-content">
          <div className="invite-content-heading">Vishal weds Garima</div>
        </div>
        <div className="invite-frame">
        <div className="garima-image"><img src='/vishal-1.jpeg'/></div>
        <div className="vishal-image-name">Vishal Gupta</div>
        <div className="garima-image-name">Garima Chudiwale</div>
        <div className="garima-image"><img src='/garima-1.jpeg'/></div>
        </div>
        <div className="invite-message">Be part of the joy as we begin this beautiful journey together. Save the Date!</div>
        <div className="heading-frame"><img src='/heading-frame-1.png'/></div>
        <Content />
        <div className="end-message">Crafted in &#x1F496; by Nitisha</div>
    </div>
  )
}
