import { FormElementError } from './form-element-error';
import { FormElementState } from './form-element-state'; 
import { FormElementValidators } from './form-element-validators';

export class FormElement {
    value: any;
    state: FormElementState = new FormElementState();
    error: FormElementError = new FormElementError();
    onValidation: any = FormElementValidators.defaultValidator;

    isValid(): boolean {

        if (!this.error) {
            this.error = new FormElementError();         
        }

        this.error.required = false;
        this.error.invalid = false;
        this.error.message = undefined;

        if (this.onValidation) {
            this.onValidation(this.value, this.state, this.error);
        }

        return !this.error.required && !this.error.invalid; 
    }
 
}