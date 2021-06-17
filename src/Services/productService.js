import axios from "axios";


export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getAll")
    }

    //metodu aynı isimde kullan
    findById(productId){
        return axios.get("http://localhost:8080/api/products/findById?productId=" + productId)
    }
}