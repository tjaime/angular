import { Component, OnInit, Input } from '@angular/core';

import { Student } from './student.model';

@Component({
  selector: 'gma-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Input() student: Student

  constructor() {
    this.student = {} as Student
  }

  ngOnInit(): void {
  }

  clicked(){
    console.log(`Sdudent: ${this.student.name}`)
  }

}
