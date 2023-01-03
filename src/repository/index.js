import axios from "axios";

const connection = {
  URL: "https://http-nodejs-production-6360.up.railway.app",
};

// const getData = () => {
//   return axios.get(Connection.URL + "/users");
// };

// const getDataById = () => {
//     return axios.get(Connection.URL + "/users");
//   };

const methodList={
    getData: () => axios.get(connection.URL + "/users"),
    postData: (data) => axios.post(connection.URL + "/user",data),
    getDataById: (id) => axios.get(connection.URL + `/user/${id}`)
}


export const repositoryMethod = {
 methodList
}
