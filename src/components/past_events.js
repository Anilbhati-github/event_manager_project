import React, { Component } from "react";
import {anotherName} from "../redux/actions";
import {connect} from "react-redux";
import moment from "moment";
import {filter} from "lodash"

class  PastEvents extends  Component{
    state = {
        events : [],
        hasError : false
    }

    componentDidMount() {
        console.log(`<>>>>>>>>>>props>>>>${JSON.stringify(this.props)}`)
         this.fetchData()
    }


    fetchData= async ()=> {
        console.log(`>>>>>>>>>>>>>>>>>getting res`)

      await this.props.changeName()
        const event =this.props.reducer.event
        const pastEvents = filter(event,x=>
            moment().format('YYYY-MM-DD') > moment(x.event_time).format('YYYY-MM-DD')
        )
        console.log(`>>>>>>>>>>>>>>>>>pastEvents res`,JSON.stringify(pastEvents))
        this.setState({
            events : pastEvents
        })
        console.log(`>>>>>>>>>>>>>>>>>getting res`,JSON.stringify(this.props.reducer))
        //console.log(`>>>>>data>>>>>>>>>>>>>>${JSON.stringify(this.props.reducer})

        console.log('>>>>>>>>>>>>>>>>>>>data is coming')

    }



    render() {


        return (

            <div>
                <h1> past events details</h1>

                <table border="1">
                    <thead>
                    <tr>
                        <th>sn</th>
                        <th>name</th>
                        <th>place</th>
                        <th>event time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.events.map((val,i) => (
                        <tr key={i}>
                            <td key={val.id}>{val.id}</td>
                            <td key={val.name}>{val.name}</td>
                            <td key={val.place}>{val.place}</td>
                            <td key={val.event_time}>{val.event_time}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>


        )
    }

}

const mapStateToProps=(state)=>{
    return {
        reducer  : state.events
    }
}

const mapDispatchProps = (dispatch)=> {
    return {
        changeName:()=>{dispatch(anotherName())}
    }
}


export default connect(mapStateToProps,mapDispatchProps)(PastEvents);


