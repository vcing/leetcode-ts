var copyRandomList = function (head) {
  const cache = {}
  for( let pointer = head; pointer.next; pointer = pointer.next  )
    cache[pointer.val] = {next: pointer.next ? pointer.next.val : null, random: pointer.random ? pointer.random.val : null, node: {val: pointer.val}}

  for ( let key of Object.keys(cache)  ) {
    if(cache[key].next) cache[key].node.next = cache[cache[key].next].node
    if(cache[key].random) cache[key].node.random = cache[cache[key].random].node
  }

  return cache[head.val].node

};
