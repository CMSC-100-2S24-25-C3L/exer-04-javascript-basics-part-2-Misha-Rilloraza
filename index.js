//NAME: MISHA SOPHIA S. RILLORAZA
//STUDENT NUMBER: 2023-16578
//SECTION: CMSC 100 C-3L

//Parameters - first naemstring, lastname string
//return unique id by concatenating the 
// first letter of the first name (convert to lowecase)
//lastname (convert to lowercase)
//and unique alphanumeric string length of 8
//use uuuid pckg to get unique alphastring
//trim as needed
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

function generateUniqueID(firstname, lastname){
    let id = "";
    let name1 = firstname.toLowerCase();
    let name2 = lastname.toLowerCase(); //lastname in lower
    
    let firstletter1 = name1[0]; //first letter of firstname in lower 
    let random = uuidv4();
    let slicedrandom = random.slice(0,8);
    
    id = firstletter1 + name2 + slicedrandom;
    return id;
}

console.log(generateUniqueID("Alan", "Turing"));

//parameter: array w/ firstname string, lastname string
//email (string), age (number)

//if all conditions are true 
// all fields r present,
//first, last, email are non-emptystrings
//age = atleaast 18 
//email valid format (USE validator package)

function addAccount(firstname, lastname, email, age){
    //isempty true = is empty; false = not empty
    let first = firstname;
    let last = lastname;
    //email valid format (USE validator package)
    if (first && last && email !== ""){ //if the string is NOT empty
        if(age >= 18){ //atleast 18
            
        }
    }
    




}



console.log(addAccount(["Alan", "Turing", "aturing@w3c.com, 58"]));