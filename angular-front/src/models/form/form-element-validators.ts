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

    static stringValidator(value: string, state: FormElementState, error: FormElementError) {
        if (state) {
            if (state.mandatory) {
                if (!value || value.trim().length == 0) {
                    error.required = true;
                }
            }
        }
    }

    static numberValidator(value: string, state: FormElementState, error: FormElementError) {
        if (state) {
            if (state.mandatory) {
                if (!value || value.trim().length == 0) {
                    error.required = true;
                    return;
                }
            }
        }

        if (value && value.trim().length > 0 && isNaN(parseInt(value.trim()))) {
            error.invalid = true;
        }
    }
}