import {Component} from 'angular2/core';
import {UpdatesComponent} from './updates.component'
import {AboutComponent} from './about.component'
import {ProjectComponent} from './projects.component'
import {ContactComponent} from './contact.component'

@Component({
    selector: 'my-app',
    template: `<body>
    <div class="navbar navbar-inverse navbar-fixed-top sticky container-fluid
    clearfix" id="main_navigation" role="navigation">
      <a class="name" href="#">Tom Ginader</a>
      <ul class="row nav nav-pills" id="nav_bar">
        <li>
          <a class="nav_link" href="#about_me">About Me</a>
        </li>
        <li>
          <a class="nav_link" href="#status_updates">Status Updates</a>
        </li>
        <li>
          <a class="nav_link" href="#my_projects">My Projects</a>
        </li>
        <li>
          <a class="nav_link" href="#contact_me">Contact Me</a>
        </li>
      </ul>
    </div>
    <div class="row homepage_content" id="banner">
      <img class="img-responsive" src="https://thejesterscorner.files.wordpress.com/2013/02/juri.jpeg" alt="Banner" />
    </div>
    <about></about>
    <updates></updates>
    <projects></projects>
    <contact></contact>
    <footer class="row container-fluid" id="main_footer">
      <p class="copyright">©2016 Tom Ginader</p>
      <nav>
        <a href="http://github.com/nadirjin" target="_blank">
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/tginader" target="_blank">
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </nav>
    </footer>
  </body>`,
  directives: [UpdatesComponent, AboutComponent, ProjectComponent, ContactComponent]
})


export class AppComponent { }