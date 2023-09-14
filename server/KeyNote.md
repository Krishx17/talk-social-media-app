# Technologies used ==> 
nodemon 
express 
body-parser --> to process the request body
bcrypt --> for password encryption
cors --> cross origin request
dotenv --> for environment variables
gridfs-stream --> for file upload
multer, multer-gridfs-storage --> to upload the files locally
helmet --> for request safety 
morgan --> for login 
jsonwebtoken --> for web token
mongoose --> mongoose for mongodb access

# Package.json customization -->
/**using this to so that we can use import statements instead of reqd. statements**/
  "type": "module",

# IP access list in MongoDB --> 
Ip access list in MongoDB allows only those users to access clusters whose IP is registered in the access list.

collection : contains the database's and the data on those database's
Network & User access : allows user to specify the users that can access the db.

/*backend running on port 3001*/

# Authentication & Authorization -->
the process of registering and logging in is know as ==> Authentication
the process of verifying whether a user is logged in so that you can perform certain ops is known as => Autorization

# HTTPS Status Code 201 (Created) -->
Usually, the 201 status code is returned in response to a POST request. A POST request is used to submit data to a server to create a new resource. The 201 status code indicates that the server has successfully processed the request, the new resource has been created and is now ready for interaction.

# Status Code 500 (Internal Server Error) --> 
The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. This error response is a generic "catch-all" response.

# Status Code 400 (Bad Request) -->
The HyperText Transfer Protocol (HTTP) 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (for example, malformed request syntax, invalid request message framing, or deceptive request routing).

# Status Code 403 (Forbidden) -->
The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize it. This status is similar to 401 , but for the 403 Forbidden status code, re-authenticating makes no difference. The access is tied to the application logic, such as insufficient rights to a resource.    

# Status Code 409 (Conflict) -->
HTTP 409 error status: The HTTP 409 status code (Conflict) indicates that the request could not be processed because of conflict in the request, such as the requested resource is not in the expected state, or the result of processing the request would create a conflict within the resource.

# Logic Behind encryption --> 
/*so the logic behind encrypting password is whenever the user signs-up 
with the password, the password then is going to be hashed using salt generated from the bcrypt
and then when the user tries to login, the entered password will be hashed again and will be matched against
the stored hashedPassword, if matched user will be provided with the jwt token to login */

# user login password --> hash(password, salt) --> login, password --> if(hash(password,salt) == hashedPassword) --> provide jwt token.

# An API End-Point --> 
In summary, an API endpoint is a specific location within an API that accepts requests and sends back responses. It's a way for different systems and applications to communicate with each other, by sending and receiving information and instructions via the endpoint

# async await promises -->
# Data modelling

