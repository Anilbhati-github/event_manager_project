import React, { Component } from 'react'

class Add extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name : '',
            place : '',
            event_time : ''
        }
    }

    handleSubmit = async (event)=> {
        event.preventDefault();
        console.log(`...................handleSubmit  `)
        const data = {
            name : this.state.name,
            place : this.state.place,
            event_time: this.state.event_time
        };
        console.log(`>>>>>>data >>>>>>>${JSON.stringify(data)}`)

        const res = await fetch('http://localhost:8086/add/new_event',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        console.log(`...................res  , res`, res)

    }

    onnNameChange = (e) => {
        this.setState({
            name : e.target.value



        })
    }

    onnPlaceChange = (e) => {
        this.setState({
            place : e.target.value



        })
    }

    onnEvent_TimeChange = (e) => {
        this.setState({
            event_time : e.target.value



        })
    }
    render() {
        return (
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label htmlFor="name">Enter name</label>
                <input id="name" name="name" type="text"  value={this.state.name} onChange={(e)=>this.onnNameChange(e)}/>

                <label htmlFor="place">Enter your place</label>
                <input id="place" name="place" type="text" value={this.state.place} onChange={(e)=>this.onnPlaceChange(e)}/>

                <label htmlFor="event_time">event_time</label>
                <input id="event_time" name="event_time" type="text" value={this.state.event_time} onChange={(e)=>this.onnEvent_TimeChange(e)}/>

                <button type='submit' >Submit</button>
            </form>
        );
    }
}


export default Add;