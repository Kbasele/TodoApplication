//import FetchHelper from '../utils/FetchHelper'
const baseUrl = "http://localhost:3000"
const getToken = () => localStorage.getItem("token")

export default class FetchKit{

    static loginFetch = (formData) => 
        fetch(`${baseUrl}/user/login`, {
            method: 'POST', 
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData)
          })

    static getUserFetch = () => 
      fetch(`${baseUrl}/user`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getToken()}`,
      }
    })

    static getTasksFetch = () => 
      fetch(`${baseUrl}/task`, {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getToken()}`,
      }
    })
    
    static editTasksFetch = (formData, id) => 
      fetch(`${baseUrl}/task/${id}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getToken()}`,
      },
      body: JSON.stringify(formData)

    })
    static deleteTaskFetch = (id) => 
      fetch(`${baseUrl}/task/${id}`, {
        method: "Delete", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getToken()}`,
      },

    })
    static createTasksFetch = (formData) => 
      fetch(`${baseUrl}/task`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          Authorization: `${getToken()}`,
      },
      body: JSON.stringify(formData)

    })
}

