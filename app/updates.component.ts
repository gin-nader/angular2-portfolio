import {Component} from 'angular2/core'
import {UpdatesService} from './updates.service'

@Component({
	selector: 'updates'
	template: ` <div class="row wrapper homepage_content" id="status_updates">
      <h2 class="title">{{ title }}</h2>
      <hr />
      <div class="update container" *ngFor="#update of updates">
        <h5>{{ update.text }}</h5>
        <p class="date">{{ update.date | date}}</p>
      </div>
    </div>`,
    providers: [UpdatesService]
})

export class UpdatesComponent {
	title = "Status Updates";
	updates: Object[];

	constructor(updatesService: UpdatesService) {
		this.updates = updatesService.getUpdates();
	}
}