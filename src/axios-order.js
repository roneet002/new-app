import axios from  'axios'


const instance = axios.create({

baseURL : 'https://react-my-burger-5c5b9.firebaseio.com/'

})

export default instance