export interface Goods {
    id: string,
    name: string,
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