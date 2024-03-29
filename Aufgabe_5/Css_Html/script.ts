var africa: string = "Africa";
var asia: string = "Europe";
var australia: string = "Australia";
var europe: string = "Europe";
var northamerica: string = "Northamerica";
var southamerica: string = "Southamerica";

var africa_2008: number = 1028;
var africa_2018: number = 1235.5;
var asia_2008: number = 12954.7;
var asia_2018: number = 16274.1;
var australia_2008: number = 1993;
var australia_2018: number = 2100.5;
var europe_2008: number = 4965.7;
var europe_2018: number = 4209.3;
var northamerica_2008: number = 6600.4;
var northamerica_2018: number = 6035.6;
var southamerica_2008: number = 1132.6;
var southamerica_2018: number = 1261.5;

var wholeworld_2018 = africa_2018 + asia_2018 + australia_2018 + northamerica_2018 + southamerica_2018;

var entireWorldAfrica2018: number = africa_2018 / wholeworld_2018 * 100;
var entireWorldAsia2018: number = asia_2018 / wholeworld_2018 * 100;
var entireWorldAustralia2018: number = australia_2018 / wholeworld_2018 *100;
var entireWorldEurope2018: number = europe_2018 / wholeworld_2018 *100;
var entireWorldNorthamerica2018: number = northamerica_2018 / wholeworld_2018 *100;
var entireWorldSouthamerica2018: number = southamerica_2018 / wholeworld_2018 *100;

var Africa2008_2018: number = (africa_2018 - africa_2008) / africa_2008 *100;
var Asia2008_2018: number = (asia_2018 - asia_2008) / asia_2008 *100;
var Australia2008_2018:number = (australia_2018 - australia_2008) / australia_2008 *100;
var Europe2008_2018: number = (europe_2018 - europe_2008) / europe_2008 *100;
var Northamerica2008_2018: number = (northamerica_2018 - northamerica_2008) / northamerica_2008 *100;
var Southamerica2008_2018: number = (southamerica_2018 - southamerica_2008) / southamerica_2008 *100;

var Africa_2018_2008_vgl: number = (africa_2018 - africa_2008);
var Asia_2018_2008_vgl: number = (asia_2018 - asia_2008);
var Australia_2018_2008_vgl: number = (australia_2018 - australia_2008);
var Europe_2018_2008_vgl: number = (europe_2018 - europe_2008);
var Northamerica_2018_2008_vgl: number = (northamerica_2018 - northamerica_2008);
var Southamerica_2018_2008_vgl: number = (southamerica_2018 - southamerica_2008);

console.log("Die Emission von " + africa  + " ist " + Math.round(africa_2018 * 100) / 100 + " kg CO2" );
console.log("Die Emission von " + asia + " ist " + Math.round(asia_2018 * 100) / 100 + " kg CO2" );
console.log("Die Emission von " + australia + " ist " + Math.round(australia_2018 * 100) / 100 + " kg CO2" );
console.log("Die Emission von " + europe + " ist " + Math.round(europe_2018 * 100) / 100 + " kg CO2" );
console.log("Die Emission von " + northamerica + " ist " + Math.round(northamerica_2018 * 100) / 100 + " kg CO2" );
console.log("Die Emission von " + southamerica + " ist " + Math.round(southamerica_2018 * 100) / 100 + " kg CO2" );


console.log("Relativ zur Gesamtemission der Welt verursacht " + africa + " damit " + Math.round(entireWorldAfrica2018 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + asia + " damit " + Math.round(entireWorldAsia2018 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + australia + " damit " + Math.round(entireWorldAustralia2018 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + europe + " damit " + Math.round(entireWorldEurope2018 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + northamerica + " damit " + Math.round(entireWorldNorthamerica2018 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + southamerica + " damit " + Math.round(entireWorldSouthamerica2018 * 100) / 100 + " %");



console.log("Für " + africa +  " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(Africa2008_2018 * 100) / 100 + " % verändert");
console.log("Für " + asia +  " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(Asia2008_2018 * 100) / 100 + " % verändert");
console.log("Für " + australia +  " hat sich 2018 im Vergleich zu 2008 die Emission um " +  Math.round(Australia2008_2018 * 100) / 100 + " % verändert");
console.log("Für " + europe +  " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(Europe2008_2018 * 100) / 100 + " % verändert");
console.log("Für " + northamerica +  " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(Northamerica2008_2018 * 100) / 100 + " % verändert");
console.log("Für " + southamerica +  " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(Southamerica2008_2018 * 100) / 100 + " % verändert");


console.log("Für " + africa + " 2018 im Vergleich zu 2008 sind das " + Math.round(Africa_2018_2008_vgl * 100) / 100 + " kg CO2");
console.log("Für " + asia + " 2018 im Vergleich zu 2008 sind das " + Math.round(Asia_2018_2008_vgl * 100) / 100 + " kg CO2");
console.log("Für " + australia + " 2018 im Vergleich zu 2008 sind das " + Math.round(Australia_2018_2008_vgl * 100) / 100 + " kg CO2");
console.log("Für " + europe + " 2018 im Vergleich zu 2008 sind das " + Math.round(Europe_2018_2008_vgl * 100) / 100 + " kg CO2");
console.log("Für " + northamerica + " 2018 im Vergleich zu 2008 sind das " + Math.round(Northamerica_2018_2008_vgl * 100) / 100 + " kg CO2");
console.log("Für " + southamerica + " 2018 im Vergleich zu 2008 sind das " + Math.round(Southamerica_2018_2008_vgl * 100) / 100 + " kg CO2");














