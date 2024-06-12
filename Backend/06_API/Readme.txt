The Promise object represents the eventual completion (or failure) of an asynchronous operation and its
resulting value.


API is a set of rules and protocols which bridges the communication between the different softwares 

An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information. APIs are used to enable the integration of different systems, allowing them to access and utilize the functionalities and services provided by other software components, platforms, or services. This can include web APIs for web services, libraries for local applications, or any other form of structured communication between software entities.




API Architectures:

Graphql
restapi (used for Web Dev) uses HTTP protocols 
soap
gRPC




This all comes under API structuring 

Query parameters are added after the endpoint with the symbol ? and multiple query params are added using & sybmol between them 
you can also provide > , < query params





Path parameters: (mostly unique)

Path parameters are variables embedded directly within the URL path of a request in a web API. They are used to identify specific resources or objects that the API will interact with. Unlike query parameters, which appear after a question mark (?) in the URL, path parameters are part of the URL structure itself and typically follow a predefined format.

For example, in the URL https://api.example.com/users/123, 123 is a path parameter that identifies a specific user.



JSON vs JS objects

the main difference between JSON and JS objects is the key, ie( the key in the JSON is only string (not int or other datatypes) and the key in the JS objects either be string or not) 

Comments are not permitted in JSON  
in JSON '' is not allowed
all datatypes are allowed in values in JSON 

For flat packing: (converting Js object to JSON)

JSON.stringify(js_obj_data)

for unpacking: (converting JSON to Js object)

JSON.parse(json_data)




Axios:  (here brackets represents optional params  , data represents body of the form)

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])




Authentication: 

no Authentication
basic Authentication    --- base 64 encoding (user name and passw)
API Key Authorisation
Token based Authentication


Pagination is a process used in web development and database management to divide content into discrete pages, making it easier to navigate large amounts of information.

