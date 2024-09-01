import React from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
import IMG from '../assets/b3.png';
function Home() {
  const handleClick = () => {
    navigate("/About")
  };
  const navigate = useNavigate()




  return (
    <div>
      <div className="home" >
        <div className='home-hover' >
          <img src={IMG} />
          <h1 onClick={handleClick}>
            Hi, I am Soumya<br />
          </h1>
          <p>Web Developer</p>
          <div className='aboutpage'>Read more
            <a href='/About' >About me </a>
            or
            <a href='/contact'>Contact me</a>
          </div>
        </div>

      </div>
    </div>

    //         <div className='section'>
    //                  <div className='body'>
    //                       <div> 
    //                           <h2>Hi,</h2>
    //                           <p>I'm Soumya </p>
    //                           <p>a Developer</p>
    //                           <div><span>Read more <a href='/About'>about me </a> or <a href='/contact'>contact me</a>  </span></div>
    //                       </div>
    //                      <div className='img'>
    //                           <img src={IMG} alt=""/>
    //                      </div>
    //                  </div>
    //         </div>
  );
}

export default Home;




