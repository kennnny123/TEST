function palindrome(str){
    let chars = new Set(str),
        wasOdd = false;

    for(let char of chars)
        if(str.match(new RegExp(char, 'gi')).length % 2)
            if(wasOdd)
                return false;
            else
                wasOdd = true;
    return true;
}
function checkAnagram(anagramArray) {
        let total = 0;
        if (anagramArray == 0 || anagramArray.length == 1)
            total = false;
        else{
            for (let i = 0; i < anagramArray.length; i++) {
                let firstWord = anagramArray[0].split("").sort().join("");
                if (anagramArray[i].split("").sort().join("") == firstWord) {
                total = true;
                } else
                total = false;
            }
        }
        return total;
    }
module.exports = { palindrome: palindrome, checkAnagram: checkAnagram }
