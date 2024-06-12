import express from "express";
import axios from "axios";
import { render } from "ejs";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "rohith";
const yourPassword = "rohith123";
const yourAPIKey = "98787d7e-22e0-43d9-b71f-4e36d518c6f4";
const yourBearerToken = "Bearer 44894434-866d-416e-8c9b-3d695fae7e75";   //  be carefull that you should also write Bearer in the token also 

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", (req, res) => {

  callApi()


  async function callApi() {
    try {
      let response = await axios.get("https://secrets-api.appbrewery.com/random")
      let jsobj = response.data

      // js obj to json

      let json_data = JSON.stringify(jsobj)

      res.render("index.ejs", { content: json_data })
    }

    catch (error) {
      console.error(error.message)
    }
  }

  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", (req, res) => {

  const callApi = async function () {

    try {
      const response = await axios.get('https://secrets-api.appbrewery.com/all?page=1', {
        auth: {
          username: yourUsername,
          password: yourPassword
        }
      })
      let json_data = JSON.stringify(response.data)
      res.render("index.ejs", { content: json_data })
    }
    catch (error) {
      console.error(error.message)
    }

  }

  callApi()

});

app.get("/apiKey", (req, res) => {

  callApi()


  async function callApi() {
    try {
      const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score<=7&apiKey=${yourAPIKey}`);

      let some = response.data
      let json_data = JSON.stringify(some)

      res.render("index.ejs", { content: json_data })
    }
    catch (error) {

      console.error(error.message);
      // res.status(500).send("this is an error written for some fun")
    }
  }

  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", (req, res) => {

  callApi()

  async function callApi() {
    try {

      const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
        headers: {
          Authorization: yourBearerToken
        }
      })

      let json_data = JSON.stringify(response.data)
      res.render("index.ejs", { content: json_data })

    } catch (error) {
      console.error(error.message)
    }
  }









  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});















//  you can also write like this 

// app.get("/apiKey", (req, res) => {
//   async function callApi() {
//     try {
//       const response = await axios.get(`${API_URL}/filter`, {
//         params: {
//           score: 5,
//           apiKey: yourAPIKey
//         }
//       });
//       let json_data = JSON.stringify(response.data);
//       res.render("index.ejs", { content: json_data });
//     } catch (error) {
//       console.error(error.message);
//     }
//   }

//   callApi();
// });