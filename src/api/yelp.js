import axios from 'axios';


export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:
            'Bearer 74VhDnNL9uyFw-JuR76wYa_ObJW9IdJ7dTMBEr3TsKV9a8ij1gXNOqlPW57N4ZjJY97E0-33TvWTI9M-zW8gdUoyL5MJzoOhgAphM_iFF9LVN7AlzLgcFdwMVwLLXnYx'
    }
});
