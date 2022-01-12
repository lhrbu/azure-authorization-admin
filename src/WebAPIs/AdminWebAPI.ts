import WebAPI from "./WebAPI";

function SetAccessToken(accessToken:string)
{ window.localStorage.setItem("X-AccessToken-Base64",accessToken)}

function Get()
{
    const accessToken = window.localStorage.getItem("X-AccessToken-Base64")
    if(accessToken){
        WebAPI.defaults.headers.common["X-AccessToken-Base64"] = accessToken
    }
    return WebAPI;
}

const AdminWebAPI = {
    SetAccessToken,Get
}

export default AdminWebAPI