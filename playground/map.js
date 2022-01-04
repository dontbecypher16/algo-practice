/**
 *  Maps, Sets and Objects
 * 
 * Map:
 *   keys can be any value: functions, objects, primitive
 *   iterates keys according to entry insertion
 *   can use size property
 *   for...of loop is better to use
 *   better for adding and removal of pairs
 *   methods: get, set, has, delete, clear
 *   forEach method 
 * 
 *  // turning 2d key-value array into map
 *  const kvArray = [['key1', 'value1'], ['key2', 'value2']]
    const myMap = new Map(kvArray)
 * 
 *  Objects:
 *    has default prototype
 *    key must String or Symbol
 *    for...in loop is better
 *    native support for json.parse and stringify
 *    Object.keys, Object.entries, Object["key"] = value
 * 
 *  Set:
 *     unique value of any type, primitive or object
 *     can use size property
 *     methods: add, has, delete, clear
 *     same tooling as map except above uniqueness and methods
 *    
 */


    let noTrust = [[1,3],[1,4],[2,3],[2,4],[4,3]]

    function Elements(value, key, map) {
        console.log(`map.get('${key}') = ${value}`)
    }
    new Map(noTrust).forEach(Elements)

    

    let foo = new Map();
    foo[1] = [3]
    foo[1].push(4)

    console.log(foo[1])
    

    let playMap = new Object(noTrust)
    console.log(playMap)