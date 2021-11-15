function swap(arr, idx1, idx2) {
    return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// reverse vowel function
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split('');
    let start = 0;
    let end = s.length-1;
    while(start < end) {
        if(vowels.includes(s[start]) && vowels.includes(s[end])) {
            swap(s, start, end);
            start++;
            end--;
        }else if(!vowels.includes(s[start])){
            start++;
        } else if(!vowels.includes(s[end])) {
            end--;
        }
    }
    
    return s.join('');
};

let x = "hello";
console.log(reverseVowels(x));
