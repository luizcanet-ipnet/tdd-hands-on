export function test(name, fn) {
    if (typeof name !== "string") {
        throw new Error("Test name must be a string");
    }

    if (typeof fn !== "function") {
        throw new Error("Test must be a function");
    }

    const test = document.createElement("li");
    test.textContent = `Test: ${name} - ${fn() ? "PASS" : "FAIL"}`;

    document.getElementById("tests").append(test);
}