import axios, { create } from "axios";

export const scumbagAPI = create({baseURL: "https://61n2f4k9-8000.euw.devtunnels.ms"})

scumbagAPI.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("access")

        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config
    },
    (error) => {return Promise.reject(error)}
)

scumbagAPI.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if(error.response?.status == 401 && !originalRequest._retry){
            try{
                originalRequest._retry = true

                const refreshToken = localStorage.getItem("refresh")

                if(refreshToken){
                    const response = await axios.post("https://61n2f4k9-8000.euw.devtunnels.ms" + "/api/auth/token/refresh/", {
                        refresh: refreshToken
                    })

                    localStorage.setItem("access", response.data.access)
                    console.log("New access token!")
                    return scumbagAPI(originalRequest)
                }
            }catch (error){
                localStorage.removeItem("access")
                localStorage.removeItem("refresh")
                window.location.href = "/login"
            }
            
        }
    }
)