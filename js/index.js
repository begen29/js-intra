const message = 'Hello JS!';
alert(message);

const userName = prompt('Enter your name');
alert('Hello ' + userName);

const userAge = parseFloat(prompt('Enter you age'));
alert('You age is ' + userAge);

const nextAge = add(userAge, 1);
alert('next year your will be ' + nextAge);

if (userAge >= 18) {
    alert('You are adult!');
}
else {
    alert('you are underaged!');
}

function add(a, b) {
    const sum = a + b;
    return sum;
}



function add(a, b) {
    const sum = a + b ;
    return sum ;
}