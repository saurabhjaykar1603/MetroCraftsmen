import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DattaImg from './Image/datta.jpg'

function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='about-container-wonner fist-con'>
          <div className='img-container'>
            <img src={DattaImg} className='img-about' />
          </div>
          <div className='information-container '>
            <p className='about-paraghrap'><span className='about-span-con'>Name  :-</span> Tupe Datta</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>dattatupe77@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/datta88</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/in/dattatray-tupe/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span> https://peerlist.io/dattatraytupe</p>
          </div>
        </div>

        <div className='about-container-wonner second'>
          <div className='img-container'>
            <img src={DattaImg} className='img-about' />
          </div>
          <div className='information-container'>
            <p className='about-paraghrap'><span className='about-span-con'>Name  :-</span> Tupe Datta</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>dattatupe77@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/datta88</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/in/dattatray-tupe/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span> https://peerlist.io/dattatraytupe</p>
          </div>
        </div>

        <div className='about-container-wonner fist-con'>
          <div className='img-container'>
            <img src={DattaImg} className='img-about' />
          </div>
          <div className='information-container '>
            <p className='about-paraghrap'><span className='about-span-con'>Name  :-</span> Tupe Datta</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>dattatupe77@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/datta88</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/in/dattatray-tupe/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span> https://peerlist.io/dattatraytupe</p>
          </div>
        </div>

       
      </div>
      <h1>About</h1>
      <Footer />
    </div>
  )
}

export default About
