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