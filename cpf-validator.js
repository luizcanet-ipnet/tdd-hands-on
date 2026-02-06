export default class CpfValidator {
    isValid(cpf) {
        this.#isString(cpf);

        return true;
    }

    #isString(cpf) {
        if (typeof cpf !== "string") {
            throw new TypeError("O CPF deve ser um texto");
        }
    }
}