// list of country ids
const country_id_list = Object.keys(countries_graph);
const exclave_id_list = Object.keys(exclaves);

// return random int number
function getRandomInt(max, prev = -1) {
    let rand;
    do rand = Math.floor(Math.random() * max);
    while (rand === prev);

    return rand;
}

// check if neighbouring country has the same color as the current country
function check_neighbour(col, id) {
    for (let i = 0; i < countries_graph[id].neighbours.length; i++) {
        let cur = countries_graph[id].neighbours[i];
        if (countries_graph[cur].color === col) return true;
    }

    return false;
}

// check if country has exclave
function has_exclave(id) {
    for (let i = 0; i < exclave_id_list.length; i++)
        if (id === exclave_id_list[i]) return true;

    return false;
}

// color the map
function color_map() {
    // assign colors to each country
    for (let i = 0; i < country_id_list.length; i++) {
        let color_id = -1;
        let country_color;
        let cur = country_id_list[i];

        do {
            color_id = getRandomInt(colors.length - 1, color_id);
            country_color = colors[color_id];
            countries_graph[cur].color = country_color;
        } while (check_neighbour(country_color, cur));

        let country = document.getElementById(cur);
        country.classList.add(countries_graph[cur].color);

        if (has_exclave(cur)) {
            country = document.getElementById(exclaves[cur]);
            country.classList.add(countries_graph[cur].color);
        }
    }
}

color_map();
