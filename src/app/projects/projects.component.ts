import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { MatDialogConfig } from '@angular/material';

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
      details: [
        'Implemented reusable global front-end components that was utilized across different modules and internal applications',
        'Collaborated with UX to implement features that tackled the business requirements and provided the best usability',
        'Lead the process of implementing end-to-end tests using Protractor which lead to a 95% increase in test coverage',
        'Developed unit tests using Jasmine to adhere to best practices and increase code quality',
        'Refactored the front-end data model that allowed the application to be used in parallel with another application called Crew Glass, which enabled more efficient time entry process in remote areas'
      ],
      linkInfo: []
    },
    {
      name: 'Crew Glass',
      description: 'Crew Glass is a mobile application that enable time entry for field engineers that can be accessed by craft supervisors to sync data to the FieldTime application.',
      picUrl: 'assets/img/CrewGlass.jpg',
      details: [
        'Redesigned and refactored the entire front-end design to improve the user experience',
        'Refactored the front-end data model to enable usability with our new backend microservice',
        'Collaborated with the Technical Product Manager and UX to implement features that ensured the application was in compliance with the regional labor laws and business billing practices'
      ],
      linkInfo: []
    },
    {
      name: 'FieldVision',
      description: 'FieldVision is a web/mobile application that tracks the lifecycle and repair process of gas turbines.',
      picUrl: 'assets/img/FieldVision.jpg',
      details: [
        'Refactored legacy code to enhance performance',
        'Lead efforts in implementing a Mobile testing framework using Appium which lead to a 40% decrease in technical debt',
        'Solved production level defects which increased the code quality and customer satisfaction'
      ],
      linkInfo: []
    },
    {
      name: 'Honest Abe',
      description: 'Honest Abe is a 3D action game built on Unity game engine made for the University of New Orleans\'s Advance Game Development class.',
      picUrl: 'assets/img/HonestAbe.jpg',
      details: [
        'Developed the Health System and UI',
        'Developed the Perks System',
        'Provided quality testing and identified defects',
        'Defect logging'
      ],
      linkInfo: [
        {
          linkName: 'Download for Mac',
          source: 'https://developer.cloud.unity3d.com/share/share.html?shareId=bybTp4mvMW',
        },
        {
          linkName: 'Download for Windows',
          source: 'https://build.cloud.unity3d.com/share/share.html?shareId=ZkMWaNQDf-'
        },
        {
          linkName: 'Source Code',
          source: 'https://github.com/uno-game-dev/honest-abe'
        }
      ]
    }
  ];

  constructor(public dialog: MatDialog) { }

  openProjectModal(projectIndex: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.projects[projectIndex];
    dialogConfig.hasBackdrop = true;
    this.dialog.open(ProjectModalComponent, dialogConfig);
  }

}
