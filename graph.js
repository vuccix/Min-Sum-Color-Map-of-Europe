// pool of colors
const colors = [
    "orange", // orange
    "blue", // blue
    "red", // red
    "yellow", // yellow
    "purple", // purple
    "green", // green
];

// countries represented in adjacency list
let countries_graph = {
	"AL": {
        neighbours: ["RS", "GR", "ME", "MK", "IT"],
        color: "none"
    },
	"AT": {
        neighbours: ["CZ", "DE", "SK", "HU", "SI", "IT", "CH"],
        color: "none"
    },
	"BE": {
        neighbours: ["DE", "NL", "FR", "LU", "GB"],
        color: "none"
    },
	"BG": {
        neighbours: ["RS", "MK", "GR", "RO", "TR"],
        color: "none"
    },
	"BA": {
        neighbours: ["RS", "ME", "HR"],
        color: "none"
    },
	"BY": {
        neighbours: ["UA", "PL", "LV", "LT", ],
        color: "none"
    },
	"CH": {
        neighbours: ["DE", "AT", "FR", "IT"],
        color: "none"
    },
	"CZ": {
        neighbours: ["DE", "PL", "SK", "AT"],
        color: "none"
    },
	"DE": {
        neighbours: ["NL", "BE", "LU", "FR", "CH", "AT", "CZ", "PL", "DK", "SE"],
        color: "none"
    },
	"DK": {
        neighbours: ["DE", "NO", "SE"],
        color: "none"
    },
	"EE": {
        neighbours: ["LV", "FI", "SE"],
        color: "none"
    },
	"FI": {
        neighbours: ["EE", "SE", "NO"],
        color: "none"
    },
	"GB": {
        neighbours: ["FR", "NO", "IE", "IS", "NL", "BE", "DK"],
        color: "none"
    },
	"GR": {
        neighbours: ["TR", "AL", "BG", "MK", "IT", "CY"],
        color: "none"
    },
	"HR": {
        neighbours: ["RS", "AT", "HU", "BA", "SI", "IT", "ME"],
        color: "none"
    },
	"HU": {
        neighbours: ["RS", "HR", "AT", "SK", "UA", "RO", "SI"],
        color: "none"
    },
	"IE": {
        neighbours: ["GB", "IS"],
        color: "none"
    },
	"IS": {
        neighbours: ["GB", "IE", "NO"],
        color: "none"
    },
	"IT": {
        neighbours: ["AL", "HR", "CH", "SI", "GR", "ME", "AT", "FR", "ES"],
        color: "none"
    },
	"LT": {
        neighbours: ["LV", "BY", "PL", "SE"],
        color: "none"
    },
	"LU": {
        neighbours: ["DE", "FR", "BE"],
        color: "none"
    },
	"LV": {
        neighbours: ["LT", "EE", "BY", "SE"],
        color: "none"
    },
	"MD": {
        neighbours: ["RO", "UA"],
        color: "none"
    },
	"MK": {
        neighbours: ["RS", "GR", "AL", "BG"],
        color: "none"
    },
	"ME": {
        neighbours: ["RS", "BA", "AL", "IT", "HR"],
        color: "none"
    },
	"NL": {
        neighbours: ["BE", "DE", "GB", "DK"],
        color: "none"
    },
	"NO": {
        neighbours: ["SE", "GB", "DK", "FI", "IS"],
        color: "none"
    },
	"PL": {
        neighbours: ["DE", "CZ", "SK", "UA", "BY", "LT", "SE"],
        color: "none"
    },
	"PT": {
        neighbours: ["ES"],
        color: "none"
    },
	"RO": {
        neighbours: ["RS", "MD", "BG", "UA", "HU", "TR"],
        color: "none"
    },
	"RS": {
        neighbours: ["ME", "MK", "HR", "BA", "HU", "RO", "AL", "BG"],
        color: "none"
    },
	"SK": {
        neighbours: ["CZ", "PL", "UA", "HU", "AT"],
        color: "none"
    },
	"SI": {
        neighbours: ["HR", "HU", "AT", "IT"],
        color: "none"
    },
	"SE": {
        neighbours: ["NO", "DK", "FI", "DE", "PL", "EE", "LV", "LT"],
        color: "none"
    },
	"UA": {
        neighbours: ["BY", "PL", "SK", "HU", "RO", "MD", "TR", "GE"],
        color: "none"
    },
	"FR": {
        neighbours: ["BE", "LU", "DE", "CH", "IT", "ES", "GB"],
        color: "none"
    },
	"ES": {
        neighbours: ["PT", "FR", "IT"],
        color: "none"
    },
    "TR": {
        neighbours: ["GR", "BG", "RO", "UA", "GE", "AM", "CY"],
        color: "none"
    },
    "GE": {
        neighbours: ["AM", "TR", "UA"],
        color: "none"
    },
    "AM": {
        neighbours: ["GE", "TR"],
        color: "none"
    },
    "CY": {
        neighbours: ["TR", "GR"],
        color: "none"
    }
};
