let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let zero = document.querySelector(".zero");
let del = document.querySelector(".del");
let reset = document.querySelector(".reset");
let assign = document.querySelector(".assign");
let display=document.querySelector(".dis")
let dot=document.querySelector(".dot")
const store = [];
let current="";
one.addEventListener("click", () => {
    store.push(1);
    display.innerHTML+=1;
    current+=1;
})

two.addEventListener("click", () => {
    store.push(2);
    display.innerHTML+=2;
    current+=2;
})
three.addEventListener("click", () => {
    store.push(3);
    display.innerHTML+=3;
    current+=3;
})
four.addEventListener("click", () => {
    store.push(4);
    display.innerHTML+=4;
    current+=4;
})
five.addEventListener("click", () => {
    store.push(5);
    display.innerHTML+=5;
    current+=5;
})
six.addEventListener("click", () => {
    store.push(6);
    display.innerHTML+=6;
    current+=6;
})
seven.addEventListener("click", () => {
    store.push(7);
    display.innerHTML+=7;
    current+=7;
})
eight.addEventListener("click", () => {
    store.push(8);
    display.innerHTML+=8;
    current+=8;
})
nine.addEventListener("click", () => {
    store.push(9);
    display.innerHTML+=9;
    current+=9;

})
zero.addEventListener("click", () => {
    store.push(0);
    display.innerHTML+=0;
    current+=0;

})
dot.addEventListener("click", () => {
    store.push(".");
    display.innerHTML+=".";
    current+=".";

})
add.addEventListener("click", () => {
    store.push("+");
    display.innerHTML+="+";
    current+="+";

})
sub.addEventListener("click", () => {
    store.push("-");
    display.innerHTML+="-";
    current+="-";

})
div.addEventListener("click", () => {
    store.push("/");
    display.innerHTML+="/";
    current+="/";

})
mul.addEventListener("click", () => {
    store.push("*");
    display.innerHTML+="*";
    current+="*";

})

del.addEventListener("click",()=>
{ 
    if (current.length > 0) {
        current = current.slice(0, -1);  // Remove last character
        store.pop();
        display.innerHTML = display.innerHTML.slice(0, -1);  // Update display
    }
})
assign.addEventListener("click", () => {
    let exp = ""; // Start with an empty string
    let n = store.length;

    // Check for invalid start or end characters
    if (n === 0 || ['+', '-', '/', '*'].includes(store[0]) || ['+', '-', '/', '*'].includes(store[n-1])) {
        exp = " "; // Set to space if invalid
    } else {
        for (let i = 0; i < n; i++) {
            // Construct the expression
            if (['+', '-', '/', '*'].includes(store[i])) {
                exp += ` ${store[i]} `; // Add spaces around operators for readability
            } else {
                exp += store[i]; // Append numbers directly
            }
        }

        // Evaluate the expression
        try {
            const result = eval(exp); // Be cautious with eval, it executes the string as code
            store.splice(0, store.length);
            store.push(result);
            display.innerHTML = result; // Display the evaluated result
        } catch (e) {
            display.innerHTML = "Error in expression"; // Handle errors
        }
    }
});
reset.addEventListener("click",()=>{
    display.innerHTML="";
    store.splice(0, store.length);
})







