const messageWords = {
    movies: ['Fight Club', 'Fargo', 'The Green Mile', 'The Grand Budapest Hotel',
        'Casablanca', 'The Notebook', 'Before Sunrise', 'A Star is Born'],
    books: ['1984'],
    hobbies: ['Knitting', 'Sailing', 'Hiking', 'Volunteering',
        'Learning how to play a musical instrument', 'Rock climbing', 'Dancing tango', 'Journaling', 'Fishing']
};

function randomizer(lengthOfArray) {
    return  Math.floor(Math.random() * lengthOfArray);
}

function randomChoice(obj, choice) {
    const variety = obj[choice]; // stores an array of user's choice
    const index = randomizer(variety.length); // stores a random digit which doesn't exceed the length of the array
    return variety[index]; // An actual name of a movie, book or hobby
}

function printMessage(choice) {
    if (choice === 'movies') {
        const movieMessages = ['How about watching', 'Have you seen', 'Have you checked out'
            , 'I recommend', 'One of my favorite movies is', 'You should watch', 'You might enjoy']
        console.log(`${movieMessages[randomizer(movieMessages.length)]} '${randomChoice(messageWords, choice)}'?`);
    } else if (choice === 'books') {
        const bookMessages = ['People recommend', 'I\'d would suggest reading', 'One of my favorite books is', 'You will love', 'I enjoyed'];
        console.log(`${bookMessages[randomizer(bookMessages.length)]} '${randomChoice(messageWords, choice)}'.`);
    } else if (choice === 'hobbies') {
        const hobbiesMessages = ['is always a good idea', 'is what people need', 'would make everyone happy', 'is a new trend. Are you in?', 'is fun'];
        console.log(`${randomChoice(messageWords, choice)} ${hobbiesMessages[randomizer(hobbiesMessages.length)]}.`);
    }
}

printMessage('movies');
printMessage('books');
printMessage('hobbies');