import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Muhammad Usama</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I am a Front-end developer with over 2 years of experience developing eﬀective and interactive
          high-performance web applications. I am passionate about transforming raw ideas into impactful websites and products that make a difference. I thrive on challenges that push my skills as a developer and enjoy creating work that I can take pride in.<br /><br />
          I am currently honing my skills in <b>MERN stack technology </b> and actively working on real-world projects using <b>Next.js</b>, <b>Typescript</b>. <br /><br />
          Beyond coding, I enjoy a good cup of <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home