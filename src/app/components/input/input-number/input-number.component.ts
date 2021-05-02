import { Component, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';
import { SimpleField } from '../simple-field';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.sass']
})
export class InputNumberComponent extends SimpleField implements ControlValueAccessor {

  public onChange = (value: String) => { };
  public onTouched = () => { };

  constructor(
    @Self() @Optional() private ngControl: NgControl
  ) {
    super();

    this.ngControl.valueAccessor = this;
   }

  writeValue(value: String): void {
    this.value = value;
    this.onChange(value);
  }

  registerOnChange(fn: (value: String) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  get formControl(): AbstractControl {
    return this.ngControl.control;
  }

}
