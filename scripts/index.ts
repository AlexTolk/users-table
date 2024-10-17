interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }
  

function fillTable(users: User[]) {
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
    cell.textContent = value.toString();  // Convert value to string for display
    row.appendChild(cell);
    });

    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);  // Append the table to the body of the HTML
}
  
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    fillTable(data);  // Pass the fetched data to fillTable function
})
.catch(error => console.error('Error:', error));
  