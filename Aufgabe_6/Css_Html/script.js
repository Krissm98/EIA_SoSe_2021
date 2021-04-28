var Aufgabe_6;
(function (Aufgabe_6) {
    var africa = "Africa";
    var asia = "Asia";
    var australia = "Australia";
    var europe = "Europe";
    var northamerica = "Northamerica";
    var southamerica = "Southamerica";
    var africa_2008 = 1028;
    var africa_2018 = 1235.5;
    var asia_2008 = 12954.7;
    var asia_2018 = 16274.1;
    var australia_2008 = 1993;
    var australia_2018 = 2100.5;
    var europe_2008 = 4965.7;
    var europe_2018 = 4209.3;
    var northamerica_2008 = 6600.4;
    var northamerica_2018 = 6035.6;
    var southamerica_2008 = 1132.6;
    var southamerica_2018 = 1261.5;
    var wholeworld_2018 = europe_2018 + africa_2018 + asia_2018 + australia_2018 + northamerica_2018 + southamerica_2018;
    window.addEventListener("load", function () {
        document.querySelector(".europe").addEventListener("click", function () { emissions(europe, europe_2018, europe_2008); });
        document.querySelector(".northamerica").addEventListener("click", function () { emissions(northamerica, northamerica_2018, northamerica_2008); });
        document.querySelector(".southamerica").addEventListener("click", function () { emissions(southamerica, southamerica_2018, southamerica_2008); });
        document.querySelector(".africa").addEventListener("click", function () { emissions(africa, africa_2018, africa_2008); });
        document.querySelector(".asia").addEventListener("click", function () { emissions(asia, asia_2018, asia_2008); });
        document.querySelector(".australia").addEventListener("click", function () { emissions(australia, australia_2018, australia_2008); });
        function emissions(continentName, continentValue2018, continentValue2008) {
            document.querySelector("#regionName").innerHTML = continentName;
            document.querySelector("#absoluteEmission").innerHTML = continentName;
            document.querySelector("#absoluteEmissionNr").innerHTML = continentValue2018.toString();
            document.querySelector("#relativeToWorld").innerHTML = Math.round(continentValue2018 / wholeworld_2018 * 100 * 100) / 100 + "%";
            document.querySelector("#growthRate").innerHTML = Math.round((continentValue2018 - continentValue2008) / continentValue2008 * 100 * 100) / 100 + "%";
            document.querySelector("#growthRateAbs").innerHTML = Math.round(((continentValue2018 - continentValue2008) * 100) / 100).toString();
            document.querySelector(".chart").setAttribute("style", "height:" + (continentValue2018 / wholeworld_2018) * 100 + "%");
        }
    });
})(Aufgabe_6 || (Aufgabe_6 = {}));
//# sourceMappingURL=script.js.map