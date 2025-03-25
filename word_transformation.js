/* 
Word Transformation

Challenge:

Write a function that takes a string and:

1. Converts every vowel (a, e, i, o, u) to uppercase.
2. Converts every consonant to lowercase.
3. If the word starts with a vowel, reverse the string before applying the above rules.

*/

function word_transformation(str){
    // This function takes a string as input and converts every vowel to uppercase,
    // every consonant to lowercase, and reverses the string if it starts with a vowel.
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = str.split( '') //  Split the <str> string into an array of characters.
    let result = '' // Initialize an empty string to store the result 
    if (vowels.includes(arr[0])) // Check if the first character is a vowel 
        {
        arr.reverse() // Reverse the array if the first character is a vowel 
    }
    for (let i = 0; i < arr.length; i++){
    // Loop through each character in the array
    
        if (vowels.includes(arr[i])){
            // Check if the character is a vowel
            result = result + arr[i].toUpperCase() // Convert the vowel to uppercase and add it to the result string
                                           
        }
        else {
            // If the character is a consonant 
            result = result + arr[i].toLowerCase() // Convert the consonant to lowercase
        }
    }
    return result // Returns the string
}

console.log(word_transformation('apple')) // prints -> 'ElppA' 
