function reverse(head) {
    if (!head) {
        return null;
    }

    let first = head;
    let second = first.next;

    while (second) {
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    head.next = null;
    head = first;
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

reverse(head);
