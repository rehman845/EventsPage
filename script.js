const events = [
  {
    name: "Tech Conference 2025",
    date: "2025-06-10",
    time: "10:00 AM",
    location: "Islamabad, Pakistan",
    description: "Join tech leaders and enthusiasts for a day of innovation.",
  },
  {
    name: "Art & Culture Fest",
    date: "2025-06-15",
    time: "1:00 PM",
    location: "Lahore, Pakistan",
    description: "Celebrate creativity with local artists and performers.",
  },
  {
    name: "Startup Pitch Night",
    date: "2025-06-20",
    time: "6:00 PM",
    location: "Karachi, Pakistan",
    description: "Watch emerging startups pitch to top VCs.",
  },
  {
    name: "Music Carnival",
    date: "2025-06-25",
    time: "5:00 PM",
    location: "Islamabad, Pakistan",
    description: "An evening of live music and fun for all ages.",
  },
  {
    name: "Health & Wellness Expo",
    date: "2025-07-01",
    time: "9:00 AM",
    location: "Lahore, Pakistan",
    description: "Discover the latest in health products and services.",
  }
];

function renderEvents(filter = "") {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(event => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-4";

    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${event.date} at ${event.time}</h6>
          <p class="card-text"><strong>Location:</strong> ${event.location}</p>
          <p class="card-text">${event.description}</p>
          <a href="#" class="btn btn-primary">Register</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", e => {
  renderEvents(e.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
});
