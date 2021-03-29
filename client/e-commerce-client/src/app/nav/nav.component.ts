import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() myName: string;
  constructor() { }

  ngOnInit(): void {
    console.log(this.myName);
  }

}
