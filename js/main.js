const clean = () => {
    VALUE_NUMBER.value = "0";
    clearAllGlobals();
    styleInput(VALUE_NUMBER)
}

const addNumber = (item) => {
    changeActiveNumbers(item)
    styleInput(VALUE_NUMBER)
    setActivesNumbers()
}

const addComma = () => {
    if (!checkComma() && VALUE_NUMBER.value.length >= 1) {
        VALUE_NUMBER.value += ".";
    }
}

const changeSign = () => {
    if (checkSign()) {
        VALUE_NUMBER.value = VALUE_NUMBER.value.substr(1);
    } else {
        VALUE_NUMBER.value = '-' + VALUE_NUMBER.value;
    }
}

const divide = () => {
    ACTIVE_OPERATION = "/";
}

const multiplication = () => {
    ACTIVE_OPERATION = "*";
}

const minus = () => {
    ACTIVE_OPERATION = "-";
}

const plus = () => {
    ACTIVE_OPERATION = "+";
}

const procent = () => {
        SECOND_ACTIVE_NUMBER = 100;
        divide()
        equals()
}

const equals = () => {
    VALUE_NUMBER.value = eval(FIRST_ACTIVE_NUMBER + ACTIVE_OPERATION + SECOND_ACTIVE_NUMBER);
    styleInput(VALUE_NUMBER);
    SECOND_ACTIVE_NUMBER = '';
    ACTIVE_OPERATION = '';
    FIRST_ACTIVE_NUMBER = VALUE_NUMBER.value;
}
