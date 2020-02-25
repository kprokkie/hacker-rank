/**
 * Assume you are given two APIs List<Person> getFriends(Person); and List<Order> getOrders(Person);. 
 * Design a feature like Amazon's recommendation system, except fill it with orders of a person's friends.
Now what if multiple people ordered the same thing, and we want to return the orders from most purchased to least purchased?
Now what if someone purchased multiple of the same item and we only want one copy of that counted?
Now what if we want to extend this to friends of friends?

Going off of the technical question from the second round there are a few ways to go about this:
1 - construct a map of product and order counts, expensive when a new product is added since we need to maintain order
2 - construct a priority queue with a LL, not too bad at O(n)
3 - construct a max heap with an array, much better with insertions/deletions being O(log(n))

This article does a really good job with going through the patterns behind a binary heap and a superb explanation of implementing the heap itself!
https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf
 
*/