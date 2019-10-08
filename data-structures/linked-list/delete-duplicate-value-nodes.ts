/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  if (!head) return null;

  let curr = head;
  let temp = curr.next;

  while (temp) {
    if (curr.data === temp.data)
      temp = temp.next;
    else {
      curr.next = temp;
      curr = temp;
      temp = temp.next;
    }
  }
  
  curr.next = temp;
  return head;
}

const head1 = null;

const head2 = { data: 1, next: null };

//  1 -> 2 -> 2 -> 3 -> 4 -> NULL
const head3 = {
  data: 1,
  next:
  {
    data: 2,
    next:
    {
      data: 2,
      next:
      {
        data: 3,
        next:
        {
          data: 4,
          next: null
        }
      }

    }
  }
};

removeDuplicates(head3);
