import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/; // Regular expression for password validation
    const valid = passwordRegex.test(control.value);
    return valid ? null : { invalidPassword: { valid: false, value: control.value } };
  };
}
