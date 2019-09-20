function deleteNode(head, position) {
  if (!head) {
    return null;
  }

  let counter = 1;
  let curr = head;

  if (!position) {
    return head.next;
  }

  while (counter < position) {
    curr = curr.next;
    counter++;
  }
  curr.next = curr.next.next;
  return head;
}

const head = {
  val: 20,
  next: {
    val: 6,
    next: {
      val: 2,
      next: {
        val: 19,
        next: {
          val: 7,
          next: {
            val: 4,
            next: {
              val: 15,
              next: {
                val: 9,
                next: null
              }
            }
          }
        }
      }
    }
  }
}
// 20->6->2->19->7->4->15->9
// pos 3, index 0
// 20->6->2->7->4->15->9
deleteNode(head, 0);
