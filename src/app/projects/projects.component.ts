import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public projects = [
    {
      name: 'FieldTime',
      description: 'FieldTime is a horizontal web application for GE that standardizes the way field engineers and craft supervisors enter in their timecards for themselves or crew members.',
      picUrl: 'assets/img/FieldTime.jpg',
      details: []
    },
    {
      name: 'Crew Glass',
      description: 'Crew Glass is a mobile application that enable time entry for field engineers that can be accessed by craft supervisors to sync data to the FieldTime application.',
      picUrl: 'assets/img/CrewGlass.jpg',
      details: []
    },
    {
      name: 'FieldVision',
      description: 'FieldVision is a web/mobile application that tracks the lifecycle and repair process of gas turbines.',
      picUrl: 'assets/img/FieldVision.jpg',
      details: []
    },
    {
      name: 'Honest Abe',
      description: 'Honest Abe is a 3D action game built on Unity game engine made for the University of New Orleans\'s Advance Game Development class.',
      picUrl: 'assets/img/HonestAbe.jpg',
      details: []
    }
  ];

  constructor() { }

}
