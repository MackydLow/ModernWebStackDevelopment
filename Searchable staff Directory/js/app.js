import { fetchUsersFromAPI, getCachedUsers } from "./api.js";
import { displayUsers } from "./ui.js";

let cachedUsers = getCachedUsers();

// Load cached or fetch new
async function init() {
    if (cachedUsers.length > 0) {
        displayUsers(cachedUsers);
    } else {
        cachedUsers = await fetchUsersFromAPI();
        displayUsers(cachedUsers);
    }
}

function searchUsers(query) {
    const filtered = cachedUsers.filter(user =>
        user.name.first.toLowerCase().includes(query.toLowerCase()) ||
        user.name.last.toLowerCase().includes(query.toLowerCase())
    );
    displayUsers(filtered);
}

document.getElementById("searchInput").addEventListener("input", (e) => {
    searchUsers(e.target.value);
});

init();
