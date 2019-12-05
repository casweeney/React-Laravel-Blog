import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Example from './components/Example';
import Blog from './components/Blog';
import BlogArticle from './components/BlogArticle';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/blog">Blog</Link>

                        <Route path="/" exact component={Example} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" exact component={BlogArticle}/>
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
