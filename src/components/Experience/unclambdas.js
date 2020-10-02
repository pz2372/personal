import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const lambdas = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>unclambdas.com</h1>
        <h2>Web Developer/ Web Manager</h2>
        <i>Date: August 2018 - May 2019</i>

        <p>
            Put in charge of managing website of the organization.  
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
                Gained intermediate understand of Swift and Firebase.
            </li>
        </ul>

    </body>
</html>`;

export default class unclambdas extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / unclambdas.js</h3>
                </div>
                <AceEditor values={lambdas}/>
            </div>
        )
    }
}