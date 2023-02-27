const messageWords = {
    movies: ['Fight Club', 'Fargo', 'The Green Mile', 'The Grand Budapest Hotel',
            'Casablanca', 'The Notebook', 'Before Sunrise', 'A Star is Born',
            'The Godfather', 'Amelie', 'Amour', 'Annie Hall', 'The Apartment', 'Apocalypse now',
            'Avengers: Endgame', 'Back to the Future', 'Badlands', 'Beauty and the Beast',
            'The Best Years of Our Lives', 'Better Luck Tomorrow', 'Bicycle Thieves', 'The Big Sick',
            'Black Panther', 'Black Hawk Down', 'Blade Runner', 'The Breakfast Club', 'Cabaret', 'Call Me By Your Name',
            'Carol', 'Chinatown', 'Children of Men', 'Dead Poets Society', 'Die Hard', 'Do the Right Thing',
            'Doctor Zhivago', 'Dog Day Afternoon', 'Dracula', 'Duck Soup',
            'Edward Scissorhands', 'The Elephant Man', 'Enter the Dragon', 'The Exorcist',
            'The Farewell', 'Fast Five', 'Forbidden Planet', 'Four Weddings and a Funeral',
            'Frankenstein', 'The French Connection', 'Frida', 'Gattaca', 'The General',
            'Goldfinger', 'Grand Illusion', 'Hero', 'High Noon', 'His Girl Friday', 'Inception', 'Inside Out',
            'It Happened One Night', 'It\'s a Wonderful Life', 'John Wick', 'Jurassic Park', 'La Dolce Vita',
            'Lady Bird', 'Lawrence of Arabia', 'The Matrix', 'Metropolis', 'Moonlight', 'My Left Foot',
            'Nashville', 'The Night of the Hunter', 'No Country for Old Men',  'Only Yesterday', 'Open City',
            'Pandora\'s Box', 'Pretty in Pink', 'Princess Mononoke', 'Psycho', 'Raging Bull', 'Roman Holiday',
            'The Rules of the Game'],
    books:   ['1984', 'The Lord of the Rings', 'The Kite Runner', 'Slaughterhouse-Five', 'To Kill a Mockingbird',
            'The Book Thief', 'Wuthering Heights', 'The Catcher in the Rye', 'Jane Eyre', 'Animal Farm', 'Fahrenheit 451',
            'Little Women', 'Frankenstein', 'Of Mice and Men', 'The Great Gatsby', 'Think and Grow', 'Pride and Prejudice',
            'The Hobbit', 'Gone with the Wind', 'The Grapes of Wrath', 'Lord of the Flies', 'A Tale of Two Cities'],
    hobbies: ['Knitting', 'Sailing', 'Hiking', 'Volunteering',
            'Gardening', 'Rock climbing', 'Dancing tango', 'Journaling', 'Fishing',
            'Camping', 'Rafting', 'Cycling', 'Golfing', 'Yoga', 'Pottery', 'Drawing',
            'Painting', 'Calligraphy', 'Candle making', 'Origami', 'Woodworking', 'Sewing', 'Embroidery',
            'Baking', 'Wine tasting', 'Chess', 'Learning a new language', 'Meditation']
};

/* returns an index within 0 and lengthOfArray - 1*/
function randomizer(lengthOfArray) {
    return  Math.floor(Math.random() * lengthOfArray);
}

/* extracts a value from an object and returns it */
function randomChoice(obj, choice) {
    const variety = obj[choice]; // stores an array of user's choice
    const index = randomizer(variety.length); // stores a random digit which doesn't exceed the length of the array
    return variety[index]; // An actual name of a movie, book or hobby
}

/* generates a message for a user */
function printMessage(choice) {
    if (choice === 'movies') {
        const movieMessages = ['How about watching', 'Have you seen', 'Have you checked out'
            , 'I recommend', 'One of my favorite movies is', 'You should watch', 'You might enjoy']
        return (`${movieMessages[randomizer(movieMessages.length)]} '${randomChoice(messageWords, choice)}'?`);
    } else if (choice === 'books') {
        const bookMessages = ['People recommend', 'I\'d would suggest reading', 'One of my favorite books is', 'You will love', 'I enjoyed'];
        return (`${bookMessages[randomizer(bookMessages.length)]} '${randomChoice(messageWords, choice)}'.`);
    } else if (choice === 'hobbies') {
        const hobbiesMessages = ['is always a good idea', 'is what people need', 'would make everyone happy', 'is a new trend', 'is fun'];
        return (`${randomChoice(messageWords, choice)} ${hobbiesMessages[randomizer(hobbiesMessages.length)]}.`);
    }
}

/* event handler function
* prints out a message in the HTML file */
function getButton(choice) {
    document.getElementById('button').addEventListener('click', (e) => {
        if (e.target.classList.contains(choice)) {
            document.getElementById(`answer`).innerHTML = '<p class="message">' + printMessage(choice) + '</p>';
        }
    })
}

