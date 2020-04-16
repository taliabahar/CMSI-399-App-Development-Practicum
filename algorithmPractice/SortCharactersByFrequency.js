function frequencySort(s) {
    if (s.length = 0) {
        return "";
    }
    let letterFrequency = {};
    let result = "";
    for(let i=0; i < s.length; i++) {
        let letter = s[i];
        letterFrequency[letter] ? letterFrequency[letter]++ : letterFrequency[letter] = 1;
    } 
    const sortedFrequencies =  Object.keys(letterFrequency).sort((a,b)=>letterFrequency[b]-letterFrequency[a]);
    sortedFrequencies.forEach(letter => {result += letter.repeat(letterFrequency[letter])})  
    return result;
};

//I referenced this solution to help me with the end of the algorithm: https://leetcode.com/problems/sort-characters-by-frequency/discuss/93446/JavaScript-Solution
