function CompareLists(llist1, llist2) {
  while (llist1 && llist2) {
    if (llist1.data !== llist2.data) {
      return 0;
    }
    llist1 = llist1.next;
    llist2 = llist2.next;
  }

  if (!llist1 && !llist2) return 1;
  else return 0;
}

const head1 = {
  data: 20,
  next: {
    data: 6,
    next: {
      data: 2, next: null
    }
  }
};

const head2 = {
  data: 20,
  next: {
    data: 6,
    next: {
      data: 2, next: null
    }
  }
};

const head3 = {
  data: 20,
  next: {
    data: 6,
    next: null
  }
};

CompareLists(head1, head2);
