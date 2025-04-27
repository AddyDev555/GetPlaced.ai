const BASE_URL = "http://127.0.0.1:5000";

const backendApi = {
    get: async (endpoint) => {
        try {
            console.log("GET:", `${BASE_URL}${endpoint}`);
            const res = await fetch(`${BASE_URL}${endpoint}`);
            return await res.json();
        } catch (err) {
            console.error("API Error:", err);
            return null;
        }
    },


    post: async (endpoint, data) => {
        try {
            const res = await fetch(`${BASE_URL}${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            return await res.json();
        } catch (err) {
            console.error(err);
            return null;
        }
    },
};

export default backendApi;
