import { Component, OnInit } from '@angular/core';
import { MobileWidthCheckService } from '../services/mobile-width-check.service';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

	public events = [
		{
			label: 'Jan 2018 - Now',
			title: 'Promoted to Front-End Software Engineer',
      content: 'Front-End developer for GE Power and Assignment Leader/Mentor for two front-end interns. Provide technical guidance and professional mentorship while supervising their development work.',
			display: true
		},
		{
			label: 'Jan 2017 - Dec 2017',
			title: 'Started GE Power as a Software Engineer Specialist',
      content: 'Full stack engineer with GE Digital and GE Power.',
			display: false
		},
		{
			label: 'Dec 2016',
			title: 'Graduated UNO with Summa Cum Laude',
      content: 'Received the President\'s List honors every semester and graduated with Summa Cum Laude honors.',
			display: false
		},
		{
			label: 'Jan 2015 - Dec 2016',
			title: 'Software Engineer Apprentice at GE Capital and GE Power',
      content: 'Leveraged technical education through real-world experiences such as software development, code hardening, quality testing, and mobile development.',
			display: false
		}
	];
	public eventDisplayedIndex: number = 0;

  constructor(private mobileWidthCheck: MobileWidthCheckService) { }

  ngOnInit() {
  }

	eventClicked(index: number) {
		this.events[this.eventDisplayedIndex].display = false;
		this.events[index].display = true;
		this.eventDisplayedIndex = index;
	}

	isMobileWidth() {
    return this.mobileWidthCheck.isMobileWidth();
  }
}
