import React, { Component } from 'react'
import NavbarItem from './NavbarItem';
import arrow from '../icons/arrow.png'
import ellerbe from '../icons/ellerbe.png'
import info from '../icons/info.png'
import about from '../icons/about.png'
import education from '../icons/education.png'
import lambda from '../icons/lambda.png'
import bull from '../icons/bull.png'
import packages from '../icons/package.png'

export default class Navbar extends Component {
    state = {
        navItems: [{
            name: 'About',
            url: "/",
            icon: about
        }, {
            name: 'Education',
            url: "/education",
            icon: education
        }, {
            name: 'Experience',
            url: "",
            icon: arrow  
        }, {
            name: 'Ellerbe Creek Association',
            url: "/ellerbecreek",
            icon: ellerbe,
            class: "experience"
        }, {
            name: 'The Bullish Channel',
            url: "/thebullishchannel",
            icon: bull,
            class: "experience"
        }, {
            name: 'unclambdas.com',
            url: "/unclambdas",
            icon: lambda,
            class: "experience"
        }, {
            name: 'UNC Lambda Phi Epsilon',
            url: "/lambdaphiepsilon",
            icon: lambda,
            class: "experience"
        }, {
            name: 'Contact',
            url: "/contact",
            icon: about
        }, {
            name: 'Resume',
            url: "/about",
            icon: info
        }, {
            name: 'package.json',
            url: "",
            icon: packages
        }, {
            name: 'package-lock.json',
            url: "",
            icon: packages
        }, {
            name: 'README.md',
            url: "",
            icon: info
        }
        ]
    }

    render() {
        return (
            <div class="column">
                <h2>Editor</h2>
                <h3><img src={arrow}/>Personal Website</h3>
                <div class="sidenav">
                    <NavbarItem items={this.state.navItems} />
                </div>
            </div>
        )
    }
}
