import {Component} from 'angular2/core'

@Component({
	selector: 'about'
	template: ` <div class="row wrapper homepage_content" id="about_me">
      <h2 class="title">{{ title }}</h2>
      <hr />
      <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1610916_10204045619250333_3491505790847177659_n.jpg?oh=d4df5d606c518566bdf49bf99b065eee&oe=582440BA" alt="Picture of me." height="200" width="200" />
      <p>I am a graduate student. I will attend Marist Graduate school at the end of August. I will be working towards my M.S. degree in software development. I recently graduated from Suny Poly with a B.S. degree in network and computer security. I graduated
      with a 3.94, the highest GPA of my graduating peers with the same major, summa cum laude.
    </p>
      <p>
      I plan on working hard to attain my master's degree. I want to learn as much as I can, and make myself a well rounded individual when it comes to the field of computer science. I know a lot about networking, and computer security. I am also CCENT certified.
      Now I plan to learn a lot about software development. I hope to be as varied as possible so that I can overcome any obstacle that comes my way.
    </p>
      <p>
      You can view my LinkedIn profile, as well as my Github profile, by using the links in the bottom right corner of my website. You may see what I am currently up to, as well as my previous projects by using the links above. Feel free to contact me with
      any questions or information you may have. Thank you for stopping by.
    </p>
    </div>`
})

export class AboutComponent {
	title = "About Me";
}