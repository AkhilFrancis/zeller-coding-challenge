import { products } from "./data";
import { DiscountStrategyFactory } from "./factory/discountStrategyFactory";
import { ICheckout } from "./interface/checkoutInferface";
import { PricingRule } from "./types/pricingRule";
import { Product } from "./types/product";

export class Checkout implements ICheckout {
  private cart: Product[] = [];
  private rules: PricingRule[];

  constructor(rules: PricingRule[]) {
    this.rules = rules;
  }

  scan(itemSku: string): void {
    const product = products.find(product => product.sku === itemSku);
    if (product) {
      this.cart.push(product);
    } else {
      console.error('Product not found');
    }
  }

  total(): number {
    let total = 0;
    const cartSummary = this.cart.reduce((acc, item) => {
      acc[item.sku] = (acc[item.sku] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    for (const [sku, quantity] of Object.entries(cartSummary)) {
      const product = this.cart.filter(product => product.sku === sku);
      const rule = this.rules.find(rule => rule.sku === sku);
      if (!product.length || !rule) continue;

      const strategy = DiscountStrategyFactory.getStrategy(rule.discountType);
      total += strategy.applyDiscount(product, quantity, rule);
    }

    return total;
  }
}