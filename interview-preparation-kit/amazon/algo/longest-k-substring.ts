function findLongestKSubstring(str, k) {

    if (!str.length) return 0;

    let len = 0;
    let max = len;
    let hash = {};

    let i = 0;
    while (i < str.length) {
        if (hash[str[i]] !== undefined) {
            hash[str[i]] = i;
            i++;
            len++;
        } else {
            hash[str[i]] = i;
            i++;
            len++;
        }

        console.log(hash);

        if (Object.keys(hash).length > kk) {
            let index = Math.min(...Object.values(hash));
            delete hash[str[index]];
            len = i - index;
        }

        max = len;

        len = Math.max(len, )
    }

    return len;
}

const kk = 2;

const str0 = 'ccaabbb';
console.log(findLongestKSubstring(str0, kk));

