import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Auth from './Component/Auth/Auth';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Post from './Component/Post/Post';

export default function Routing(props){
    const {location} = props;
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Auth} location={location}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/post/:postid' component={Post}/>
                <Route path='/new' component={Form}/>
            </Switch>
            
        </div>
    )
}

