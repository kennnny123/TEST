function ar(a){
    b=0;
    a.forEach(element => b+=element);
    return b;
}
function s(a){
let result = a.filter(item => item > 0)
				  .sort((a, b) => a - b);
return result;
}
function sn(a){
let result = a.filter(item => item < 0)
				  .sort((a, b) => a - b);
return result;
}
module.exports = { ar: ar, s: s, sn: sn }
