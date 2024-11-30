import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const holding = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>J & P Holding Group</h1>
        <h2>Software Engineer</h2>
        <i>Date: May 2022 - January 2024</i>

        <ul>
            <li>
                Spearheaded development of 3 web applications and implemented responsive front-end 
                interfaces using React, Bootstrap, ExpressJS, MongoDB, AWS, Figma and SCSS
            </li>
            <li>
                Utilized cache and AWS CDN for content delivery, resulting in reduced latency and
                improved 10% load times
            </li>
            <li>
                Developed robust back-end APIs, ensuring data integrity and security throughout 
                application with Authentication
            </li>
            <li>
                Maintained clear documentation of system architectures, workflows, and coding standards 
                for team members.
            </li>
            <li>
                Communicated effectively with key stakeholders and partners to identify and pursue potential 
                opportunities on increasing revenue and business expansion
            </li>
            <li>
                Provided continuous iteration of testing and development to improve customer usability and 
                navigation on the platform
            </li>
            <li>
                Developed code testing with Jest
            </li>
        </ul>

    </body>
</html>

`;

export default class JPHolding extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / J&P Holdings Group</h3>
                </div>
                <AceEditor values={holding}/>
            </div>
        )
    }
}