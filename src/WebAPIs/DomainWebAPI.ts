import Domain from "../Models/Domain"
import AdminWebAPI from "./AdminWebAPI"
import WebAPI from "./WebAPI"


type DomainWebAPIMethods = "/api/domain-getall" | "/api/domain-get/" 
type DomainAdminWebAPIMethods = "/api/domain-add" | "/api/domain-delete/"

export const DomainWebAPI = {
    GetAll:async() => (await WebAPI.get(<DomainWebAPIMethods>"/api/domain-getall")).data as Domain[],
    Get:async(domainName:string)=>{
        const url = `${<DomainWebAPIMethods>"/api/domain-get/"}${encodeURI(domainName)}`
        return (await WebAPI.get(<DomainWebAPIMethods>"/api/domain-get/")).data as Domain
    }
}

export const DomainAdminWebAPI = {
    Add: async(domain:Domain)=>await AdminWebAPI.Get().post(<DomainAdminWebAPIMethods>"/api/domain-add",domain),
    Delete:async(domainName:string) => {
        const url = `${<DomainAdminWebAPIMethods>"/api/domain-delete"}${encodeURI(domainName)}`
        await AdminWebAPI.Get().delete(url)
    }
}