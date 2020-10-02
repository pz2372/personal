import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const creek = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>Ellerbe Creek Association</h1>
        <h2>iOS Application Developer</h2>
        <i>Date: January 2020 - May 2020</i>

        <p>
            The project's objective was to provide consumers
            with an interactive activity during their visit to the reserves and
            increase subsequent visits in the future. My team decided to develop a game 
            similar to Pokemon GO using geolocations, augmented reality and 3D models of 
            native animals in the reserves. 
        </p>

        <ul>
            <li>
                Managed project by delegating tasks to members, staying up to date with
                code on GitHub, and ensuring deadlines were met weekly.
            </li>
            <li>
                Constant communication with client to ensure each step of building process
                was up to their standard.
            </li>
            <li>
                Utilized ARKit, Mapbox, and 3D Models to produce front-end interface.
            </li>
            <li>
                Gained intermediate experience in Swift and Firebase.
            </li>
        </ul>

    </body>
</html>`;

export default class EllerbeCreek extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / EllerbeCreek.js</h3>
                </div>
                <AceEditor values={creek}/>
            </div>
        )
    }
}