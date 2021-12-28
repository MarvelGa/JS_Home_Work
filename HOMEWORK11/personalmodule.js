module.exports = {
    sayGreetingToUser
}

function sayGreetingToUser(username) {
    let timeNumber = new Date().getHours();
    let greeting;
    if (timeNumber >= 5 && timeNumber < 11) {
        greeting = 'Good morning';
    } else if (timeNumber >= 11 && timeNumber < 17) {
        greeting = 'Good day';
    } else if (timeNumber >= 17 && timeNumber < 23) {
        greeting = 'Good evening';
    } else {
        greeting = 'Good night';
    }
    return `${greeting}, ${username}!`
}
