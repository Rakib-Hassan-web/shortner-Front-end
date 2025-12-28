import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/",
      withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});




// 👉 Request Interceptor (token add করার জন্য)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


const AuthServices = {

    login: async (LoginDAta) => {
        const res = await api.post("/auth/login", LoginDAta);
        return res.data;
    },
    registration: async (RegisterData) => {
        const res = await api.post("/auth/registration", RegisterData);
        return res.data;
    },
    getprofile: async () => {
        const res = await api.post("/auth/getprofile", );
        return res.data;
    }
      
    }



const Urservices = {

    createshort: async (LongUrl) => {
        const res = await api.post("/url/create", { LongUrl});
        return res.data;

    },

     getall: async () => {
        const res = await api.get("/url/getall");
        return res.data;

    }


}


export {AuthServices,Urservices}