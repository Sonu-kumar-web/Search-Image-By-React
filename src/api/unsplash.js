import axios from "axios";

// Create client for axios
export default axios.create({
   baseURL: "https://api.unsplash.com",
   headers: {
      Authorization: "Client-ID grm9rmHKn6EO5Dg6GZS1zokkaHgSwoIcNYfVd3bNwVg",
   },
});
