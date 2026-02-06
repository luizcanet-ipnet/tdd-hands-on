import { test } from "./test/lib/test.js";
import CpfValidator from "./cpf-validator.js";

test("Deve lançar um erro de validação de tipo quando o valor passado não for um texto", () => {
    const cpfValidator = new CpfValidator();

    try {
        cpfValidator.isValid(12345678900);
    } catch (error) {
        if (
            error instanceof TypeError &&
            error.message === "O CPF deve ser um texto"
        ) {
            return true;
        }
    }

    return false;
});