function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    return words.pop().length;
}
