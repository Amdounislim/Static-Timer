import React, { Component } from 'react'
import './App.css';

export default class Timer extends Component {
    render() {
       return <div>
                 <h1>00:30:00</h1>
                 <div className="unite">
                    <span>Hour</span>
                    <span>Minute</span>
                    <span>Second</span>
                 </div>
              </div>
    }
}