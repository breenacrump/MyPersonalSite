import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

	public events = [
		{
			label: 'June 2017 - Now',
			content: 'Promoted to a Software Engineer',
			display: true
		},
		{
			label: 'Jan 2017',
			content: 'Started GE Power as a Software Engineer Specialist',
			display: false
		},
		{
			label: 'Dec 2016',
			content: 'Graduated UNO with Summa Cum Laude',
			display: false
		},
		{
			label: 'Jan 2015',
			content: 'Interned at GE Digital',
			display: false
		},
		{
			label: 'Jan 2014',
			content: 'Interned at GE Capital',
			display: false
		},
		{
			label: 'Aug 2012',
			content: 'Started UNO',
			display: false
		}
	];

	public eventDisplayedIndex: number = 0;

  	constructor() { }
	  
	eventClicked(index: number) {
		this.events[this.eventDisplayedIndex].display = false;
		this.events[index].display = true;
		this.eventDisplayedIndex = index;
	}
}
