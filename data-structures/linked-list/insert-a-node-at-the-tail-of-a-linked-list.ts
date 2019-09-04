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

function insertNodeAtTail(head, data) {
    const node = new SinglyLinkedListNode(data);

    if (!head) {
        head = node;
        return head;
    }

    let temp = head;
    while (temp.next) {
        temp = temp.next;
    }

    temp.next = node;
    return head;
}

// const head = null;

const head = {
    data: 16,
    next: { data: 13, next: null }
};


const data = 23

console.log(insertNodeAtTail(head, data));