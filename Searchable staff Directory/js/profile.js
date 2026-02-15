import { getCachedUsers } from "./api.js";

function loadUserProfile() {
    const users = getCachedUsers();
    const params = new URLSearchParams(window.location.search);
    const userID = params.get("userID");

    const user = users.find(u => u.login.uuid === userID);
    if (!user) {
        document.getElementById("profileContainer").innerHTML = "<h3>User not found</h3>";
        return;
    }

    document.getElementById("profileContainer").innerHTML = `
        <div class="card mx-auto" style="max-width: 400px;">
            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
            <div class="card-body">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <a href="index.html" class="btn btn-secondary w-100">Back to Search</a>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", loadUserProfile);
