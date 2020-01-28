function countWords(myString) {

    // Initialize an empty Object
    var wordFrequency = {};

    // Split the string into an array of words
    var wordArray = myString.split(" ");

    // for each item in the word array, count the frequencies
    wordArray.forEach(function (word) {

        // If the word already exists in the Object, increase its count
        if (word in wordFrequency) {
            wordFrequency[word] += 1;
        }
        // Otherwise, add it to the Object
        else {
            wordFrequency[word] = 1;
        }
    });

    // return our results
    console.log(wordFrequency);
    return wordFrequency;

};

// Call our new function
countWords("I am what I am and always will be what I am");