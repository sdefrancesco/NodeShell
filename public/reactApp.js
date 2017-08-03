require('./css/main.css')


import React from 'react'
import ReactDOM from 'react-dom'
import Murk from './murk.js';

class App extends React.Component {
    constructor() {
       super();
       this.state = {
           hi: 'hi there from react',
           titleTerm: '',
           data: [],
       } 
    }

    componentWillMount() {
        this.fetchPosts()
    }

    fetchPosts() {
           var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhttp.responseText)
                this.setState({
                    data: xhttp.responseText
                 })
            }
        }.bind(this);
        xhttp.open("GET", "/posts/posts.json", true);
        xhttp.send();

    }

    handleChange(e) {
        if(e.target.value) {
            this.setState({
                titleTerm: 'title: ' + e.target.value
            })
        } else {
            this.setState({
                titleTerm: 'There is No Title, Create One'
            })
        }

    }


    render() {
        var posts = this.state.data.map(function(post) {
            return (
                <div key={post._id}>{post.title}</div>
            )
        })
        return (
            <div>
                <div className='yo'>{this.state.hi}</div>
                <Murk murk={this.state.hi}/>
                <form action='/posts/new' method='POST'>
                    <input name='title' placeholder='title' onChange={this.handleChange.bind(this)}/>
                    <h5>{this.state.titleTerm}</h5>
                    <input name='description' placeholder='description'/>
                    <input type='submit' />
                </form>
                {posts}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))