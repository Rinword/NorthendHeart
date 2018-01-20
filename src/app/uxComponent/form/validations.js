import { addValidationRule } from 'formsy-react';

export default () => {
    addValidationRule('minDigitsLength', (values, value, param) => {
        const resStr = value.replace(/\D+/g, '');
        return resStr.length >= param;
    });
};
