import { FormControl,NG_VALIDATORS, Validator,AbstractControl, ValidatorFn  } from '@angular/forms';
import { Directive } from '@angular/core';
import { Input } from '@angular/core';

@Directive({
  selector: '[juriName]',
     providers: [
    { provide: NG_VALIDATORS, useExisting: JuriNameValidator, multi: true }
  ]
})

export class JuriNameValidator implements Validator { 
//validator: ValidatorFn;

    @Input('juriName') juriName: string;

//constructor() {
//    this.validator = validateJuriNameFactory();
//  }
//    
//validate(c: FormControl) {
//    return this.validator(c);
//  }
      validate(control: AbstractControl): {[key: string]: any} | null {
      // juriNameValidate returns validator function to whom the control is given input. this is called immediately after returned  function.  
    return this.juriName ? JuriNameValidate(new RegExp(this.juriName, 'i'))(control)  
                              : null;
  }

    
}

 export function JuriNameValidate(nameRe: RegExp): ValidatorFn {
     
  return (control: AbstractControl): {[key: string]: any} | null => {
     
    const forbidden = nameRe.test(control.value);
    let x =  forbidden ? {'juriName': {value: control.value}} : null;
     // console.log(x);
      return x;
  };
}
//
// function forbiddenNameValidator(name: RegExp):ValidatorFn{
//    return (control: AbstractControl):{[key: string] : any} | null =>  {
//   const forbidden = name.test(control.value);
//    return forbidden? {'forbiddenName' : {value:control.value}} : null;
//}
//}

//function validateJuriNameFactory() : ValidatorFn {
//  return (c: AbstractControl) => {
//    
//    let isValid = c.value === 'Juri';
//
//    if(isValid) {
//        return null;
//    } else {
//        return {
//            juriName: {
//                valid: false
//            }
//        };
//  }
//}
//}