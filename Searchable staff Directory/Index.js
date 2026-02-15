// Global variable to store user data
let cachedUsers = [];

// Fetch users from the API and store them in localStorage
async function fetchUsers() {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const data = await response.json();
    
    localStorage.setItem("users", JSON.stringify(data.results)); // Cache data
    cachedUsers = data.results;
    displayUsers(cachedUsers);
}

// Function to create and return a Bootstrap card component for each user
function createUserCard(user) {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
        <div class="card shadow-sm">
            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
            <div class="card-body">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text">${user.email}</p>
                <a href="profile.html?userID=${user.login.uuid}" class="btn btn-primary">View Profile</a>
            </div>
        </div>
    `;
    return card;
}

// Function to display users in the DOM
function displayUsers(users) {
    const container = document.getElementById("userContainer");
    container.innerHTML = ""; // Clear existing content

    users.forEach(user => {
        container.appendChild(createUserCard(user));
    });
}

// Function to filter users based on search input
function searchUsers(query) {
    const filteredUsers = cachedUsers.filter(user =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) || 
        user.name.last.toLowerCase().includes(query.toLowerCase())
    );

    displayUsers(filteredUsers);
}

// Event listener for live search
document.getElementById("searchInput").addEventListener("input", (e) => {
    searchUsers(e.target.value);
});

// Load users from cache or fetch new ones
if (localStorage.getItem("users")) {
    cachedUsers = JSON.parse(localStorage.getItem("users"));
    displayUsers(cachedUsers);
} else {
    fetchUsers();
}