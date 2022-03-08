// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.

// Example 2:
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.

// Example 3:
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

/**
 // tasks = ["A","A","A","B","B","B", "C"], n = 2
 // A, B, C, A, B, idle, A, B
 * Input: array and an integer
 * Output: integer
 * Declare empty object to populate with tasks and increment on the value if duplicates
 * After we are able to keep track we can figure out where to place idles and tasks according to n unit of times
 *
 * Declare empty result string
 * iterate over object
 * logic will have to keep track of cooldown and tasks remaining
 * 
 *  
 * 
 */

function task_scheduler(tasks, n) {
  let taskCounts = {};
  let result = {};

  for (let task of tasks) {
    if (taskCounts[task]) {
      taskCounts[task]++;
    } else {
      taskCounts[task] = 1;
    }
  }

  for (let task in taskCounts) {
    //console.log(taskCounts[task]);
    slot_letter(result, task, taskCounts[task], n);
  }

  return result;
}

//console.log(task_scheduler(["A", "A", "A", "B", "B", "B"], 2));

// A A A B B __   A B _ A B _ A
// Push into array first key
// Then splice into array placeholders according to n
//
//array, letter, count , n:   "A", 3, 2

function slot_letter(object, letter, count, n) {
  let slot = 0;

  while (count > 0) {
    if (object[slot] === undefined) {
      object[slot] = letter;
      count--;
      slot += n + 1;
    } else {
      slot += 1;
    }
  }

  return object;
}

var test_result = {};

console.log(task_scheduler(["A", "A", "A", "B", "B", "B", "C"], 2));

//console.log(slot_letter(test_result, "A", 3, 2));
// console.log(slot_letter(test_result, "B", 3, 2));
// console.log(slot_letter(test_result, "C", 1, 2));
// console.log(slot_letter(test_result, "D", 1, 2));
