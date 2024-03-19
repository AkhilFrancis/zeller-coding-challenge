import { Checkout } from "./checkout";
import { pricingRules } from "./data";

const co = new Checkout(pricingRules);
co.scan('atv');
co.scan('atv');
co.scan('atv');
co.scan('vga');
console.log(co.total());

const co2 = new Checkout(pricingRules);
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('atv');
co2.scan('ipd');
co2.scan('ipd');
co2.scan('ipd');
console.log(co2.total());