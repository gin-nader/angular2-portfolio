/*
export class UpdatesService {
  getUpdates() : string[] {
  	return [
  	"The single page application concept seems to be more appropriate for my portfolio.", 
  	"Trying out Angular 2 with bootstrap now.",
  	"Trying to decide between Django vs. Rails for web development. I like python,but I really like the Rails framework.",
  	"Almost have my portfolio fully up and running",
  	"test update"
  	]
  }
  getDates() : string[] {
  	return [
  	"August 8th, 2016",
  	"August 8th, 2016",
  	"July 29th, 2016",
  	"July 27th, 2016",
  	"July 25ht, 2016"
  	]
  }
}

*/

export class UpdatesService {
  getUpdates() : Object[] {
  	return [
  	{ 
      text: "The single page application concept seems to be more appropriate for my portfolio",
      date: new Date('2016', '07', '08')
  	}, 
  	{ 
    	text: "Trying out AngularJS with bootstrap now.",
    	date: new Date('2016', '07', '08')
  	}, 
  	{ 
    	text: "Trying to decide between Django vs. Rails for web development. I like python,but I really like the Rails framework.",
    	date: new Date('2016', '06', '29')
  	}, 
  	{ 
    	 text: "Almost have my portfolio fully up and running",
    	date: new Date('2016', '06', '27')
  	},
  	{ 
    	 text: "test update",
    	date: new Date('2016', '06', '25')
  	}
    ];
  }
}