/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let least_value = a < b ? a : b
    count = 0;
    for (let i =1 ;i<least_value+1 ;i++ ){
        if(a%i===0 && b %i ===0){
            count+=1
        }
    }
        return count
};