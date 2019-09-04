function printLinkedList(head) {
   while(head) {
       console.log(head.data);
       head = head.next;
   }
}

const head = {
    data: 16,
    next: { data: 13, next: null }
};

printLinkedList(head);