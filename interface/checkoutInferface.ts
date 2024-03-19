export interface ICheckout {
    scan(sku: string): void,
    total(): number,
}