let user = prompt("Enter Snake, Water, or Gun");
let cpu_1 = Math.floor(Math.random() * 3);
let cpu = ['Snake', 'Water', 'Gun'][cpu_1];

const match = () => {
    if (cpu === 'Snake' && user === 'Water') {
        return 'cpu';
    } else if (cpu === 'Gun' && user === 'Water') {
        return 'user';
    } else if (cpu === 'Snake' && user === 'Gun') {
        return 'user';
    } else if (cpu === 'Gun' && user === 'Snake') {
        return 'cpu';
    } else if (cpu === 'Water' && user === 'Gun') {
        return 'cpu';
    } else if (cpu === 'Water' && user === 'Snake') {
        return 'user';
    } else {
        return 'none';
    }
};

let result = match(cpu, user);
let winnerElement = document.querySelector('.winner');

if (cpu === user) {
    document.write(`CPU choose: ${cpu} <br> You Choose: ${user}`);
    winnerElement.innerHTML = 'You have entered the same character. | No Winner |...';
} else if (result === 'user') {
    document.write(`CPU choose: ${cpu} <br> You Choose: ${user}`);
    winnerElement.innerHTML = 'You are the winner';
} else if (result === 'cpu') {
    document.write(`CPU choose: ${cpu} <br> You Choose: ${user}`);
    winnerElement.innerHTML = 'CPU is the winner';
} else {
    winnerElement.innerHTML = "Either you entered wrong or nothing.\nPlease Select Correct.\nTry Again";
}
