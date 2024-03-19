import { DISCOUNT_TYPE } from "../enum";

export type PricingRule = {
    sku: string;
    discountType: DISCOUNT_TYPE;
    threshold: number;
    discountValue: number;
};