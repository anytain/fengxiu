class CartItem {
    skuId = null
    count = 0
    sku = null
    checked = true

    constructor(sku, count) {
        this.skuId = sku.id;
        this.count = count;
        this.sku = sku;
    }
}

export {
    CartItem
}