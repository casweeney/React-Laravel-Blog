import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class BlogArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            post: {}
        };
    }

    componentDidMount() {
        console.log(this.props.location.state)
        axios.get("/api/blog/" + this.props.match.id).then(response => {
            this.setState({ post: response.data[0] });
        }).catch(error => console.log(error));
    }
    

    render() {
        return (
            <div>
                <h1>{this.props.location.state.name}</h1>
                <p>{this.props.location.state.body}</p>
            </div>
        );
    }
}