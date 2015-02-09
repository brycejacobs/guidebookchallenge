## Guidebook Challenge

For the Guidebook Challenge the task was to complete build a autocompleter that uses the 
Guidebook Public Search API for showing results. Whenever a user enters input, the app
should take the input and perform a query to the API to show results. 

## Angular.JS
The SPA framework of choice for this project was Angular.JS, for it's ease of use whenever 
needing to modify a view. Whenever the user enters any input, the Angular application queries
a simple node server that in turn queries the search API. The node server is necessary since the 
API doesn't support JSONP or have the proper response headers for a CORS request.
