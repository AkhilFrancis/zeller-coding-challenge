import { PricingRule } from "../types/pricingRule";
import { Product } from "../types/product";
import { DiscountStrategy } from "./interface/discountStrategyInterface";

export class BulkDiscountStrategy implements DiscountStrategy {
  applyDiscount(product: Product, quantity: number, rule: PricingRule): number {
    return quantity > rule.threshold ? rule.discountValue * quantity : product.price * quantity;
  }
}