const input = document.querySelector('input'),
    p = document.querySelector('p');

const isEmpty = e => {
    return e.target.value === null || e.target.value === undefined || e.target.value === '';
};

const onKeyUp = e => {
    if (e.keyCode === 13) return isEmpty(e) ? alert('무엇이라도 입력하세요') : null;
    isEmpty(e) ? (p.innerText = '') : (p.innerText = `${e.target.value} has ${e.target.value.length} characters`);
};

input.addEventListener('keyup', onKeyUp);
