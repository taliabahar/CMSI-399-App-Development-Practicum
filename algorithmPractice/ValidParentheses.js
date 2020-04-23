/**
 * @param {string} s
 * @return {boolean}
 */
function isValid (s) {
    if(s.length === 0) {
        return true;
    }
    let stack = [];
    for(char of s) {
        if(char === "[") {stack.push("]");}
        else if(char === "(") {stack.push(")");}
        else if(char === "{") {stack.push("}");}
        else if(stack.length === 0 || char !== stack.pop()) {return false;}
    }
    return stack.length === 0;
}

// ex. "()[]{}"
// ) = stack 
// final else -> char = ) pops = )
// ] = stack 
// final else -> char = ] pops = ]
// } = stack
// final else -> char = } pops = }
