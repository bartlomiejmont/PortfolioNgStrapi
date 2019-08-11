import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service'
import { MatDialog } from '@angular/material'
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  
  projects:Project[];
  modalOpen:boolean;
  p:Project;

  constructor(private projectService:ProjectService, public dialog:MatDialog) { }

  ngOnInit() {
    this.projectService.getProjects().subscribe( projects => {
      this.projects = projects;
    });
    this.p=null;
    this.modalOpen = false;
  }

  reciveMessage($event){
    this.modalOpen=$event;
  }

  sendProject(project:Project){
    this.p = project;
    this.modalOpen = true;
    let dialogRef = this.dialog.open(ModalComponent, {data: {project: project}});
  }

}
