document.addEventListener("DOMContentLoaded", () => {

    console.log("App Loaded ✅");

    const container = document.getElementById("posts-container");

    // Future ready function
    function addPost(title, location, desc, image) {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-image">
                <img src="${image}" alt="item">
            </div>
            <h3>${title}</h3>
            <p>${location}</p>
            <p>${desc}</p>
        `;

        container.prepend(card);
    }

    // future use
});
