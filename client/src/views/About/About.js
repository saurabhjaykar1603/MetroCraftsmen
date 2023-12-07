import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DattaImg from './Image/datta.jpg';
import Aarti from './Image/aarti .jpeg';
import Saurabh from './Image/saurabh.jpeg';
import Shital from './Image/shital.jpeg';

function About() {
  return (
    <div>
      <Navbar />
      <div>
        <div className='about-container-wonner fist-con'>
          <div className='img-container'>
            <img src={Aarti} className='img-about' />
          </div>
          <div className='information-container '>
            <p className='about-paraghrap'><span className='about-span-con'>Name :-</span> Medhe Aarti</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>aartimedhe16601@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/aaru-01</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/in/aartimedhe/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span> https://peerlist.io/aartimedhe</p>
          </div>
        </div>

        <div className='about-container-wonner second'>
          <div className='img-container'>
            <img src={Saurabh} className='img-about' />
          </div>
          <div className='information-container'>
            <p className='about-paraghrap'><span className='about-span-con'>Name :-</span> Jaykar Saurabh </p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>jaykarsaurabh97@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/saurabhjaykar1603</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/saurabh-jaykar</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span>https://peerlist.io/saurabhjaykar16</p>
          </div>
        </div>

        <div className='about-container-wonner fist-con'>
          <div className='img-container'>
            <img src={Shital} className='img-about' />
          </div>

          <div className='information-container '>
            <p className='about-paraghrap'><span className='about-span-con'>Name  :-</span>Warkhade Shital</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>shitalwarkhade89@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/shitalwarkhade89</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span>  https://www.linkedin.com/in/<br/>shitalwarkhade89/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span>  https://peerlist.io/shitalwarkhade</p>
          </div>
        </div>

        <div className='about-container-wonner second'>
          <div className='img-container'>
            <img src={DattaImg} className='img-about' />
          </div>
          <div className='information-container'>
            <p className='about-paraghrap'><span className='about-span-con'>Name  :-</span> Tupe Dattatray</p>
            <p className='about-paraghrap'><span className='about-span-con'>Email :-</span>dattatupe77@gmail.com</p>
            <p className='about-paraghrap'><span className='about-span-con'>GitHub :-</span> https://github.com/datta88</p>
            <p className='about-paraghrap'><span className='about-span-con'>Linkdin :-</span> https://www.linkedin.com/in/dattatray-tupe/</p>
            <p className='about-paraghrap'><span className='about-span-con'>PeerList :-</span> https://peerlist.io/dattatraytupe</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About
