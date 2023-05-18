function someAction(x, someCallback) {
    return someCallback(x);
}

function calc(x) {
    return x.sort(function(a, b){return a - b});
}
module.exports = {calc:calc, someAction:someAction};
