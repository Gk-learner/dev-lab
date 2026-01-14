export default function capitalizeWords(sentence) {
    let words = sentence.trim().split(/\s+/);
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(" ");
    // Your implementation
}

//For the purpose of user debugging.
// console.log(capitalizeWords("    hello world, how are you doing?"));