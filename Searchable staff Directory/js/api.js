// Handles API calls and caching

export async function fetchUsersFromAPI() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        localStorage.setItem("users", JSON.stringify(data.results));
        return data.results;
    } catch (err) {
        console.error("API fetch error:", err);
        return [];
    }
}

export function getCachedUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}
