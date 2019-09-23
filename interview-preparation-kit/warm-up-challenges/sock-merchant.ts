// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let hash = {};
  let pair = 0;
  for (let i = 0; i < n; i++) {
    if (!hash[ar[i]]) {
      hash[ar[i]] = ar[i];
    } else {
      pair++;
      delete hash[ar[i]];
    }
  }
  return pair;
}

const arr = [10, 20, 20, 10, 10, 30, 50, 0, 20, 50];
sockMerchant(arr.length, arr);
