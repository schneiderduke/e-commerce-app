import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiService {
    getApis() {
        return {
            
                "products": "/products",
           
        }
    }
}