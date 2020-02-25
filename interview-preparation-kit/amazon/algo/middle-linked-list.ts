function middleLinkedList(root) {
    let s = root;
    let f = root;

    while (s && f.next) {
        s = s.next;
        f = f.next.next;
    }

    console.log(s);
    console.log(f);

    return s.val;
}

// 1->2->3->4->5->6
const node = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};

console.log(middleLinkedList(node));