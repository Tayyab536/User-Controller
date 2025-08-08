import {dataBaseConnection} from  './Db/Db.js'
import { startApp } from "./app.js";
//connection for db
dataBaseConnection().then(()=>{
    startApp()
})
 