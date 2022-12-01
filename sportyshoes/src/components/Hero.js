import React from 'react'
import '../css/hero.css'
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'
import p6 from '../images/p6.jpg'
function Hero() {
  return (
    <div className='wrapper'>

    <div class="gallery">
        <img src={p1} alt="male block"/>
        <img src={p2} alt="nike high top dunks"/>
        <img src={p4} alt="female reflection"/>
        <img src={p5} alt="male airforce"/>
        <img src={p6} alt="male vans"/>
    </div>
    </div>
  )
}

export default Hero