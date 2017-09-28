import React, { Component } from 'react';

export default class Projects extends React.Component {
    render() {
        return(
            <div>
                 <section className="column small-6 intro">
                    <h2 className="section-header">Hi Hey Hello</h2>
                    <p>
                    <i className="fa fa-handshake-o fa-lg" aria-hidden="true"></i> I'm <a href="https://twitter.com/quartzcrusher">AC</a>. I'm a current student at <a href="http://adadevelopersacademy.org/">Ada Developers Academy</a>,
                    a software development school for women and people of nonbinary gender in Seattle. Before that I was an <a href="https://flickr.com/apogeion">art student</a> in New Mexico.
                    </p>
                    <p id="contact">
                    <i className="fa fa-envelope fa-lg" aria-hidden="true"></i> contact@acgillette.net
                    </p>
                </section>
                <section className="column small-6 skills">
                    <h2 className="section-header"> Skillz</h2>
                    <ul>
                    <li>
                    <i className="fa fa-bolt fa-fw" aria-hidden="true"></i><strong>Languages</strong>: Ruby, HTML, CSS, SaSS, Javascript<i className="fa fa-bolt fa-fw" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-bolt fa-fw" aria-hidden="true"></i><strong>Frameworks/Libraries</strong>:  Ruby on Rails, Foundation, JQuery, Backbone<i className="fa fa-bolt fa-fw" aria-hidden="true"></i>
                    </li>
                    <li>
                        <i className="fa fa-bolt fa-fw" aria-hidden="true"></i><strong>Tools</strong>: Git, Github, Rspec, Trello, Heroku, MySQL<i className="fa fa-bolt fa-fw" aria-hidden="true"></i>
                    </li>
                    </ul>
                </section>

                <section className="row writing">
                    <h2 className="section-header">Other Rad Things I Do</h2>
                    <h3 className="section-header">Writing</h3>
                    <ul>
                        <li>
                        <a href="https://recompilermag.com/2017/05/31/alterconf-building-a-better-tech-one-conference-at-a-time/">Building a Better Tech - One Conference at a Time</a> - RecompilerMag
                        </li>
                     </ul>
                </section>

            </div>
        )

    }
}