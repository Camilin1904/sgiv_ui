import { request } from '../AxiosHelper';
import { jwtDecode } from "jwt-decode";

class StatService{


    popularDestination() {
        return request('GET', 'http://localhost:9092/stat/pop_dest')
        .then(response => response.data)
        .then(response => {
            return response;
        });
    }
}
export default new StatService();