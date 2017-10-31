import { Component } from '@angular/core';
import { Stundent } from './student/student.model'
@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  students : Stundent[] = [
    {name: 'Luke', isJedi: true, temple: 'Coruscant' },
    {name: 'Han Solo', isJedi: false },
    {name: 'Leia', isJedi: false }
  ]
}
