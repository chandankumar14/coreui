export interface PRODUCT {
    _id: string,
    productName: string,
    productSize: string,
    skuCode: string,
    quantity: string,
    price: string,
    inStock: true,
    modelFrontShot: string,
    modelRightSideShot: string,
    modelLeftSideShot: string,
    modelBackSideShot: string,
    modelAngle45Shot: string,
    productDescription: string,
    categoryId: string,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string
}

export interface ORDER {

}

export interface PAYMENTS {

}
export interface CATEGORY {
    _id: string,
    categoryBanner1: string,
    categoryId: string,
    categoryLayout: string,
    categoryName: string,
    isDeleted: boolean,
    createdAt: string,
    updatedAt: string
}

export interface RESPONSE {
    code: number,
    message:string,
    data:any
}