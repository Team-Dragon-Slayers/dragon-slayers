import React from 'react';
import './Footer.css'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="footer">
                    <div className="footer-links">
                        <p>This project was created by: </p>
                        <a className="link" href="https://www.linkedin.com/in/skylar-wong/">Skylar Wong</a> <br></br>
                        <a className="link" href="https://www.linkedin.com/in/alancmccracken/">Alan McCracken</a> <br></br>
                        <a className="link" href="https://www.linkedin.com/in/alanna-celentano">Alanna Celentano</a> <br></br>
                        <p><a id="source-link" href="https://github.com/Team-Dragon-Slayers/dragon-slayers">Click here to view the source code for this project</a></p>
                    </div>
                    <div className="footer-info">
                        <p>This project was created for the <a className="link" href="https://mintbean.io/mb-event/ea9ea928-a59b-4503-8ea7-feb0b85868b2">Mintbean Multiplayer Hackathon</a>.</p>
                        <p>Motivation and ideas for this game come from our favorite RPGs, board games, and deck-builders.</p>
                        <p>Better images and multiplayer functionality coming soon!</p>
                        <p></p>
                    </div>
                </div>
            </footer>
        </>

     );
}
 
export default Footer;