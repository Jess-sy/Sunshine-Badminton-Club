const users = [
    { username: 'TP073888', password: 'janice1234' },
    { username: 'TP074665', password: 'jess4567' },
    { username: 'TP073395', password: 'yiner7890' },
    { username: 'TP066049', password: 'nicole5678'}
];

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        window.location.href = 'bookedslot.html';
        alert('Login successful! Welcome, ' + username + '!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
