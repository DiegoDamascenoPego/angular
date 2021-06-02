import { AbstractControl } from "@angular/forms";

export function DocumentValidator(control: AbstractControl) {
const isValid = (control.value || '').match(/^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/);

return isValid ? null: {'document': true};

}
