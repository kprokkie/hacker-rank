function findIntersection(node1, node2) {

    let curr1 = node1;
    let c1 = 0;

    while (curr1) {
        c1++;
        curr1 = curr1.next;
    }

    // console.log(c1);

    let curr2 = node2;
    let c2 = 0;

    while (curr2) {
        c2++;
        curr2 = curr2.next;
    }

    // console.log(c2);

    let diff = Math.abs(c1 - c2);


    let bigNode, smallNode;
    if ( c1 > c2) {
        bigNode = node1;
        smallNode = node2;
    } else {
        bigNode = node2;
        smallNode = node1;
    }

    while (bigNode && diff--) {
        bigNode = bigNode.next;
    }

    // console.log(bigNode);

    while(bigNode && smallNode) {
        if (bigNode.val === smallNode.val) return bigNode.val;
        bigNode = bigNode.next;
        smallNode = smallNode.next;
    }

    return null;
}

// 1->2->3->4->5->6
const node1 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: null
                    }
                }
            }
        }
    }
};

// 8->4->5->6
const node2 = {
    val: 8,
    next: {
        val: 4,
        next: {
            val: 5,
            next: {
                val: 6,
                next: null
            }
        }
    }
};

console.log(findIntersection(node1, node2));