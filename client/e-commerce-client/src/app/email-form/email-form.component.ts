import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  log(x) {console.log(x);}

  constructor() { }

  ngOnInit(): void {
  }

}
