
export class UploadResponse{
public action:boolean;
public iname:String;
}
export class Cart{
    public product:Product;
    public customer:User;
    public quantity:number;
}

export class Product {
    public id:number;
    public productId:string;
    public  productName:string;
    public  category:string;
    public  oldPrice:number;
    public  newPrice:number;
    public  costPrice:number;
    public  quantity:number;
    public  details:string;
    public  review:number;
    public  image:string;

}

export class User{
    public id:number;
    public  customerId:string;
    public  customerName:string;
    public  contactNo:string;
    public  email:string;   
}