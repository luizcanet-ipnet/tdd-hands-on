import { test } from "./lib/test.js";

test("Um teste que passa", () => {
    const isAPassingTest = true;

    if (isAPassingTest) {
        return true;
    }

    return false;
});

test("Um teste que falha", () => {
    const isAPassingTest = false;

    if (isAPassingTest) {
        return true;
    }

    return false;
});
