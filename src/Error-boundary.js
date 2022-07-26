import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    message: ''
  }

  static getDerivedStateFromError(error) {
    console.log(typeof error)
    
    return {
      hasError: true,
      message: error.message
    }
  } 

  render() {
    if(this.state.hasError) {
      return <h1>OCORREU O SEGUINDTE ERRO: {this.state.message}</h1>
    }

    return this.props.children
  }
}