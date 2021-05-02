import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-example-input',
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.sass']
})
export class ExampleInputComponent implements OnInit {

  public form: FormGroup;

  customer: Customer;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      age:[, [Validators.required, Validators.min(18), Validators.max(100)]]
    });
  }

  onSubmit(){
    this.customer = this.form.getRawValue() as Customer;
  }

}
