async function additionPrac() {
    let totalQues = 10;
    let timePerQues = [];
    let numLen = 1;
    let numShow = 3;
    let isInteger = true;
    let numDeci = 2;

    let ansField = document.querySelector('.ansInput-add');
    let hintDiv = document.querySelector('.hint-block-add');
    let quesDiv = document.querySelector('.showQues-add');

    let timeStopper = stopWatch('timer-add');

    for (let i = 0; i < totalQues; i++) {
        ansField.style.display = 'none';
        hintDiv.classList.add('hide');
        quesDiv.style.display = 'block';

        let sum = 0;
        let showedNums = [];
        for (let j = 0; j < numShow; j++) {
            let randNum;
            if (isInteger) {
                randNum = randInt(10**(numLen-1), (10**numLen)-1);
                sum += randNum;
            }
            else {
                randNum = randFloat(10**(numLen-1), (10**numLen)-1, numDeci);
                sum += randNum;
            }

            showedNums.push(randNum);

            let quesTag = document.createElement('h1');
            quesTag.innerHTML = `${randNum}`;

            quesDiv.innerHTML = '';
            await sleep(100);
            quesDiv.append(quesTag);

            await sleep(randInt(1000, 2000));   
        }
        quesDiv.style.display = 'none';
        ansField.style.display = 'block';

        addHint(showedNums);

        let startTime = Date.now();

        let isCorrect = await checkUntilCorrect(sum, 'container-add');

        let endTime = Date.now();
        let time = (endTime - startTime) / 1000;

        timePerQues.push(parseFloat(time.toFixed(2)));

        hintDiv.innerHTML = '';
    }
    timeStopper.stop();
    ansField.style.display = 'none';
    hintDiv.classList.add('hide');
    quesDiv.style.display = 'block';

    let avgTime = sumList(timePerQues) / totalQues;

    quesDiv.innerHTML = `<h3>Average time: ${avgTime.toFixed(2)} seconds</h3>`;

}

function addHint(numList) {
    let hintDiv = document.querySelector('.hint-block-add');
    hintDiv.innerHTML = '';
    for (let i = 0; i < numList.length; i++) {
        let hintTag = document.createElement('h2');
        hintTag.innerHTML = `${numList[i]}`;
        hintDiv.append(hintTag);
    }
}

let start = document.querySelector('.start-add');
start.addEventListener('click', () => {
    additionPrac();
});