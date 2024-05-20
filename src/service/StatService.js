import { request } from '../AxiosHelper';
import { jwtDecode } from "jwt-decode";

class StatService{


    popularDestination() {
        return request('GET', 'http://localhost:9092/stat/pop_dest', {Authorization : localStorage.getItem('token')})
        .then(response => response.data)
        .then(response => {
            console.log("HOLAAA");
            return response;
        });
    }
}
export default new StatService();