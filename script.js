document.addEventListener("DOMContentLoaded", () => {

  const lostForm = document.getElementById("lostForm");

  if (lostForm) {
    lostForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        type: "lost",
        name: document.getElementById("item-name").value,
        description: document.getElementById("description").value,
        location: document.getElementById("last-seen").value,
        date: document.getElementById("date-lost").value
      };

      console.log("Lost:", data);
      alert("Lost report saved (database coming next)");

      lostForm.reset();
    });
  }

  const foundForm = document.getElementById("foundForm");

  if (foundForm) {
    foundForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = {
        type: "found",
        name: document.getElementById("item-name-found").value,
        description: document.getElementById("description-found").value,
        location: document.getElementById("found-location").value,
        date: document.getElementById("date-found").value
      };

      console.log("Found:", data);
      alert("Found report saved (database coming next)");

      foundForm.reset();
    });
  }

});
