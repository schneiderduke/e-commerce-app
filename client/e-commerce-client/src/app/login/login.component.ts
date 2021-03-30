import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    });
  }

  submit(): boolean {
    this.formGroup.valueChanges.subscribe(console.log)
    if((this.formGroup.controls['userId'].value === 'admin') && 
    (this.formGroup.controls['password'].value === 'password')) 
    {
      console.log(true);
      return true;
    } else {
      return false;
    }
  }
}
