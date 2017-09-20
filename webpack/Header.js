import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

    export default class Header extends React.Component {
        render() {
        return(
            <div>
            <h1 className='name'>AC Gillette</h1>
            <ul className='nav'>
                <li>
                    <NavLink activeClassName='active' to='/'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/about'>
                        About
                    </NavLink>
                </li> 
                <li>
                    <NavLink activeClassName='active' to='/blog'>
                        Blog
                    </NavLink>
                </li>
            </ul>
            <a href="https://github.com/acgillette"><i className="fa fa-github-alt fa-lg"></i></a>
            <a href="https://twitter.com/quartzcrusher"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/anacelia-gillette-aaa633113/"><i className="fa fa-linkedin fa-lg"></i></a>

            </div>
        )
    }
}
