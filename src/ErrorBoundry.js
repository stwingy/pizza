import React, { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {
        hasError: false,
        info: ""
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true, info: info })
    }
    render() {
        if (this.state.hasError) {
            return <div>
                <h1>Ooooops ......something went wrong</h1>
                <p>{this.state.info}</p>
            </div>
        }
        return this.props.children
    }
}
