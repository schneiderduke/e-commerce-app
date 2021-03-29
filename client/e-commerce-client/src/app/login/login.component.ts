import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      userId: '',
      password: '' 
    })
  }

  // submit(): boolean {
  //   if((this.formGroup.get('userId') === 'admin') && (this.password === 'password')) {
  //     console.log(true);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
