import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Example from './components/Example';

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
                    </div>
                </Router>
                
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
