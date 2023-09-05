export type ProductOrder = {
    id?: string;
    dateOfOrder?: Date;
    productName?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    customerAddress?: string;
    weight?: string;
    quantity?: number;
    messageOnProduct?: string;
    productPrice?:number;
    totalPrice?:number;
}