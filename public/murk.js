import React from 'react'

export default class Murk extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>{this.props.murk}</div>
        )
    }
}