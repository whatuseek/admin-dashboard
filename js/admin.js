// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  localStorage.setItem('theme', rootElement.classList.contains('dark') ? 'dark' : 'light');
});

// Preserve Theme on Page Load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  rootElement.classList.add('dark');
} else {
  rootElement.classList.remove('dark');
}

// Add New User Dynamically
const userForm = document.getElementById('user-form');
const userList = document.getElementById('user-list');

// Function to Add a User Row
const addUser = (username, email) => {
  const newRow = document.createElement('tr');
  newRow.className = 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100';

  newRow.innerHTML = `
    <td class="px-6 py-3">${username}</td>
    <td class="px-6 py-3">${email}</td>
    <td class="px-6 py-3 text-center">
      <button class="text-red-500 dark:text-red-400 hover:underline remove-user">Remove</button>
    </td>
  `;

  userList.appendChild(newRow);
};

// Add Default Users on Page Load
const defaultUsers = [
  { username: 'default_user1', email: 'user1@example.com' },
  { username: 'default_user2', email: 'user2@example.com' },
];

// Populate Default Users
defaultUsers.forEach((user) => addUser(user.username, user.email));

// Handle Form Submission to Add New User
userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();

  if (username && email) {
    addUser(username, email);
    userForm.reset();
  } else {
    alert('Both username and email are required!');
  }
});

// Remove User Event Delegation
userList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-user')) {
    const row = e.target.closest('tr');
    row.remove();
  }
});
