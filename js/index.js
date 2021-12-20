'use strict';

const doc = document,
    body = document.body,
    sum = 30;

function createElement() {
    for (let i = 0; i < sum; i++) {
        let div = doc.createElement('div');

        div.classList.add('box');
        body.insertAdjacentElement('afterbegin', div);
    };
};

function handleActiveClass() {
    const divsArr = doc.querySelectorAll('div');
    const reversedActiveDivsArr = [...divsArr].reverse();

    for (let i = 0; i < divsArr.length; i++) {
        setTimeout(() => {
            divsArr[i].classList.add('active');
                setTimeout(() => {
                    reversedActiveDivsArr[i].classList.remove('active');
                    if(i === divsArr.length - 1) {
                     handleActiveClass();
                    };
                }, i + sum * 300);
        }, i * 300);
    };
};

createElement();
handleActiveClass();
