function shuffle_array(arr) {
    arr.sort(function (a, b) {
      return Math.random() - 0.5;
    });
}

function color_map() {
    // get country ids
    const country_ids = Object.keys(countries_graph);

    // shuffle colors and countries for differing results
    shuffle_array(colors);
    shuffle_array(country_ids);

    // assing color to each country
    for (let i = 0; i < country_ids.length; ++i) {
        let color_id = -1;
        let cur = country_ids[i];

        // try color until you can use it
        for (let j = 0; j < colors.length; ++j) {
            let canUse = true;

            // check if neighbour has the same color
            for (let n = 0; n < countries_graph[cur].neighbours.length; ++n) {
                let nbr = countries_graph[cur].neighbours[n];

                // if color is used try next color
                if (countries_graph[nbr].color === colors[j]) {
                    canUse = false;
                    break;
                }
            }

            // if neighbours dont use this color assign it
            if (canUse) {
                color_id = j;
                break;
            }
        }

        // assign color
        countries_graph[cur].color = colors[color_id];
        let country = document.getElementById(cur);
        country.classList.add(countries_graph[cur].color);
    }
}

function reset() {
    // get country ids
    const country_ids = Object.keys(countries_graph);

    // set colors to none
    for (let i = 0; i < country_ids.length; ++i) {
        let cur = country_ids[i];
        let country = document.getElementById(cur);
        country.classList.remove(countries_graph[cur].color);
        countries_graph[cur].color = "none";
    }

    color_map();
}

color_map();
