import { AbstractControl } from "@angular/forms";


export function NotBlankValidator(control: AbstractControl) {
  const value = control.value.trim();
  debugger;
  if(value === '' && control.value != '') {
    return  { 'notBlank': true }
  }
  return null;
}

