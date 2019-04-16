import React, { Component } from 'react';
import './about-me.css';

class AboutMe extends Component {
    render() { 
        return ( 
            <div>
                <div className="description">
                    I like traveling, sports, music, and stuff.
                    My favorite sports are: 
                    <ul>
                        <li>
                            tennis
                        </li>
                        <li>football</li>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default AboutMe;