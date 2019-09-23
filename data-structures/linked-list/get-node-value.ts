/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
  let curr = head;
  let res = head;
  let index = 0;

  while (curr) {
    if (index > positionFromTail)
      res = res.next;
    curr = curr.next;
    index++;
  }

  if (index <= positionFromTail) 
    return null;
  else return res.val;
}

// 7   6  5  4   3  2   1  0
// 20->6->2->19->7->4->15->9
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
};

getNode(head, 9); // 7
