export interface Goods {
    name: [],
    quantity: number,
    cost: number
}

export interface ActionGoods {
    mode: string
    data: string
    key: string
}

export interface SerInitialState {
    basket: Goods []
}