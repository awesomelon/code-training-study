(function() {
    const p = document.querySelector('p');
    const map = new Map();
    map.set('quote', '나의 죽음을 적에게 알리지마라');
    map.set('who', '이순신장군');

    p.innerText = map.get('who') + ' "' + map.get('quote') + '"';
})();
