import { FormElement } from './form-element';
export class Form {
    elements: FormElement[] = []; 
    isValid() {
        let isValid = true;

        for (var prop in this.elements) {
            isValid = this.elements[prop].isValid() && isValid;
        }

        return isValid;
    }
}