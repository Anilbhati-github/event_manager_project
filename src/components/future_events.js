// import React, { useState, useEffect, Component } from "react";
// import axios from "axios"
// class  FutureEvents extends  Component{
//     state = {
//         events : [],
//         hasError : false
//     }
//     // const [planets] = useState({})
//     // const [hasError] = useState(false);
//
//     componentDidMount() {
//         this.fetchData()
//     }
//
//     fetchData= ()=> {
//         console.log(`>>>>>>>>>>>>>>>>>getting res`)
//         axios.get('http://localhost:8086/future_events').then(res => {
//             console.log(`>>>>>>>>>>data>>>>>>>${JSON.stringify(res.data.data)}`)
//             this.setState({
//                 events: res.data.data
//             })
//             }).catch((err) => {
//             console.log(`>>>>>>>err>>>>>>>>>>${JSON.stringify(err)}`)
//         })
//
//     }
//     render() {
//
//
//         return (
//             <div>
//                 <h1> future events details</h1>
//
//                 <table border="1">
//                     <thead>
//                     <tr>
//                         <th>sn</th>
//                         <th>name</th>
//                         <th>place</th>
//                         <th>event time</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.events.map((val,i) => (
//                         <tr key={i}>
//                             <td key={val.id}>{val.id}</td>
//                             <td key={val.name}>{val.name}</td>
//                             <td key={val.place}>{val.place}</td>
//                             <td key={val.event_time}>{val.event_time}</td>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }
//
// export default FutureEvents;
//
//


//future events new

import React, { Component } from "react";
import { anotherName1} from "../redux/actions";
import {connect} from "react-redux";
import moment from "moment";
import {filter} from "lodash"

class  Future_events extends  Component{
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
        const futureEvents = filter(event,x=>
            moment().format('YYYY-MM-DD') < moment(x.event_time).format('YYYY-MM-DD')
        )
        console.log(`>>>>>>>>>>>>>>>>>pastEvents res`,JSON.stringify(futureEvents))
        this.setState({
            events : futureEvents
        })
        console.log(`>>>>>>>>>>>>>>>>>getting res`,JSON.stringify(this.props.reducer))
        //console.log(`>>>>>data>>>>>>>>>>>>>>${JSON.stringify(this.props.reducer})

        console.log('>>>>>>>>>>>>>>>>>>>data is coming')

    }



    render() {


        return (

            <div>
                <h1> future events details</h1>

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
        changeName:()=>{dispatch(anotherName1())}
    }
}


export default connect(mapStateToProps,mapDispatchProps)(Future_events);


