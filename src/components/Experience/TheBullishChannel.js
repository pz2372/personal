import React, { Component } from 'react'
import AceEditor from "../AceEditors";

const channel =
`<!DOCTYPE html>
<html lang="en">
    <body>

        <h1>TheBullishChannel</h1>
        <h2>Web Developer</h2>
        <i>Date: January 2020 - August 2020</i>

        <p>
           As a trader, I noticed that beginner traders had very few resources to use in order
           to start investing in the stock market. I took it upon myself to build a website that not
           only provides educational material but also a watchlist and chatroom for traders. This project
           was a great learning experience as it allowed me to gain proficiency in server-side programming.
        </p>

        <ul>
            <li>
                Built front-end and back-end of web application while utilizing APIs and a database.
            </li>
            <li>
                Designed uniform user-interface with Adobe XD and translated it into HTML and CSS.
            </li>
            <li>
                Worked with cookies and RESTful APIs to provide smooth user experience.
            </li>
            <li>
                Gained understanding in Bootstrap, React, Express, Firebase Cloud, and Scaledrone.
            </li>
        </ul>

    </body>
</html>`;

export default class TheBullishChannel extends Component {

    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / Experience / TheBullishChannel.js</h3>
                </div>
                <AceEditor values={channel} />
            </div>
        )
    }
}