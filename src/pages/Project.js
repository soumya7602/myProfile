import React, { useEffect, useState } from 'react';
import { PROJECTS } from "../document";
import '../styles/Project.css'

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 100) {
                setIsVisible(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="project-container">
            <div className='project-cont'>
            <h1 className={`project-title ${isVisible ? 'fadeInDown' : ''}`}>Project</h1>
            <div className='project-body'>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="project-item">
                        <div className={`project-image ${isVisible ? 'fadeInLeft' : ''}`}>
                            <img 
                                src={project.image}
                                alt={project.title}
                                width={150}
                                height={150}
                                className="rounded"
                            />
                        </div>
                        <div className={`project-details ${isVisible ? 'fadeInRight' : ''}`}>
                            <h6>{project.title}</h6>
                            <p className="text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="project-tech">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default Project;
