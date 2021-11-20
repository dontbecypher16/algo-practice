// name_match method
    // parameters: array of known aliases, and name returned from record
    // Should return True if a match, False if not.

//     1. Exact match
// #
// # knownAliases = ['Alphonse Gabriel Capone', 'Al Capone']
// # name_match(knownAliases, 'Alphonse Gabriel Capone') => True
// # name_match(knownAliases, 'Al Capone') => True
// # name_match(knownAliases, 'Alphonse Francis Capone') => False
// #
// #
// # 2. Middle name missing (on alias)
// #
// # knownAliases = ['Alphonse Capone']
// # name_match(knownAliases, 'Alphonse Gabriel Capone') => True
// # name_match(knownAliases, 'Alphonse Francis Capone') => True
// # name_match(knownAliases, 'Alexander Capone') => False
// #
// #
// # 3. Middle name missing (on record name)
// #
// # knownAliases = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Alphonse Capone') => True
// # name_match(knownAliases, 'Alphonse Francis Capone') => False
// # name_match(knownAliases, 'Alexander Capone') => False
// #
// #
// # 4. More middle name tests
// # These serve as a sanity check of your implementation of cases 2 and 3
// #
// # knownAliases = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']
// # name_match(knownAliases, 'Alphonse Gabriel Capone') => True
// # name_match(knownAliases, 'Alphonse Francis Capone') => True
// # name_match(knownAliases, 'Alphonse Edward Capone') => False
// #
// #
// # 5. Middle initial matches middle name
// #
// # knownAliases = ['Alphonse Gabriel Capone', 'Alphonse F Capone']
// # name_match(knownAliases, 'Alphonse G Capone') => True
// # name_match(knownAliases, 'Alphonse Francis Capone') => True
// # name_match(knownAliases, 'Alphonse E Capone') => False
// # name_match(knownAliases, 'Alphonse Edward Capone') => False
// # name_match(knownAliases, 'Alphonse Gregory Capone') => False
// #
// #
// # Bonus: Transposition
// #
// # Transposition (swapping) of the first name and middle name is relatively common.
// # In order to accurately match the name returned from a record we should take this
// # into account.
// #
// # All of the test cases implemented previously also apply to the transposed name.
// #
// #
// # 6. First name and middle name can be transposed
// #
// # 'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'
// #
// # knownAliases = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Gabriel Alphonse Capone') => True
// # name_match(knownAliases, 'Gabriel A Capone') => True
// # name_match(knownAliases, 'Gabriel Capone') => True
// # name_match(knownAliases, 'Gabriel Francis Capone') => False
// #
// #
// # 7. Last name cannot be transposed
// #
// # 'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// # 'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// #
// # knownAliases = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Alphonse Capone Gabriel') => False
// # name_match(knownAliases, 'Capone Alphonse Gabriel') => False
// # name_match(knownAliases, 'Capone Gabriel') => False



// recordName = 'Bob Smith'

// let [knownFirst, knownMiddle, knownLast] = recordName.split(' ');
//         bob          smith         undefined
//         bob          [smith]       smith

// if (!knownLast) {
//     knownLast = knownMiddle
// }
// knownLast = knownMiddle
//                  smith


module.exports = function nameMatch(knownAliases, recordName) {
  let newRecord = recordName.split(" ");
  let [rFirst, rMiddle, rLast] = newRecord;

  if(knownAliases.includes(recordName)){
    return true
  }

  for (let i = 0; i < knownAliases.length; i++) {
    //exact match and exact transposition
    let newKnown = knownAliases[i].split(" ");
    let [kFirst, kMiddle, kLast] = newKnown;
    if(transName(newKnown, newRecord)){
      return true
    }
  }



  return false;
};

// if middle and first equals to array first and middle names
//if no first name of record
   // record middle name equal to array first name
  // if first name is an initial form 
  // has to equal to array first name 
  

//let arr = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Gabriel Alphonse Capone') => True
// # name_match(knownAliases, 'Gabriel A Capone') => True
// # name_match(knownAliases, 'Gabriel Capone') => True
// # name_match(knownAliases, 'Gabriel Francis Capone') => False
//console.log(nameMatch())

//'Gabriel Alphonse Capone' is a valid transposition of 'Alphonse Gabriel Capone'
// #
// # knownAliases = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Gabriel Alphonse Capone') => True
// # name_match(knownAliases, 'Gabriel A Capone') => True
// # name_match(knownAliases, 'Gabriel Capone') => True
// # name_match(knownAliases, 'Gabriel Francis Capone') => False
// #
// #
// # 7. Last name cannot be transposed
// #
// # 'Alphonse Capone Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// # 'Capone Alphonse Gabriel' is NOT a valid transposition of 'Alphonse Gabriel Capone'
// #
// # knownAliases = ['Alphonse Gabriel Capone']
// # name_match(knownAliases, 'Alphonse Capone Gabriel') => False
// # name_match(knownAliases, 'Capone Alphonse Gabriel') => False
// # name_match(knownAliases, 'Capone Gabriel') => False


function transName(newKnown, newRecord){
  let [rFirst, rMiddle, rLast] = newRecord;
  let [kFirst, kMiddle, kLast] = newKnown


   if (
        (rMiddle.length === 1 || kMiddle.length === 1) &&
        rFirst === kFirst &&
        rLast === kLast
      ) {
        if(rMiddle === kMiddle[0] || rMiddle[0] === kMiddle){
          return true
        }
      }
      // middle name is missing in alias
      else if (newKnown.length === 2) {
        if(kFirst === rFirst && kMiddle === rLast){
          return true
        }
      } else if (newRecord.length === 2) {
        if(kFirst === rFirst && rMiddle === kLast){
          return true
        }
      } 
    

    return false
  
}