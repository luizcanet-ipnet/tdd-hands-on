export class CpfValidationError extends Error {
    constructor(...params) {
        super(...params);
        this.name = "CpfValidationError";
    }
}

export default class CpfValidator {
    isValid(cpf) {
        this.#isString(cpf);
        this.#has11Digits(cpf);

        return true;
    }

    #isString(cpf) {
        if (typeof cpf !== "string") {
            throw new TypeError("O CPF deve ser um texto");
        }
    }

    #has11Digits(cpf) {
        if (!/^\d{11}$/.test(cpf)) {
            throw new CpfValidationError("O CPF deve conter 11 dígitos");
        }
    }
}