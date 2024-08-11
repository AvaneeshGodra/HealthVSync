import axios from "axios";

export const networkOperations={
    async get(){
        try{
 
        }
        catch(err){
            throw err;
        }

    },
    async post(URL,data){
        try{
            const response= await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
        
    },
    put(){

    },
    remove(){

    }
}