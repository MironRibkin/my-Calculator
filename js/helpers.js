const checkComma = () => {
    return VALUE_NUMBER.value.includes(",");
}

const checkSign = () => {
    return VALUE_NUMBER.value[0] === "-";
}

const clearSign = () => {
    const isSigh = VALUE_NUMBER.value[0] === '-'
    if (isSigh) {
        VALUE_NUMBER.value = VALUE_NUMBER.value.substr(1);
    }
    return isSigh ? '-' : '';
}

const setActivesNumbers = () => {
    if (ACTIVE_OPERATION) {
        SECOND_ACTIVE_NUMBER = VALUE_NUMBER.value;
    } else {
        FIRST_ACTIVE_NUMBER = VALUE_NUMBER.value;
    }
}

const styleInput = (item) => {
    if (item.value.length > item.maxLength) item.value = item.value.slice(0, item.maxLength);

    if (item.value.length > 6) {
        item.style.fontSize = 77 * (18 - item.value.length) / 8 + "px";
    } else {
        item.style.fontSize = "120px";
    }
    if (item.value.charAt(1) === "0" && item.value.charAt(0) === "0") {
        item.value = "";
    }
    if (item.value === "0") {
        document.querySelector(".clean").textContent = 'AC';
    } else {
        document.querySelector(".clean").textContent = 'C';
    }
}

const clearAllGlobals = () => {
    FIRST_ACTIVE_NUMBER = '';
    SECOND_ACTIVE_NUMBER = '';
    ACTIVE_OPERATION = '';
}

const changeActiveNumbers = (item) => {
    const sigh = clearSign();
    if ((VALUE_NUMBER.value[0] === '0' && VALUE_NUMBER.value.length === 1)) {
        VALUE_NUMBER.value = sigh + item.textContent;
    } else {
        VALUE_NUMBER.value = sigh + VALUE_NUMBER.value + item.textContent;
    }
    if (ACTIVE_OPERATION && !SECOND_ACTIVE_NUMBER.length) {
        VALUE_NUMBER.value = item.textContent;
    }
}