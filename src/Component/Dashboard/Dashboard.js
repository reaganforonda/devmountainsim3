import React, {Component} from 'react';


export default class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchInput : '',
            checkbox : true,
            posts : []
        }

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }



    handleSearchInput(e){
        this.setState({[e.target.name] : e.target.value});
    }

    handleCheckBox(){
        this.state.checkbox ? this.setState({checkbox : false}) : this.setState({checkbox : true});
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