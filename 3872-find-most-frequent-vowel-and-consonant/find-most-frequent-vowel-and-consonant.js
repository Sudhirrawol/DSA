/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(str) {
    let obj = {}
        let maxConstant = 0;
    let maxVowel = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj) {
            obj[str[i]] += 1
        } else {
            obj[str[i]] = 1
        }
    }
    for (let key in obj) {
        // console.log(obj[key])
        if ("aeiou".includes(key) ) {
            if(obj[key] > maxVowel){
            maxVowel = obj[key]
            }
        } else {
            if (obj[key] > maxConstant) {
                maxConstant = obj[key]
            }
        }
    }
    return maxConstant+maxVowel
};