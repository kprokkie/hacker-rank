function findLongestUniqueSubstring(str) {

    if (!str.length) return 0;

    let len = 0;
    let i = 0;
    let j = 0;

    let hash = {};

    while (i < str.length && j < str.length) {

        if (!hash[str[i]]) {
            hash[str[i]] = str[i];
            i++;
            len = Math.max(len, i - j);
        } else {
            delete hash[str[j]];
            j++;
        }
    }

    return len;
}

const str = 'abcabcabc';
console.log(findLongestUniqueSubstring(str));

const str1 = 'abcadecabc';
console.log(findLongestUniqueSubstring(str1));

const str2= 'bbbb';
console.log(findLongestUniqueSubstring(str2));

const str3= 'pwwkew';
console.log(findLongestUniqueSubstring(str3));