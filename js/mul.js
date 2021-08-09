async function multiplyPrac() {
    let totalQues = 10;
    let timePerQues = [];
    let numLen = 2;

    let mulContainer = document.querySelector('.container-mul');
    let quesDiv = document.querySelector('.showQues-mul');
    let result = document.querySelector('.result-mul');

    mulContainer.style.display = 'block';
    result.style.display = 'none';

    let timeStopper = stopWatch('timer-mul');

    for (let i = 0; i < totalQues; i++) {
        let num1 = randInt(1, 10**numLen - 1);
        let num2 = randInt(1, 10**numLen - 1);

        let ans = num1 * num2;

        let num1Div = quesDiv.querySelector('.num1');
        let num2Div = quesDiv.querySelector('.num2');

        num1Div.innerHTML = num1;
        num2Div.innerHTML = num2;

        let startTime = Date.now();

        let isCorrect = await checkUntilCorrect(ans, 'container-mul');

        let endTime = Date.now();
        let time = (endTime - startTime) / 1000;

        timePerQues.push(parseFloat(time.toFixed(2)));

    }
    timeStopper.stop();

    
    mulContainer.style.display = 'none';
    result.style.display = 'block';

    let avgTime = sumList(timePerQues) / totalQues;

    result.innerHTML = `Average time: ${avgTime.toFixed(2)} seconds`;

}


let startMul = document.querySelector('.start-mul');
startMul.addEventListener('click', () => {
    multiplyPrac();
});