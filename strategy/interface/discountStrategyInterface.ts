import { PricingRule } from "../../types/pricingRule";
import { Product } from "../../types/product";

export interface DiscountStrategy {
  applyDiscount(product: Product, quantity: number, rule: PricingRule): number;
}