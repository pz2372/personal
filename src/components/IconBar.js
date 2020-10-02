import React, { Component } from 'react'
import linkedIn from '../icons/linkedin.png'
import github from '../icons/github.png';
import insta from '../icons/insta.png';



export default class IconBar extends Component {
    render() {
        return (
            <div class="icon-bar">
                <a href="https://www.linkedin.com/in/peter-zheng-647523155/"><img src={linkedIn} class="icon"/></a>
                <a href="https://github.com/pz2372"><img src={github} class="icon"/></a>
                <a href="https://www.instagram.com/peterz96/"><img src={insta} class="icon"/></a>
            </div>
        )
    }
}