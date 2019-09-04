function timeConversion(s) {
    if (s.indexOf('PM') > -1) {
        let time = s.split('PM')[0];
        let hhmmss = time.split(':');
        let hh = +hhmmss[0] === 12 ? hhmmss[0] : +hhmmss[0] + 12;
        return hh + ':' + hhmmss[1] + ':' + hhmmss[2];
    } else {
        let time = s.split('AM')[0];
        let hhmmss = time.split(':');
        let hh = +hhmmss[0] === 12 ? '00' : hhmmss[0];
        return hh + ':' + hhmmss[1] + ':' + hhmmss[2];
    }
}

const time = '07:05:45PM';
console.log(timeConversion(time));