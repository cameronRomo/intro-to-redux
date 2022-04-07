// Function Composition
let input = "     JavaScript     "
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}<div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)))

// Composing and Piping
    // Add lodash `npm i lodash`
import { compose, pipe } from "lodash/fp"
// with compose: Higher order function
// const transform = compose(wrapInDiv, toLowerCase, trim)
// transform(input)

// OR, with pipe, you can list the functions in a left to right direction (more readable)
// const transform = pipe(trim, toLowerCase, wrapInDiv);
// transform(input)

// Currying

// function add (a, b) {
    //     return a + b;
    // }
    
    // or in curring:
    function add(a) {
        return function(b) {
            return a + b;
        }
    }
    
    const add2 = a => b => a + b;
    
    add(1)(5)
    
    const wrap = type => str => `<${type}><${str}></${type}`
    const transform = pipe(trim, toLowerCase, wrap("div"));

    // Practicing Immutability w/ Immer

    import { produce } from 'immer';
    
    let book = { title: "Harry Potter" };


    function publish(book) {
        return produce(book, draftBook => {
            draftBook.isPublished = true;
        });
    }

    let updated = publish(book);
    console.log(updated);