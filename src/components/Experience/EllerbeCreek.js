import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const creek = 
`<!DOCTYPE html>l
<html lang="en">
    <body>

        <h1>Ellerbe Creek Association</h1>
        <h2>iOS Application Developer</h2>
        <i>Date: August 2019 - May 2020</i>

        <p>
            The project's objective was to provide consumers with an interactive 
            activity during their visit to the reserves and increase subsequent visits 
            in the future. My team developed a game similar to Pokemon GO using 
            geolocations, augmented reality and 3D models of native animals in the reserves. 
        </p>

        <ul>
            <li>
                Collaborated closely with local environmental group to align app functionality with fostering community
                involvement and increase traffic in reserves
            </li>
            <li>
                Managed team of three members through delegating tasks, conducting code reviews, and ensuring
                adherence to project timelines
            </li>
            <li>
                Leveraged Swift, Firebase, ARKit, Mapbox, and 3D models to create immersive and educational augmented
                reality experiences for users
            </li>
            <li>
                Gathered feedback throughout development process, ensuring each milestone is up to standard and final
                product meets expectations
            </li>
        </ul>

    </body>
</html>

`;

export default class EllerbeCreek extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / Ellerbe Creek Association</h3>
                </div>
                <AceEditor values={creek}/>
            </div>
        )
    }
}