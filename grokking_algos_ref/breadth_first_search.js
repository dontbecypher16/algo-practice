/**
 * Breadth-first search is an algorithm for traversing a graph.
 *
 * It discovers all nodes reachable from the starting position by exploring all of the neighbor nodes at the present
 * depth prior to moving on to the nodes at the next depth level.
 *
 */


 let breadthFirstSearch = (tree, rootNode, searchValue) => {
   // make a queue array
   let queue = [];
   // populate it with the node that will be the root of your search
   queue.push(rootNode);

   // search the queue until it is empty
   while (queue.length > 0) {
     // assign the top of the queue to variable currentNode
     let currentNode = queue[0];
     console.log("Current node is:" + currentNode.value);

     // if currentNode is the node we're searching for, break & alert
     if (currentNode.value === searchValue) {
       console.log("Found it!");
       return;
     }

     // if currentNode has a left child node, add it to the queue.
     if (currentNode.left !== null) {
       queue.push(tree[currentNode.left]);
     }

     // if currentNode has a right child node, add it to the queue.
     if (currentNode.right !== null) {
       queue.push(tree[currentNode.right]);
     }
     // remove the currentNode from the queue.
     queue.shift();
   }
   console.log("Sorry, no such node found :(");
 };

let network = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

  breadthFirstSearch(network, network[10], "12")



  // export function breadthFirstSearch (graph, startingNode) {
  //   // visited keeps track of all nodes visited
  //   const visited = new Set()
  
  //   // queue contains the nodes to be explored in the future
  //   const queue = [startingNode]
  
  //   while (queue.length > 0) {
  //     // start with the queue's first node
  //     const node = queue.shift()
  
  //     if (!visited.has(node)) {
  //       // mark the node as visited
  //       visited.add(node)
  //       const neighbors = graph[node]
  
  //       // put all its neighbors into the queue
  //       for (let i = 0; i < neighbors.length; i++) {
  //         queue.push(neighbors[i])
  //       }
  //     }
  //   }
  
  //   return visited
  // }