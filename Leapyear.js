var year;
function leapYear(year) {
    if (year % 400 == 0) {
        console.log("true");
    }
    else if (year % 400 != 0 && year % 100 != 0 && year % 4 == 0) {
        console.log("true");
    }
    else {
        console.log("False");
    }
}
leapYear(1600);
leapYear(2000);
leapYear(1500);
leapYear(2004);
leapYear(2008);
leapYear(2010);
