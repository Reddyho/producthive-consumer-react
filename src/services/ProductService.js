import axios from 'axios';

const PRODUCTS_RESTAPI_URL='http://localhost:8088/producthive/api/products';

//service layer intacting with product REST-API of spring boot using axious http library
class ProductService{

    static getProducts(){
            return axios.get(PRODUCTS_RESTAPI_URL);
    }

}

export default ProductService;