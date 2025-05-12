function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) return 100;
    if (exam > 75 || projects > 4) return 90;
    if (exam > 50 || projects > 1) return 75;
    return 0;
}
//finalGrade(85, 5)

const generate = length => {
    let res = []
    while (length > 0) {
        let i = Math.random().Math.round()
        res.push(i)
    }
    return res
};
//generate(8)

function climb(n) {
    let res = [n]
    for (let i = n; i > 1; i--) {
        if (n % 2 !== 0) {
            n = (n - 1) / 2
            res.push(n)
        }
        if (n % 2 == 0) {
            n = n / 2
            res.push(n)
        }
    }
    console.log(res.reverse());
}
//climb(10)

function countArara(n) {
    let str1 = 'adak'
    let str2 = 'anane'
    n % 2 == 0 ? str1.repeat(n / 2) : str1.repeat(Math.floor(n / 2)) + ' ' + str2
}
//countArara(5)

export function lettersToNumbers(s) {
    let alphabet1 = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphabet2 = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    let res = []
    for (let char of s) {
        let index = alphabet1.indexOf(char)
        if (index > -1) res.push(index + 1)
        index = alphabet2.indexOf(char)
        if (index > -1) res.push((index + 1) * 2)
        index = number.indexOf(char)
        if (index > -1) res.push(index)

    }
    console.log(res.reduce((a, b) => a + b, 0));

}
//lettersToNumbers("I Love You")

function calcType(a, b, res) {
    if (a + b == res) return 'addition';
    if (a - b == res) return 'subtraction';
    if (a * b == res) return 'multiplication';
    if (a / b == res) return 'division';
}
//calcType(1, 2, 3)

export function solution(n) {
    let num = Math.trunc(n)
    let num2 = (num + 0.5).toFixed(1)
    let l = n
    let count1 = 0
    while (count1 < 5) {
        n = Number(n.toFixed(1)) + 0.1

        if (n == num + 1) {
            console.log(n, count1);
            break
        }
        if (n == +num2) {
            console.log(n, count1);
            break
        }
        count1++
    }


    let numM2 = (num + 0.5).toFixed(1)
    let count2 = 0
    while (count2 < 5) {
        l = Number(n.toFixed(1)) - 0.1
        console.log(l);


        if (l == num) {
            console.log(l, count2);
            break
        }
        if (l == +num2) {
            console.log(l, count2);
            break
        }
        count2++
    }

}
//solution(4.2)

function solve(arr) {
    let res = []
    let minArr = arr.sort((a, b) => a - b)
    let maxArr = [...arr].reverse()
    for (let i = 0; i < maxArr.length; i++) {
        //res.push(maxArr[i])
        for (let j = 0; j < minArr.length; j++) {
        }
        res.push(maxArr[i], minArr[i])
    }
    console.log(res.slice(0, arr.length));
};
//solve([15, 11, 10, 7, 12])

function dotProduct(v1, v2) {
    for (let key in v1) {
        console.log(key, v1[key]);

    }


}
//dotProduct({ x: 2, y: 0, z: -1 }, { x: 0, y: -2, z: 1 })

function gcContent(dna) {
    let cur = 0
    for (let char of dna) {
        if (char == 'C' || char == 'G') {
            cur++
        }
    }
    console.log(dna.length);
    let res = (cur / dna.length) * 100

}
//gcContent("**********************")

function head(arr) {
    console.log(arr[0]);
}
//head([1, 2, 3, 4, 5])

function tail(arr) {
    console.log(arr.slice(1));
}
//tail([1, 2, 3, 4, 5])

function init(arr) {
    console.log(arr.slice(0, arr.length - 1));
}
//init([1, 2, 3, 4, 5])
function last(arr) {
    console.log(arr[arr.length - 1]);

}
//last([1, 2, 3, 4, 5])

function getRequired(player, enemy) {
    const player1 = player.reduce((a, b) => a + b, 0)
    const player2 = enemy.reduce((a, b) => a + b, 0)
    if (player1 > player2 + 6) {
        return "Auto-win";
    }
    if (player1 == player2) {
        return "Random";
    }
    if (player1 > player2) {
        const player2Max = player2 + 6
        const player1Max = player2Max + 1 - player1
        return `(${player1Max}..6)`;
    }
    if (player1 + 6 == player2 + 1) {
        return "Pray for a tie!";
    }
    if (player1 + 6 > player1 + 6 - 1 - player2) {

        return `(1..${player1 + 6 - 1 - player2})`;
    }
    if (player1 < player2 + 6) {
        return "Auto-lose";
    }

}
//getRequired([9, 1], [2, 0])

function fill_gaps(timesheet) {

    console.log(timesheet.findIndex(null));

}
//fill_gaps([1, null, null, null, 1])

function ìsZeroBalanced(n) {
    if (n.length == 0) return false;
    let arr = n.map((i) => { if (i !== 0) return i })
    console.log(arr);
    let res = n.sort((a, b) => a - b)
    console.log(res);
    for (let i = 0; i < res.length / 2; i++) {
        let el = res[i]
        console.log(el, (res.length / 2));

    }

}
//ìsZeroBalanced([3, -3, 5, -5, 7, 1, -7, 0])

function change(string) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let res = []
    for (let alph of alphabet) {
        string.toLowerCase().includes(alph) ? res.push(1) : res.push(0)
    }
    console.log(res.join(''))
}
//change("a **&  bZ")