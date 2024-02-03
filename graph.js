// pool of colors
const colors = [
    "orange", // orange
    "blue", // blue
    "red", // red
    "yellow", // yellow
    "purple", // purple
    "green", // green
    "none", // none
];
const default_color = colors.length;

// countries represented in adjacency list
let countries_graph = {
    "cz": {
        neighbours: ["de-", "pl", "sk", "at"],
        color: colors[default_color]
    },
    "de-": {
        neighbours: ["cz", "pl", "at", "fr-", "ch", "nl-", "be", "lu-", "dk-", "se-"], 
        color: colors[default_color]
    },
    "pl": {
        neighbours: ["cz", "de-", "sk", "ua-", "by", "se-"],
        color: colors[default_color]
    },
    "sk": {
        neighbours: ["cz", "at", "pl", "hu", "ua-"],
        color: colors[default_color]
    },
    "at": {
        neighbours: ["cz", "si", "de-", "sk", "hu", "it-", "ch"],
        color: colors[default_color]
    },
    "hu": {
        neighbours: ["at", "sk", "rs-", "si", "hr", "ro", "ua-"],
        color: colors[default_color]
    },
    "rs-": {
        neighbours: ["hu", "hr", "ba", "ro", "bg", "al", "mk", "me-"],
        color: colors[default_color]
    },
    "si": {
        neighbours: ["hu", "at", "hr", "it-"],
        color: colors[default_color]
    },
    "hr": {
        neighbours: ["hu", "si", "rs-", "ba", "it-", "me-"],
        color: colors[default_color]
    },
    "ba": {
        neighbours: ["hr", "rs-", "me-"],
        color: colors[default_color]
    },
    "ro": {
        neighbours: ["hu", "rs-", "ua-", "md-", "bg"],
        color: colors[default_color]
    },
    "ua-": {
        neighbours: ["hu", "ro", "sk", "pl", "md-", "by", "ru-", "tr"],
        color: colors[default_color]
    },
    "md-": {
        neighbours: ["ro", "ua-"],
        color: colors[default_color]
    },
    "by": {
        neighbours: ["pl", "ua-", "ru-"],
        color: colors[default_color]
    },
    "bg": {
        neighbours: ["rs-", "ro", "gr-", "tr", "mk"],
        color: colors[default_color]
    },
    "gr-": {
        neighbours: ["mk", "al", "tr", "cy-", "bg", "mt-"],
        color: colors[default_color]
    },
    "al": {
        neighbours: ["mk", "it-", "rs-", "me-", "gr-"],
        color: colors[default_color]
    },
    "mk": {
        neighbours: ["rs-", "al", "bg", "gr-"],
        color: colors[default_color]
    },
    "me-": {
        neighbours: ["rs-", "al", "ba", "it-", "hr"],
        color: colors[default_color]
    },
    "tr": {
        neighbours: ["gr-", "bg", "cy-", "ru-", "ge-", "am", "az-", "sy", "iq", "lb-", "ir-", "ua-"],
        color: colors[default_color]
    },
    "cy-": {
        neighbours: ["gr-", "tr", "sy", "lb-"],
        color: colors[default_color]
    },
    "it-": {
        neighbours: ["si", "fr-", "al", "me-", "at", "hr", "ch", "es-", "tn-", "dz", "ma-", "va-"],
        color: colors[default_color]
    },
    "ch": {
        neighbours: ["it-", "at", "fr-", "de-"],
        color: colors[default_color]
    },
    "fr-": {
        neighbours: ["it-", "ch", "be", "de-", "lu-", "es-", "UK_GB", "nl-"],
        color: colors[default_color]
    },
    "es-": {
        neighbours: ["fr-", "pt-", "it-", "tn-", "dz"],
        color: colors[default_color]
    },
    "pt-": {
        neighbours: ["es-", "ma-"],
        color: colors[default_color]
    },
    "be": {
        neighbours: ["fr-", "nl-", "de-", "lu-", "UK_GB"],
        color: colors[default_color]
    },
    "lu-": {
        neighbours: ["fr-", "de-", "be", "nl-"],
        color: colors[default_color]
    },
    "nl-": {
        neighbours: ["de-", "be", "UK_GB", "lu-", "fr-"],
        color: colors[default_color]
    },
    "UK_GB": {
        neighbours: ["fr-", "be", "nl-", "ireland", "no-", "is", "fo-", "im-"],
        color: colors[default_color]
    },
    "ireland": {
        neighbours: ["UK_GB", "is", "im-"],
        color: colors[default_color]
    },
    "dk-": {
        neighbours: ["de-", "se-", "no-"],
        color: colors[default_color]
    },
    "se-": {
        neighbours: ["de-", "dk-", "pl", "no-", "fi-"],
        color: colors[default_color]
    },
    "no-": {
        neighbours: ["dk-", "se-", "UK_GB", "is", "ru-", "fi-"],
        color: colors[default_color]
    },
    "is": {
        neighbours: ["UK_GB", "ireland", "no-", "fo-"],
        color: colors[default_color]
    },
    "ru-": {
        neighbours: ["ua-", "by", "pl", "no-", "tr", "fi-"],
        color: colors[default_color]
    },
    "lt": {
        neighbours: ["pl", "by", "ru-", "lv", "ee-"],
        color: colors[default_color]
    },
    "lv": {
        neighbours: ["by", "ru-", "lt", "ee-"],
        color: colors[default_color]
    },
    "fi-": {
        neighbours: ["se-", "ru-", "no-", "ee-"],
        color: colors[default_color]
    },
    "ge-": {
        neighbours: ["ru-", "tr", "am", "az-"],
        color: colors[default_color]
    },
    "am": {
        neighbours: ["tr", "ge-", "az-", "ir-"],
        color: colors[default_color]
    },
    "az-": {
        neighbours: ["ru-", "am", "ge-", "tr", "kz-", "ir-"],
        color: colors[default_color]
    },
    "ee-": {
        neighbours: ["ru-", "lv", "lt", "fi-"],
        color: colors[default_color]
    },
    "kz-": {
        neighbours: ["ru-", "az-"],
        color: colors[default_color]
    },
    "sy": {
        neighbours: ["tr", "cy-", "lb-", "iq"],
        color: colors[default_color]
    },
    "lb-": {
        neighbours: ["sy", "cy-", "tr"],
        color: colors[default_color]
    },
    "iq": {
        neighbours: ["sy", "tr", "ir-"],
        color: colors[default_color]
    },
    "ir-": {
        neighbours: ["az-", "am", "tr", "iq"],
        color: colors[default_color]
    },
    "fo-": {
        neighbours: ["UK_GB", "is"],
        color: colors[default_color]
    },
    "im-": {
        neighbours: ["UK_GB", "ireland"],
        color: colors[default_color]
    },
    "mt-": {
        neighbours: ["it-", "tn-"],
        color: colors[default_color]
    },
    "tn-": {
        neighbours: ["it-", "es-", "gr-", "dz", "mt-"],
        color: colors[default_color]
    },
    "dz": {
        neighbours: ["it-", "es-", "tn-", "ma-"],
        color: colors[default_color]
    },
    "ma-": {
        neighbours: ["pt-", "es-", "dz"],
        color: colors[default_color]
    },
    "sm-": {
        neighbours: ["it-"],
        color: colors[default_color]
    },
    "va-": {
        neighbours: ["it-"],
        color: colors[default_color]
    },
    "je-": {
        neighbours: ["fr-", "UK_GB"],
        color: colors[default_color]
    },
    "ad-": {
        neighbours: ["fr-", "es-"],
        color: colors[default_color]
    },
    "li-": {
        neighbours: ["at", "ch"],
        color: colors[default_color]
    },
};

// countries with exclaves
const exclaves = {
    "fr-": "path2166",
    "es-": "Spain_Ibiza",
    "no-": "path6606",
    "ee-": "Estonia_Saaremaa",
    // "ru-": "xq",
    "ua-": "xq",
};
