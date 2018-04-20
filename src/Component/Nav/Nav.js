import React from 'react';

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Nav extends React.Component{
    render(){
        
        const {username, img} = this.props;
        return (
            <div>
                <img src={img} alt=''/>
                <p>{username}</p>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/Post'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return {
        username : state.username,
        img : state.img
    };
}

export default connect(mapStateToProps, {})(Nav);
  