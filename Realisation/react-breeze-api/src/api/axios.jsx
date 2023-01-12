import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
});

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */
