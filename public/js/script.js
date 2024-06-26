const btn = document.getElementById('btn');
btn.onclick = function () {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let username = 'mickeymond';
let age = 101;
let present = false;

// Objects
const person = {
    username: 'mickeymond',
    age: 101,
    present: false,
    child: {
        name: 'Mickey Mouse',
        friend: {
            name: 'Biggie',
        }
    }
}
console.log(person.username);
person.age = 105;
console.log(person);

// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
}

const bottle2 = {
    size: 'small',
    color: 'blue'
}

const bottles = [bottle1, bottle2];
bottles.push(bottle1);
bottles.push(bottle2);
bottles;
bottles[1].color;

const date = new Date();
date.getDay();

// If/Else
//   const age = 17;
if (age >= 18) {
    'You are true';
} else {
    'You are false';
}

// For loop
for (let i = 0; i < bottles.length; i++) {
    // console.log('We did it!', i);
    console.log(bottles[i]);
}

// Functions
// Defining a function
function login(username, password) {
    // Validate username and password
    if (!username || !password) {
        return 'Username or password not provided';
    }
    // Verify username and password
    if (username == 'mickeymond' && password == '1234') {
        return 'User is logged in';
    } else {
        return 'Invalid username or password';
    }
}
// Invoking a function
login('mickeymond');


// Basic Arithmetic Operations
11 + 12;
1 + 0.5;
43 - 12;
45 / 7;
5 * 3;
14 % 3;

Math.floor(45 / 24);
45 % 24
Math.random() * 1000;
Math.max(34, 32, 37);
2 * (3 + 4) - 5 / 2;
Number('ty') + 2

// Strings in JavaScript
// Concatenation
const firstname = 'Michael';
const lastname = 'Hammond';
const middlename = '';
firstname + ' ' + middlename + ' ' + lastname;
// Template literal
`${firstname} ${middlename} ${lastname}`;

// Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email) {
    // Check if email was provided
    if (!email) {
        return 'No email provided';
    }
    // Check if email is valid
    if (!email.includes('@gmail.com')) {
        return 'Invalid email provided';
    }
    // Add email to participants
    participants.push(email);
    return 'Participant added';
}

addParticipant('mickeymond@gmail.com');
addParticipant('mickeymond@outlook.com');
addParticipant();
addParticipant('mickeymond');
participants;

// Arrays in JavaScript
// const users = [
//     {
//         username: 'mickeymond',
//         password: '1234',
//         email: 'mickeymond@yahoo.com'
//     },
//     {
//         username: 'mickeymond201',
//         password: '12345',
//         email: 'mickeymond@outlook.com'
//     }
// ];
// users;

// Write a function that will take a user with firstname, lastname and return fullname;
function fullName(user) {
    return {
        ...user,
        fullName: `${user.firstname} ${user.lastname}`,
    };
}

const user = {
    firstname: "John",
    lastname: "Quayson",
};
fullName(user);

// Array map
const users = [
    { firstname: "Michael", lastname: "Hammond" },
    { firstname: "Elon", lastname: "Musk" },
    { firstname: "Barry", lastname: "Allen" },
    { firstname: "Oliver", lastname: "Queen" },
    { firstname: "Will", lastname: "Smith" },
];
// users.map(fullName);

// Square of numbers
function square(number) {
    return number ** 2;
}
square(7);
const numbers = [9, 8, 7, 6];
numbers.map(square);

// Array filter
function isEven(number) {
    return number % 2 === 0;
}
isEven(6);
numbers.filter(isEven);

// Write a function that will allow a user to reset their password
// const user = {
//     email: "mickeymond@yahoo.com",
//     password: "1234",
//   };

function resetPassword(email, newPassword) {
    // Check if email and new password was provided
    if (!email || !newPassword) {
        return "Email or password not provided";
    }
    // Check if provided email is correct
    if (email === user.email) {
        // Update password with new one
        user.password = newPassword;
        return "Password reset successful";
    }
    if (email !== user.email) {
        return "Invalid email";
    }
}

user;
resetPassword("mickeymond@yahoo.com", '454545');
user;