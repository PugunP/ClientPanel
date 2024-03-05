///Production///
// const baseURL = " URL " 

///Development///
const baseURL = "http://localhost:8080/api" 
const LOGIN_API = "/user-login";
const REGISTER_API = "/user-register";
const UPLOADIMAGE_API = "/upload-image";
const GETIMAGE_API = "/get-images"; //อย่าลืม / {userId}
export {
    baseURL,
    LOGIN_API,
    REGISTER_API,
    UPLOADIMAGE_API,
    GETIMAGE_API
}