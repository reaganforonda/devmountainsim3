import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

export class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchInput : '',
            checkbox : true,
            posts : []
        }

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }


    componentDidMount(){
        this.handleSearch();
    }

    handleSearchInput(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleCheckBox(){
        this.state.checkbox ? this.setState({checkbox : false}) : this.setState({checkbox : true});
    }

    handleSearch(){
        let userId = this.props.userid;
        axios.get(`/api/posts/${userId}?userposts=${this.state.checkbox}&search=${this.state.searchInput}`).then((result) => {
            this.setState({posts : result.data});
        }).catch((e) => {
            console.log(e);
        })
    }

    handleReset(){
        let userId = this.props.userid;
        this.setState({searchInput : ''});
        this.setState({checkbox : true});
        axios.get(`/api/posts/${userId}?userposts=${this.state.checkbox}&search=${this.state.searchInput}`).then((result) => {
            this.setState({posts : result.data});
        }).catch((e) => {
            console.log(e);
        })
    }

    render(){

        let arrPosts = this.state.posts.map((post, i) => {
            return (
                <div key={post + i}>
                    <p>{post.title}</p>
                    <p>{post.username}</p>
                    <p>{post.img}</p>
                </div>
            )
        })

        return (
            <div>
                <input name='searchInput' onChange={(e)=>this.handleSearchInput(e)} placeholder='Search by Title'/>
                <button>Search</button>
                <button>Reset</button>
                My Post <input type='checkbox' onClick={()=>this.handleCheckBox()} checked={this.state.checkbox}/>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userid : state.id
    }
}

export default connect(mapStateToProps)(Dashboard);