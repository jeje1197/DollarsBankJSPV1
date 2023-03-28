
const BankApi = {
    URL: "https://localhost:8080/DollarsBankJSPV1",
    register: async (registrationData) => {
        const success = await fetch(BankApi.URL + "/register" + new URLSearchParams(registrationData), {
            method: "POST",
            body: JSON.stringify(registrationData),
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .catch(error => {
            console.error(error)
        })

        return success
    },

    login: async (loginData) => {
        console.log("Login API:", loginData)
    },

    getBalance: async(accountId) => {

    }
}

export default BankApi