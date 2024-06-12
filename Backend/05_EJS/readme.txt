All the static files must be placed in public and template files like ejs must be stored in views  (as ejs takes views by default)

res.send('direct html code')
res.sendFile("path for html code")

res.render("path for template files (such as ejs or pug)" , data)  in this data must be of javascript object format not JSON 


note that you cannot use sendFile for template files as they are dynamic we need to use render

if you are running the parsed data outside the ejs tags in the ejs file then use locals.data in  order to access the data

if you use res.redirect()  then use routes 

if you are getting the error of data is not defined then you always declare the parsing variable outside the app.post() method