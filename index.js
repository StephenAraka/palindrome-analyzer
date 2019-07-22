class PalindromeChecker {
    constructor() {
        const input = document.querySelector("[data-input]");
        const resultDiv = document.querySelector(".message");
        const message = resultDiv.querySelector(".color-grey");
        this.input = input;
        this.message = message;
        this.getInput();

    }

    // this function will simply get our string
    getInput = () => {
        document.querySelector("form.pure-form").addEventListener("submit", (e) => {
            e.preventDefault();
            this.palindrome(this.input.value);
        });
    }

    // this function below will check the string passed in the parameter if it
    // is a palindrome or not
    /* HOW?
        1. get all symbols using RegEx's
        2. remove all symbols and spaces from input string and convert to lower case
        3. get input string and convert to array, reverse elements, and join back to
            get palindrome string...
        4. check for equality and do the needful...
        */
    palindrome = (inputString) => {
        const symbols = /\W|_/g;
        inputString = inputString.replace(symbols, "").toLowerCase();
        
        if (inputString == "") {
            this.message.className = "";
            this.message.classList.add("color-grey");
            this.message.innerText = "No checks yet!";
        } else {
            let palindromeString = inputString.replace(symbols, "").toLowerCase();
            palindromeString = palindromeString.split("").reverse("").join("");
            // console.log(palindromeString);
            const result = Boolean(inputString === palindromeString);
            this.printResult(result);
        }
    }

    printResult = (trueOrFalse) => {
        switch (trueOrFalse) {
            case true:
                this.message.className = "";
                this.message.classList.add("color-green");
                this.message.innerText = "Yaay, You got yourself a PALINDROME!"
                break;
            case false:
                this.message.className = "";
                this.message.classList.add("color-red");
                this.message.innerText = "Naay, that ain’t no palindrome!"
                break;
            default:
                return;
        }
        // console.log(trueOrFalse);
    }

}

const palindromeCheck = new PalindromeChecker();