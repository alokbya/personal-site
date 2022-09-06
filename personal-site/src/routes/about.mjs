import React from 'react'
import { Link } from 'react-router-dom';
import { getSocials } from '../data/socials.mjs'
import { getIntro } from '../text/home-intro.mjs';

const About = () => {
    let socials = getSocials();
    let intro = getIntro();
    return (
        <>
        <h2>About</h2>
        <p>{intro}</p>
            <div style={{ display: "flex" }}>
            <nav
                style={{
                borderRight: "solid 1px",
                padding: "1rem",
                }}
            >
                <div>
                    
                </div>
                {socials.map((social) => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/about/${social.name}`}
                    key={social.number}
                >
                    {social.name}
                    { " | " + social.address}
                </Link>
                ))}
            </nav>
            </div>
        </>
      );
}

export default About