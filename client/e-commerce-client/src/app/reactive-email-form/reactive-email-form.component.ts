import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-email-form',
  templateUrl: './reactive-email-form.component.html',
  styleUrls: ['./reactive-email-form.component.scss']
})
export class ReactiveEmailFormComponent implements OnInit {

  myForm: FormGroup;
  myForm2: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupForm1();
    this.setupForm2();
    
  }

  setupForm1(){
    this.myForm = this.fb.group({
      email: '',
      message: '',
      career: ''
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  setupForm2(){
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.myForm2 = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone
    })
  }

}
