// import React , { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React ,{Component} from 'react';
import Add from "./components/Add_new_event";
import Today_eve from "./components/Today_event";
import pastEvents from "./components/past_events";
import futureEvents from "./components/future_events";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <Router >
                <div className="App">
                    <ul>
                        <li>
                            <Link to="/Today_event">Home</Link>
                        </li>
                        <li>
                            <Link to="/Add_new_event">Add_new_event</Link>
                        </li>
                        <li>
                            <Link to="/Past_events">Past_events</Link>
                        </li>
                        <li>
                            <Link to="/Future_events">Future_events</Link>

                        </li>

                    </ul>



                    <Switch>
                        <Route exact path='/Add_new_event' component={Add}></Route>
                        <Route exact path='/Today_event' component={Today_eve}></Route>
                        <Route exact path='/past_events' component={pastEvents}></Route>
                        <Route exact path='/future_events' component={futureEvents}></Route>
    }
                        }/>
                    </Switch>

                </div>
            </Router>
        );
    }
}


export default App