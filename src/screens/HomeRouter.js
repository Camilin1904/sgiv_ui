import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function RouteHome(){

    const token = localStorage.getItem('token')
    const decodedToken = jwtDecode(token)

    console.log(decodedToken)
    
    switch(decodedToken.Authorities[0].name){
        case 'Admin':
            return '/home-admin'
        case 'Sales':
            return '/home-sales'
        case 'Viewer':
            return '/home-viewer'
        default:
            return '/'
    }

}

export { RouteHome }