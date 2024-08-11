import mongoose from "mongoose";
import URL from './models/variable.js'
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('Db Connected . .');
}).catch(err=>{
    
    console.log(err);
})
export default mongoose;