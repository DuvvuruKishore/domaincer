import axios from 'axios';

const instance=axios.create({
    baseURL:"https://domaincerr.herokuapp.com"
})

export const signIn=(formData)=>instance.post('/user/signin',formData);
export const signUp=(formData)=>instance.post('/user/signup',formData);
export default instance;