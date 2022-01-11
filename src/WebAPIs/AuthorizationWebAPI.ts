import SensitiveData from "../Models/SensitiveData";
import WebAPI from "./WebAPI";

export const AuthorizationWebAPI = 
{
    Validate:async(sensitiveData:SensitiveData)=>await WebAPI.post("/api/authorization-validate",sensitiveData)
}