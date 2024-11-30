import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const seniorLife = 
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>Senior Life Insurance Company</h1>
        <h2>Web Developer</h2>
        <i>Date: April 2021 - January 2022</i>

        <ul>
            <li>
                Integrated XML with iSeries back-end systems while leveraging REST APIs to 
                streamline data exchange and enhance system interoperability
            </li>
            <li>
                Led redevelopment of company's agent portal with Angular, modernizing interface 
                and client application process with Agile methods and CI/CD
            </li>
            <li>
                Updated login portal to become backwards compatible with Safari 9 and modernized 
                UI to improve user accessibility
            </li>
            <li>
                Implemented loggers, tracers, and stats table to count events to debug application 
                during end-to-end testing
            </li>
            <li>
                Collaborated with cross-functional teams to ensure on-time web application delivery 
                within budget constraints
            </li>
        </ul>

    </body>
</html>

`;

export default class SeniorLifeInsurance extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / Senior Life Insurance Company</h3>
                </div>
                <AceEditor values={seniorLife}/>
            </div>
        )
    }
}