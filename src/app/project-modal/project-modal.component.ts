import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: '', description: '', details: any, picUrl: '', linkInfo: any}) {}

}
