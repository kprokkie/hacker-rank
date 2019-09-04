/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtHead(head, data) {
    const node = new SinglyLinkedListNode(data);

    if (!head) {
        head = node;
        return head;
    }

    node.next = head;
    head = node;

    return head;
}

// const head = null;

const head = {
    data: 16,
    next: { data: 13, next: null }
};


const data = 23

console.log(insertNodeAtHead(head, data));