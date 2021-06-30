import { FormElementState } from './form-element-state';
import { FormElementError } from './form-element-error';

export class FormElementValidators {
    static defaultValidator(value: any, state: FormElementState, error: FormElementError) {
        if (state) {
            if (state.mandatory) {
                if (!value) {
                    error.required = true;
                }
            }
        }
    }  
}