//import FetchHelper from '../utils/FetchHelper'

export default class FetchKit{
    constructor(baseUrl){
        this.baseUrl = "http://localhost:3000"
    }

    static loginFetch = (formData) => 
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST', 
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData)
          })

}