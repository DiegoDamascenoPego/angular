import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentValidator } from 'src/app/components/input/validators/document.validador';
import { NotBlankValidator } from 'src/app/components/input/validators/not-blank.validator';
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
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10), NotBlankValidator, DocumentValidator]],
      age:[, [Validators.required, Validators.min(18), Validators.max(100)]],
      document:['', DocumentValidator]
    });
  }

  onSubmit(){
    this.customer = this.form.getRawValue() as Customer;
  }

}
