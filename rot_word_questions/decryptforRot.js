const rot = require('.rot_solver')

// Using your `rot` function, write a function `decrypt` that takes a text encrypted using a shift substitution cipher of an unknown shift amount, and returns a tuple containing `(the shift used to encrypt the original string, the original string)`.

// You will need a dictionary or word list. An input string needs to be long enough to unambiguously determine the the shift used, or there could be multiple valid shifts.

// Sample inputs and outputs:


//     decrypt("Ju xbt uif cftu pg ujnft, ju xbt uif xpstu pg ujnft") -> ("It was the best of times, it was the worst of times", 1)


/**
 * 
 * Will have to shift until text is legible.
 * Have to output one number for shift, not many.
 * space and punctuation has to be taken account
 * 
 * 
 * It was uif best of times, it was uif worst of times
 * 
 * 
 * 
 */