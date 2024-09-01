import React, { useEffect } from 'react';
import IMG from '../assets/A_Img.jpg';
import '../styles/Homehover.css';
import { FiGithub } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { GrLinkedinOption } from "react-icons/gr";
function HoverComponent() {
    useEffect(() => {
        const skillSections = document.querySelectorAll('.skill-p');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        });
        skillSections.forEach(section => observer.observe(section));
        // Cleanup the observer when the component unmounts
        return () => observer.disconnect();
    }, []);
    return (
        <div className="content">
            <div className="main-content">
                <div className='heading'>About</div>
                <div className='main-content-body'>
                    <div className='body-Img'>
                        <img src={IMG} alt='IMG' />
                        <h3 className='name'>Soumya Ghosh</h3>
                        <p className='gradient-text'>Full Stack Developer</p>

                        <div className="body-img-icons">
                            <ul>
                                <li><a className='icon-a' href="/"><FiGithub /></a></li>
                                <li><a href="/"><CgMail /></a></li>
                                <li><a href="/"><GrLinkedinOption /></a></li>
                                <li><a href="/"><FiGithub /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='body-text'><p>Experienced Frontend Developer creating high-quality web applications that balance functionality and visual appeal.
                        With a global perspective , I'm eager to explore innovative approaches and grow my skills.
                        Feel free to reachout <span>—I'm open for new,exciting opportunities! </span></p>
                    </div>
                </div>
            </div>

            <div className='Skill'>
                <div className='skill-section'>
                    <h1>Tech Stack</h1>
                    <div className='skill-div'>
                        <p className='skill-p'>HTML</p>
                        <p className='skill-p'>CSS</p>
                        <p className='skill-p'>Javascript</p>
                        <p className='skill-p'>Reactjs</p>
                        <p className='skill-p'>Nextjs</p>
                        <h3 >Open to learning new techs</h3>
                    </div>
                </div>
            </div>


            {/* //learning */}
            <div className='learning'>
                <div className='My-learning'>
                    <h1>My learning journey</h1>
                    <p>
                        Additionally,I've earned a few certificates,
                        emphasizing my dedication to continual learning
                        and skill development.I'm always open to new
                        learning opportunities, eager to enhance my
                        skills even further.
                    </p>
                    <div className='my-learning-journey'>


                    </div>
                </div>
                <div className='my-learning-advice'>
                    <div className="learning-icons">
                        <ul>
                            <li>
                                <a href="/"><FiGithub /></a>
                                <span className="icons-text">Github</span>
                            </li>
                            <li>
                                <a href="/"><CgMail /></a>
                                <span className="icons-text">Mail</span>
                            </li>
                            <li>
                                <a href="/"><GrLinkedinOption /></a>
                                <span className="icons-text">LinkedIn</span>
                            </li>
                            <li>
                                <a href="/"><FiGithub /></a>
                                <span className="icons-text">Github</span>
                            </li>
                        </ul>
                    </div>

                    <div className='contact-us'>
                        <div className='div-1'>
                            <h4>Get in touch</h4>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' placeholder='Name' />
                            <label htmlFor='email'>E-mail</label>
                            <input type='email' id='email' placeholder='E-mail' />
                        </div>
                        <div className='div-2'>
                            <label htmlFor='message'>Message</label>
                            <textarea id='message' placeholder='Your message here'></textarea>
                            <button type='submit'>Submit</button>
                        </div>
                    </div>

                    <div className='resume' >
                       <a href='https://drive.google.com/file/d/1o_mftcxFkzH5FW9AoCfjX4RS23JD0tEn/view?usp=drive_link'> <h5>Resume</h5></a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default HoverComponent;
