import { DISCOUNT_TYPE } from "../enum";
import { PricingRule } from "../types/pricingRule";
import { Product } from "../types/product";

export const products: Product[] = [
    { sku: 'ipd', name: 'Super iPad', price: 549.99 },
    { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
    { sku: 'atv', name: 'Apple TV', price: 109.50 },
    { sku: 'vga', name: 'VGA adapter', price: 30.00 },
];

export const pricingRules: PricingRule[] = [
    { sku: 'atv', discountType: DISCOUNT_TYPE.X_FOR_Y_DEAL, threshold: 3, discountValue: 2 },
    { sku: 'ipd', discountType: DISCOUNT_TYPE.BULK_DISCOUNT, threshold: 4, discountValue: 499.99 },
];