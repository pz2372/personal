import React, { Component } from 'react';
import AceEditor from "./AceEditors";

const contact =
`<!DOCTYPE html>
<html lang="en">
    <body>
    
        <h2>Let's Talk</h2>
        <p>
            I'd love to hear from you. Whether you would like to talk about an opportunity or just want to chat, 
            my inbox is always open!
        </p>
        <a href="peterz9090@gmail.com"><button>Say Hello</button></a>
        
    </body>
</html>

`;


export default class Contact extends Component {
    render() {
        return (
            <div class="whole-column">
                <div class="path">
                    <h3>Personal Website / contact.js</h3>
                </div>
                <AceEditor values={contact}/>
            </div>
        )
    }
}
