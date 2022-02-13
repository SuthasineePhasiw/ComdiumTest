// 3.1
function starOne(n) {
    var star = "";
    for (var i = 1; i <= n; i++) {
        console.log(star += '*');
    }
}
starOne(3);
// 3.2
function starTwo(n) {
    var star = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 0; j < n - i; j++) {
            star += " ";
        }
        for (var k = 0; k < i; k++) {
            star += "*";
        }
        star += "\n";
    }
    console.log(star);
}
starTwo(9);
// 3.3
function starThree(n) {
    var star = "";
    for (var i = 0; i < n; i++) {
        for (var j = 1; j <= n - i; j++) {
            star += " ";
        }
        for (var k = 0; k < 2 * i - 1; k++) {
            if (i === 1) {
                star += "*";
            }
            else {
                if (k === 0 || k === 2 * i - 2) {
                    star += "*";
                }
                else {
                    star += " ";
                }
            }
        }
        star += "\n";
    }
    console.log(star);
}
starThree(9);
//3.4
function starFour(n) {
    var star = "";
    for (var i = 0; i <= (n + 1); i++) {
        for (var j = 0; j <= (n + 1); j++) {
            if (i === j || i + j === n + 1) {
                star += '*';
            }
            else {
                star += ' ';
            }
        }
        star += '\n';
    }
    console.log(star);
}
starFour(10);
// 3.5
function starFive(n) {
    var star = "";
    for (var i = 1; i <= n; i++) {
        for (var j = n; j > i; j--) {
            star += " ";
        }
        for (var k = 0; k < i * 2 - 1; k++) {
            star += "*";
        }
        star += "\n";
    }
    for (var i = 1; i <= n - 1; i++) {
        for (var j = 0; j < i; j++) {
            star += " ";
        }
        for (var k = (n - i) * 2 - 1; k > 0; k--) {
            star += "*";
        }
        star += "\n";
    }
    console.log(star);
}
starFive(10);
//3.6
function starSix(n) {
    var star = "";
    var k = n;
    var p = 1;
    if (n == 1) {
        star += '+';
    }
    else {
        for (var i = 0; i < n; i++) {
            for (var a = 1; a < k; a++) {
                star += 'A';
            }
            if (i == 0) {
                star += '+';
            }
            else {
                star += '+';
                for (var e = 0; e < p; e++) {
                    star += 'E';
                }
                p += 2;
                star += '+';
            }
            for (var b = 1; b < k; b++) {
                star += 'B';
            }
            star += '\n';
            k -= 1;
        }
        for (var j = 1; j < n; j++) {
            for (var c = -2; c < k - 1; c++) {
                star += 'C';
            }
            if (j == n - 1) {
                star += '+';
            }
            else {
                p -= 2;
                star += '+';
                for (var e = 1; e < p - 1; e++) {
                    star += 'E';
                }
                star += '+';
                k += 1;
            }
            for (var d = 0; d < j; d++) {
                star += 'D';
            }
            star += '\n';
        }
    }
    console.log(star);
}
starSix(2);
