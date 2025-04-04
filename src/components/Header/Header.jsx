import { formatDate } from "../../helpers/formatDate"
import style from "./style.module.css"

/*------------Codewars---------------*/
function findAB(numbers, c) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] * numbers[j] == c) {
                return [numbers[i], numbers[j]];

            }
        }
    }
    return null;
}
//findAB([1, 2, 3, 4, 5, 6], 15)


function remove(str, what) {
    let res = []

    for (let char of str) {
        for (let key in what) {
            if (char !== key) {
                what[key] = +what[key] - 1
                //console.log(key, what[key]);
                res.push(char)
            }
        }
    }
    console.log(res);

}
//('this is a string', { 't': 1, 'i': 2 })


/*------------Codewars---------------*/

export const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>NEWS</h1>
            <p className={style.date}>{formatDate(new Date)}</p>
        </header>
    )
}