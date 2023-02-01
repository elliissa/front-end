function fetchData() {
    fetch("https://randomuser.me/api")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById("image").src = data.results[0].picture.large;
            document.getElementById("city").textContent = data.results[0].location.city;
            document.getElementById("name").textContent = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
            document.getElementById("cell").textContent = data.results[0].cell;
            document.getElementById("country").textContent = data.results[0].location.country;
        });
}
