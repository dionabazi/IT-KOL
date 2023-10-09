const btn = document.querySelector('#btn-quotes');

btn.addEventListener('click', () => {
    let text = "Clicked";
    btn.textContent = text;
})

window.onload = function() {
    const h1Element = document.getElementById("count");
    let number = 0;

    function updateNumber() {
        if (number <= 2500) {
            h1Element.textContent = number + "+";
            number++;
            setTimeout(updateNumber, .1);
        }
    }

    updateNumber();

    const secondh1Element = document.getElementById('secondCount');

    function secondNumber() {
        if (number <= 350) {
            secondh1Element.textContent = number + "+";
            number++;
            setTimeout(secondNumber, 1)
        }
    }
    secondNumber();
    number = number + 1;

    const thirdCount = document.getElementById('thirdCount');

    function thirdNumber() {
        if (number <= 20) {
            thirdCount.textContent = number + "+";
            number++;
            setTimeout(thirdNumber, 1);
        }

    }
    thirdNumber();
    number = number + 2
}



const quote = document.querySelector('#quote');

let isBlack = false;


quote.addEventListener('click', () => {
    let wrapperTwo = document.querySelector('.wrapper-2');
    isBlack = !isBlack;

    if (isBlack) {
        wrapperTwo.style.backgroundColor = 'black';
        let text = "Quote Clicked";
        quote.textContent = text;
    } else {
        wrapperTwo.style.backgroundColor = 'white';
        let untext = 'Quote Unclicked'
        quote.textContent = untext
    }


})



const bTn = document.querySelector('#bTn');

bTn.addEventListener('click', () => {
    let text = "Started";
    bTn.textContent = text;
})