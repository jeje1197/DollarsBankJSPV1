
const BankApi = {
    URL: "http://localhost:8080/DollarsBankJSPV1",

    register: async (registrationData) => {
        const URI = BankApi.URL + "/register"
        const response = await fetch(URI, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(registrationData),
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },

    login: async (loginData) => {
        const URI = BankApi.URL + "/login"
        const response = await fetch(URI, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },

    getBalance: async(accountId) => {
        const URI = BankApi.URL + "/balance?id=" + accountId
        const response = await fetch(URI, {
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    }
}

export default BankApi