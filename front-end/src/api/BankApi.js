
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

    getTransactions: async(userData) => {
        const URI = BankApi.URL + "/recentTransactions?id=" + userData.id
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
        const transactionData = await BankApi.getTransactions(userData)
        // console.log(transactionData)
        
        return {
            id: userData.id,
            name: response.name,
            email: response.email,
            phone: response.phone,
            balance: balanceData.balance,
            transactions: transactionData
        }
    },

    deposit: async(depositData) => {
        const URI = BankApi.URL + "/deposit?id=" + depositData.id + "&amount=" + depositData.amount
        const response = await fetch(URI, {
            method: "POST",
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },

    withdraw: async(withdrawData) => {
        const URI = BankApi.URL + "/withdraw?id=" + withdrawData.id + "&amount=" + withdrawData.amount
        const response = await fetch(URI, {
            method: "POST",
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },

    transfer: async(transferData) => {
        const URI = BankApi.URL + 
            "/transfer?userAccountId=" + transferData.userAccountId + 
            "&otherAccountId=" + transferData.otherAccountId + 
            "&amount=" + transferData.amount
        const response = await fetch(URI, {
            method: "POST",
            mode: "cors"
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return response
    },
}

export default BankApi