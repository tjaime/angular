import { Component } from '@angular/core';
import { Student } from './student/student.model';

@Component({
  selector: 'gma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  students: Student[] = [
    { nome: "Estudante 1", ehEstudante: true, template: 'em construção' },
    { nome: "Estudante 2", ehEstudante: false, template: 'em construção' },
    { nome: "Estudante 3", ehEstudante: true, template: 'pronto' }
  ]

}
