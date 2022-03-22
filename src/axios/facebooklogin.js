import axios from 'axios';

const FacebookLogin = (accesstoken) => {

    console.log(accesstoken);
    axios
        .post('http://127.0.0.1:8000/auth/convert-token/', {
            token: accesstoken,
            backend: 'facebook',
            grant_type: 'convert_token',
            client_id: 'QIOHvvrrKZY8myXRfBO9Bx24mxs4lZevVDwxVubO',
            client_secret: 'ETbL81q4yDVHDPg757Rllzraej2jCiCaFCDFdIkHi4zPLOgiT0j0o2hIIhvUIWSXbT5vfvvz5V9iG70LkjPUHF8MeFUZDeZOo2z2LpVmvIH2gZnDXcQVU0QNbsIgsG31',
        })
        .then((res) => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
        })
        .catch(err => console.log('error: ', err));
}

export default FacebookLogin