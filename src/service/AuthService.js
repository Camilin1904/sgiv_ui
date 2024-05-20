import { request } from '../AxiosHelper';
import { jwtDecode } from "jwt-decode";

class AuthService{


    login(username, password) {
        console.log(username);
        console.log(password);
        return request('POST', 'http://localhost:9092/auth/login', {"username":username,"password":password})
        .then(response => response.data)
        .then(response => {
            try{
            const loginResponse = JSON.parse(response);
            const token = loginResponse.token;
            const decodedToken = jwtDecode(token);
            const type = decodedToken.Authorities[0].name;
            localStorage.setItem("username",username);
            localStorage.setItem("token",token);
                return type;
            } catch(error){
                alert("Nombre de usuario o constraseña incorrectos");
            } 
        });
    }
}
export default new AuthService();