function mergeSortedArray(nums1, m, nums2, n) {

    if (!nums1.length && !nums2.length) return [];
    if (!nums1.length) return nums2;
    if (!nums2.length) return nums1;

    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while (p1 >= 0 && p2 >= 0) {
        // if (nums1[p1] < nums2[p2]) {
        //     nums1[p] = nums2[p2];
        //     p2--;
        //     p--;
        // } else {
        //     nums1[p] = nums1[p1];
        //     p1--;
        //     p--;
        // }
        nums1[p--] = nums1[p1] < nums2[p2] ? nums2[p2--] : nums1[p1--];
    }

    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }

    return nums1;
}

const nums21 = [1, 2, 7, 0, 0, 0];
const nums22 = [2, 5, 6];
console.log(mergeSortedArray(nums21, 3, nums22, 3));

const nums1 = [4, 8, 9, 0, 0, 0];
const nums2 = [1, 2, 3];
console.log(mergeSortedArray(nums1, 3, nums2, 3));

const nums11 = [0];
const nums12 = [1];
console.log(mergeSortedArray(nums11, 0, nums12, 1));

const nums31 = [1, 2, 3, 0, 0, 0];
const nums32 = [4, 5, 6];
console.log(mergeSortedArray(nums31, 3, nums32, 3));

