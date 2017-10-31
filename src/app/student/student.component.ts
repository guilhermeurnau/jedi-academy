import { Component, OnInit, Input } from '@angular/core';
import { Stundent } from './student.model'
@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input() student: Stundent

  constructor() { }

  ngOnInit() {
  }

  clicked()
  {
    console.log(`Student ${this.student.name}`)
  }

}
