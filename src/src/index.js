const searchInput = document.getElementById("search-bar");

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value;
  console.log("Search for:", query);
  // Simulate fetching movie list based on query
});
