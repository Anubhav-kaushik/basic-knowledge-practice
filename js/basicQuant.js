function sum(...data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}

function average(...data) {
    return sum(...data) / data.length;
}

function max(...data) {
    let max = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}

function min(...data) {
    let min = data[0];
    for (let i = 1; i < data.length; i++) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}

function multiply(...data) {
    let mul = 1;
    for (let i = 0; i < data.length; i++) {
        mul *= data[i];
    }
    return mul;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isCorrect(num1, num2) {
    return num1 == num2;
}

async function checkUntilCorrect(rightAns) {
    let submitBtn = document.querySelector('.ans');

    while (true) {
        var breakPoint;
        submitBtn.addEventListener('input', (event) => {
            let ans = parseFloat(document.querySelector('.ans').value);
            
            breakPoint = isCorrect(rightAns, ans);
        });
        
        if (breakPoint) {
            break;
        }

        await sleep(randInt(200, 500));
    }
}


