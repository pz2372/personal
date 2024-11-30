import React, { Component } from 'react'

export default class NavbarItem extends Component {
    render() {
        return (
            this.props.items.map((item) => {
                if (item.url === "") {
                   return <span class={item.class}><img src={item.icon} />{item.name}</span>
                } else {
                   return <a href={item.url} class={item.class}><img src={item.icon} />{item.name}</a>
                }
               
    })
        )
    }
}
