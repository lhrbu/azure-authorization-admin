import WebAPI from "./WebAPI";

let accessToken = ""

function SetAccessToken(token:string)
{ accessToken = token;}

function Get()
{
    WebAPI.defaults.headers.common["X-AccessToken-Base64"] = accessToken
    return WebAPI;
}

const AdminWebAPI = {
    SetAccessToken,Get
}

export default AdminWebAPI