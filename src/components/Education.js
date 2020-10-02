import React, { Component } from 'react';
import AceEditor from "./AceEditors";

const education =
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h2>Education</h2>
        <p>University of North Carolina at Chapel Hill</p><small>2015-2020</small>
        <p>Computer Science Bachelor of Arts</p>

        <p>Relevant Coursework:</p>
        <ul>
            <li>Artificial Intelligence</li>
            <li>Algorithms</li>
            <li>Computer Organization</li>
            <li>Data Structures</li>
            <li>Bioalgorithms</li>
            <li>Computational Languages</li>
            <li>Game Development</li>
            <li>Web Programming</li>
            <li>Calculus I, II, III</li>
        </ul>
        
    </body>
</html> `;

export default class Education extends Component {
    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / education.js</h3>
                </div>
                <AceEditor values={education}/>
            </div>
        )
    }
}
