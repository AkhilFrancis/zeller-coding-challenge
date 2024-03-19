import { DISCOUNT_TYPE } from "../enum";
import { BulkDiscountStrategy } from "../strategy/bulkDiscountStrategy";
import { DiscountStrategy } from "../strategy/interface/discountStrategyInterface";
import { XForYDealStrategy } from "../strategy/xForYDiscountStrategy";

export class DiscountStrategyFactory {
  static getStrategy(discountType: DISCOUNT_TYPE): DiscountStrategy {
    switch (discountType) {
      case DISCOUNT_TYPE.BULK_DISCOUNT:
        return new BulkDiscountStrategy();
      case DISCOUNT_TYPE.X_FOR_Y_DEAL:
        return new XForYDealStrategy();
      default:
        throw new Error("Unsupported discount type");
    }
  }
}