 function breadthFirstShortestPath (graph, startNode, targetNode) {
    // check if startNode & targetNode are identical
    if (startNode === targetNode) {
      return [startNode]
    }
  
    // visited keeps track of all nodes visited
    const visited = new Set()
  
    // queue contains the paths to be explored in the future
    const initialPath = [startNode]
    const queue = [initialPath]
  
    while (queue.length > 0) {
      // start with the queue's first path
      const path = queue.shift()
      const node = path[path.length - 1]
  
      // explore this node if it hasn't been visited yet
      if (!visited.has(node)) {
        // mark the node as visited
        visited.add(node)
  
        const neighbors = graph[node]
  
        // create a new path in the queue for each neighbor
        for (let i = 0; i < neighbors.length; i++) {
          const newPath = path.concat([neighbors[i]])
  
          // the first path to contain the target node is the shortest path
          if (neighbors[i] === targetNode) {
            return newPath
          }
  
          // queue the new path
          queue.push(newPath)
        }
      }
    }
  
    // the target node was not reachable
    return []
  }

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

breadthFirstShortestPath(network, network[10], "12")