import {Component} from 'angular2/core'

@Component({
	selector: 'projects'
	template: `<div class="row wrapper homepage_content" id="my_projects">
      <h2 class="title">{{ title }}</h2>
      <hr />
      <div class="project">
        <h3>SUNY Poly Capstone</h3>
        <p class="project_date">August 8th, 2016</p>
        <p>Security awareness website I made with a colleague for my capstone at Suny Poly. The portion that you will see is the portion of the website that I developed.</p>
        <br />
        <br />
        <a href="https://www.youtube.com/watch?v=FaseZ4La_2s" class="button" target="_blank">
    Link to demonstration video</a>
        <a href="https://github.com/nadirjin/Suny-Poly-Capstone" class="button" target="_blank">
        Link to source code</a>
      </div>
    </div>`
})

export class ProjectComponent {
	title = "My Projects";
}