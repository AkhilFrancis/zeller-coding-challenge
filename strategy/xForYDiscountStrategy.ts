import { PricingRule } from "../types/pricingRule";
import { Product } from "../types/product";
import { DiscountStrategy } from "./interface/discountStrategyInterface";

export class XForYDealStrategy implements DiscountStrategy {
  applyDiscount(products: Product[], quantity: number, rule: PricingRule): number {
    const freeItems = Math.floor(quantity / rule.threshold) * (rule.threshold - rule.discountValue);
    return products[0].price * (quantity - freeItems);
  }
}