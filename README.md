# TDD - Hands On - Fundamentos

## Objetivo

O objetivo deste hands-on é aprender e praticar os fundamentos do TDD
(Test-Driven Development). Para isso, vamos criar um aplicativo para validação
de CPF simples de acordo com a seguinte História de Usuário:

## História de Usuário
Como um usuário, eu quero validar um CPF para saber se ele é válido ou não.

## Regras de Validação de CPF

1. O CPF deve ter 11 dígitos.
2. O CPF não pode conter todos os dígitos iguais.
3. O CPF deve ter um dígito verificador válido.

## Cenários de Testes

### 1. Teste de CPF inválido (11 dígitos diferentes)
- **Dado** que o usuário insere o CPF "123.456.789-10"
- **Quando** a validação é executada
- **Então** o sistema deve informar que o CPF é inválido

### 2. Teste de CPF inválido (todos os dígitos iguais)
- **Dado** que o usuário insere o CPF "111.111.111-11"
- **Quando** a validação é executada
- **Então** o sistema deve informar que o CPF é inválido

### 3. Teste de CPF inválido (dígito verificador inválido)
- **Dado** que o usuário insere o CPF "123.456.789-09"
- **Quando** a validação é executada
- **Então** o sistema deve informar que o CPF é inválido

### 4. Teste de CPF válido
- **Dado** que o usuário insere o CPF "942.222.840-02"
- **Quando** a validação é executada
- **Então** o sistema deve informar que o CPF é válido
