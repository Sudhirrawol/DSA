/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(str) {


let data = []
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (str[i] >= '0' && str[i] <= '9') {
            data.push(Number(str[i]))
        }
    }
    let first = -Infinity
    let second = -Infinity
    for (let i = 0; i < data.length; i++) {
        if (data[i] > first) {
            second = first;
            first = data[i]
        } else if (
            data[i] > second && first !== data[i]
        ) {
            second = data[i]
        }
    }
    if (second === -Infinity) {
        return -1
    } else {
        return second
    }


};