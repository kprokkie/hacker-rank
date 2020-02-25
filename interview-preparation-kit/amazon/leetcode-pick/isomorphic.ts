/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let sHash = {}, tHash = {};
    for (let i = 0; i < s.length; i++) {
        if (!sHash[s[i]]) sHash[s[i]] = t[i];
        if (!tHash[t[i]]) tHash[t[i]] = s[i];
        if (sHash[s[i]] !== t[i] || tHash[t[i]] !== s[i]) return false;
    }
    return true;
};

const s = "paper", t = "titlt";
console.log(isIsomorphic(s, t));