import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Project } from 'src/app/models/Project';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeModal(){
    this.messageEvent.emit(false);
  }

  @Output() messageEvent = new EventEmitter<boolean>()

  @Input() project: Project

  ngOnInit() {
  }

}
