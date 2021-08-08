async function additionPrac() {
    let correctQues = 0;
    let incorrectQues = 0;
    let totalQues = 10;
    let totalScore = 0;
    let totalTime = 0;
    let timePerQues = [];
    let numLen = 1;
    let numShow = 3;
    let isInteger = true;
    let numDeci = 2;

    let ansField = document.querySelector('.ansInput');

    for (let i = 0; i < totalQues; i++) {
        ansField.style.display = 'none';

        let quesDiv = document.querySelector('.showQues');
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
            quesDiv.append(quesTag);

            await sleep(randInt(1000, 2000));   
        }
        quesDiv.style.display = 'none';
        ansField.style.display = 'block';

        let startTime = Date.now();

        let isCorrect = await checkUntilCorrect(sum);

        let endTime = Date.now();
        let time = endTime - startTime;

        timePerQues.push(time);

        totalTime += time;

        if (isCorrect) {
            correctQues++;
            totalScore += 1;
        }
        else {
            incorrectQues++;
        }
    }
}

let start = document.querySelector('.start');
start.addEventListener('click', () => {
    additionPrac();
});