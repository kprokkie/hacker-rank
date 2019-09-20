function reversePrint(head) {
  let stack = [];
  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);
  }
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

reversePrint(head);
