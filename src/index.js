module.exports = function check(str, bracketsConfig) {
    const OPEN_BRACKETS = [];
    const BRACKETS_PAIR = {}

    console.log(BRACKETS_PAIR);

    for(let i = 0; i < bracketsConfig.length; i++) {
        let bracketsOpen = bracketsConfig[i][0];
        let bracketsClose = bracketsConfig[i][1];

        OPEN_BRACKETS.push(bracketsOpen);
        BRACKETS_PAIR[[bracketsClose]] = bracketsOpen;
    }

    console.log(OPEN_BRACKETS);
    console.log(BRACKETS_PAIR);
    

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if(OPEN_BRACKETS.includes(currentSymbol)) {
            stack.push(currentSymbol);
        } else {
            if(stack.length === 0) {
                return false;
            }

            let topElement = stack[stack.length - 1];

            if(BRACKETS_PAIR[currentSymbol] === topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}



/* const check = (str, bracketsConfig) => {
    const OPEN_BRACKETS = [];
    const BRACKETS_PAIR = {}

    console.log(BRACKETS_PAIR);

    for(let i = 0; i < bracketsConfig.length; i++) {
        let bracketsOpen = bracketsConfig[i][0];
        let bracketsClose = bracketsConfig[i][1];

        OPEN_BRACKETS.push(bracketsOpen);
        BRACKETS_PAIR[[bracketsClose]] = bracketsOpen;
    }

    console.log(OPEN_BRACKETS);
    console.log(BRACKETS_PAIR);
    

    let stack = [];

    for(let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if(OPEN_BRACKETS.includes(currentSymbol)) {
            stack.push(currentSymbol);
        } else {
            if(stack.length === 0) {
                return false;
            }

            let topElement = stack[stack.length - 1];

            if(BRACKETS_PAIR[currentSymbol] === topElement) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(check(
    '[]()', 
    [
        ['(', ')'], ['[', ']']
    ]
));
 */
