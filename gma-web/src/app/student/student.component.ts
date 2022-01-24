import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'gma-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.sass']
})
export class StudentComponent implements OnInit {

  @Input() student!: Student

  constructor() {
  }

  ngOnInit(): void {
  }

  clicked(){
    console.info(`Estudante: ${this.student.nome}`)
  }

}
