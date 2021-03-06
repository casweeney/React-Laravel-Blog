import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import axios from 'axios';

export default class Blog extends Component {

    constructor() {
        super();

        this.state = {
            blogs: []
        }
    }

    UNSAFE_componentWillMount() {
        axios.get('/api/blog').then(response => {
            this.setState({
                blogs: response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.blogs.map(blog => 
                    <li key={blog.id}>
                        <Link to={{ pathname: `/blog/ ${blog.id}`, state: blog}}>{blog.name}</Link>
                    </li>
                )}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Blog />, document.getElementById('example'));
}
