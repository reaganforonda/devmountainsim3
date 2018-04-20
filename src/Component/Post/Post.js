import React, {Component} from 'react';


export default class Post extends Component{
    constructor(props){
        super(props);

        this.state = {
            title : '',
            img : '',
            content : '',
            username : '',
            profilePic : ''
        }
    }

    render(){
        return (
            <div>
                <p>{this.state.title}</p>
                <img src={this.state.img} alt=''/>
                <p>{this.state.content}</p>
                <p>{this.state.username}</p>
                <img src={this.state.profilePic} alt=''/>                
            </div>
        )
    }
}