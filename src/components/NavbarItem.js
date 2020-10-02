import React, { Component } from 'react'

export default class NavbarItem extends Component {
    render() {
        return (
            this.props.items.map((item) => (
                <a href={item.url} class={item.class}><img src={item.icon} />{item.name}</a>
            ))
        )
    }
}
