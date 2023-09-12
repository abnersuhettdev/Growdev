"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_validator_class_adapter_1 = require("./validation/email-validator-class-adapter");
const email_validator_fn_adapter_1 = require("./validation/email-validator-fn-adapter");
function validaEmailClass(emailValidator, email) {
    if (emailValidator.isEmail(email)) {
        console.log('Email é válido (CLASS)');
    }
    else {
        console.log('Email é inválido (CLASS)');
    }
}
function validaEmailFn(emailValidator, email) {
    if (emailValidator(email)) {
        console.log('Email é válido (FN)');
    }
    else {
        console.log('Email é inválido (FN)');
    }
}
const email = 'luizomf@gmail.com';
validaEmailClass(new email_validator_class_adapter_1.EmailValidatorClassAdapter(), email);
validaEmailFn(email_validator_fn_adapter_1.emailValidatorFnAdapter, email);
