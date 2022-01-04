// 3) Write a function that fetches all children elements as well as the direct line of ancestors, including itself, given a collection of data as follows:

// elements = [
//   {"id": 1, "name": "Account 1", "parent": null},
//   {"id": 2, "name": "Account 2", "parent": 1},
//   {"id": 3, "name": "Account 3", "parent": 1},
//   {"id": 4, "name": "Account 4", "parent": 1},
//   {"id": 20, "name": "Account 20", "parent": 2},
//   {"id": 21, "name": "Account 21", "parent": 2},
//   {"id": 30, "name": "Account 30", "parent": 3},
//   {"id": 31, "name": "Account 31", "parent": 3},
//   {"id": 40, "name": "Account 40", "parent": 4},
//   {"id": 41, "name": "Account 41", "parent": 4},
// ]`
/*
        1
   /    |     \
  2     3      4
 / |  |  |    | |
20 21 30 31  40 41
*/

/**
 * 
 * acct 1 is root node
 * accts 2, 3, 4 === level 1
 * accts 20, 21 === level 2
 * accts 30, 31 === level 2
 * accts 40, 41 === level 2
 * 
 * Input single object
 * output is array of objects
 * id, name, parent
 * 
 * 
 * get_related(elements[1]) == [
  {"id": 1, "name": "Account 1", "parent": None},
  {"id": 2, "name": "Account 2", "parent": 1},
  {"id": 20, "name": "Account 20", "parent": 2},
  {"id": 21, "name": "Account 21", "parent": 2},
]

 * get_ancestors(elements[1]) == [
{"id": 1, "name": "Account 1", "parent": None},
]


// elements[4] == {"id": 20, "name": "Account 20", "parent": 2}
get_ancestors(elements[4]) == [ 
  {"id": 1, "name": "Account 1", "parent": None},
  {"id": 2, "name": "Account 2", "parent": 1},
]

 * 
 */

function get_root(elements, obj) {
  let result = [obj];

  while (result[result.length - 1]["parent"] !== null) {
    for (let i = 0; i < elements.length; i++) {
      let node = elements[i];

      if (result.length === 1) {
        if (node.id === obj["parent"]) {
          // node is obj parent
          result.push(node);
          break;
        } 
      } else if (result.length > 1) {
        if (node.id === result[result.length - 1]["parent"]) {
          result.push(node);
        }
      }
    }
  }

  //return array of ancestors
  return result;
}


function get_children(elements, obj) {
  let result2 = [];

  let stack = [obj];

  while (stack.length > 0) {
    // get node from stack
    // do something with it
    // load node.children into stack

    let check = stack.pop();

    for (let j = 0; j < elements.length; j++) {
      let node = elements[j];
      if (check["id"] === node["parent"]) {
        stack.push(node);
      }
    }

    if(check["id"] !== obj["id"]){
      result2.push(check);

    }
  }

  return result2;
}


function combineFamily(elements, obj){
    let children = get_children(elements, obj)
    let parents = get_root(elements, obj)

    return children.concat(parents)
}

let test = [
    {"id": 1, "name": "Account 1", "parent": null},
    {"id": 2, "name": "Account 2", "parent": 1},
    {"id": 3, "name": "Account 3", "parent": 1},
    {"id": 4, "name": "Account 4", "parent": 1},
    {"id": 20, "name": "Account 20", "parent": 2},
    {"id": 21, "name": "Account 21", "parent": 2},
    {"id": 30, "name": "Account 30", "parent": 3},
    {"id": 31, "name": "Account 31", "parent": 3},
    {"id": 40, "name": "Account 40", "parent": 4},
    {"id": 41, "name": "Account 41", "parent": 4},
]

console.log(combineFamily(test, test[1]))






   