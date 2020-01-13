function input() {
    return prompt('what is your name?');
}

function answer(str) {
    let result = '';
    switch (str) {
        case 'Bang':
            result = `Hello, ${str}, nice to meet you`;
            break;

        case 'sung':
            result = `Hello, ${str}, why so serious?`;
            break;

        default:
            result = `Hi?`;
            break;
    }

    return result;
}

function output(result) {
    document.getElementById('answer').innerText = result;
}

output(answer(input()));
