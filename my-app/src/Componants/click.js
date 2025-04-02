import React, { Component } from 'react'

export class click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }
    UpdateClick=()=>{
        this.setState({count: this.state.count +1});

    };
    
  render() {
    const{ count } = this.state;
    return (
      <div>
        <button onClick ={this.UpdateClick} >clicked {count} i time</button>
      </div>
    );
  }
}

export default click
