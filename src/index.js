module.exports = function check(str, bracketsConfig) {
    var compare = [];
    var a = false;
    var sameBrackets = 0;
    debugger;
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < bracketsConfig.length; j++) {
            for (var n = 0; n <= 1; n++) {
                if (str[i] === bracketsConfig[j][n] && str[i] !== '|') {

                    if (compare.length !== 0) {
                        if (compare[compare.length - 1][0] === j && compare[compare.length - 1][1] === n - 1) {
                            compare.pop();
                        }
                        else {
                            compare.push([j, n]);
                        }
                    }
                    else {
                        compare.push([j, n]);
                    }
                }
                if (str[i] === '|') {
                    sameBrackets++;
                }
            }
        }
    }
    if (compare.length === 0 && sameBrackets % 2 === 0) {
        a = true;
    }
    return a;
}
