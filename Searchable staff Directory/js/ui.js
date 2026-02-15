// UI and DOM logic

export function createUserCard(user) {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
        <div class="card shadow-sm h-100">
            <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text">${user.email}</p>
                <a href="profile.html?userID=${user.login.uuid}" class="btn btn-primary mt-auto">View Profile</a>
            </div>
        </div>
    `;
    return card;
}

export function displayUsers(users) {
    const container = document.getElementById("userContainer");
    container.innerHTML = "";
    users.forEach(user => container.appendChild(createUserCard(user)));
}
