import axios from "axios";
export default axios.create({
    baseURL: "https://loaclhost:8080/api",
    headers: {
        "Content-type":"application/json"
}
});