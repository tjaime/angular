import { Component } from '@angular/core';

import { Student } from './student/student.model';

@Component({
  selector: 'gma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gma web';

  students: Student[] = [
    { name: 'Thiago', isStudent: true, template: 'Texto extra' },
    { name: 'Ana Clara Bebê', isStudent: true, template: 'Texto extra' },
    { name: 'Raquel Bitoca', isStudent: false }
  ]

}
