import React from 'react';
import './Footer.css'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="footer">
                    <div className="footer-links">
                        <p>This project was created by: </p>
                        <a href="https://www.linkedin.com/in/skylar-wong/">Skylar Wong</a> <br></br>
                        <a href="https://www.linkedin.com/in/alancmccracken/">Alan McCracken</a> <br></br>
                        <a href="https://www.linkedin.com/in/alanna-celentano">Alanna Celentano</a> <br></br>
                        <p>View the source code <a href="https://github.com/Team-Dragon-Slayers/dragon-slayers">here</a> and reach out to the creators on LinkedIn for more info!</p>
                    </div>
                    <div className="footer-info">
                        <p>This project was created for the <a href="https://mintbean.io/mb-event/ea9ea928-a59b-4503-8ea7-feb0b85868b2">Mintbean Multiplayer Hackathon</a>.</p>
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