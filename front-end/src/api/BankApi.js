
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

    getBalance: async(userData) => {
        const URI = BankApi.URL + "/balance?id=" + userData.id
        const response = await fetch(URI, {
            method: "GET",
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },

    getAccountInformation: async (userData) => {
        const URI = BankApi.URL + "/customerInfo?id=" + userData.id
        const response = await fetch(URI, {
            method: "GET",
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        const balanceData = await BankApi.getBalance(userData)
        
        return {
            id: userData.id,
            name: response.name,
            email: response.email,
            phone: response.phone,
            balance: balanceData.balance,
        }

    }
}

export default BankApi