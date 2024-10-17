"use strict";
function fillTable(users) {
    const table = document.createElement('table');
    const headers = ['ID', 'Name', 'Username', 'Email', 'Phone', 'Website'];
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    users.forEach(user => {
        const row = document.createElement('tr');
        const userValues = [user.id, user.name, user.username, user.email, user.phone, user.website];
        userValues.forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value.toString();
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
    fillTable(data);
})
    .catch(error => console.error('Error:', error));
