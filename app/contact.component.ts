import {Component} from 'angular2/core'

@Component({
	selector: 'contact'
	template: `<div class="row wrapper homepage_content" id="contact_me">
      <h2 class="title">{{ title }}</h2>
      <hr />
      <div class="contact_form"></div>
    </div>`
})

export class ContactComponent {
	title = "Contact Me";
}