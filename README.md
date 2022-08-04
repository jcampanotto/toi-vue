
# Tap On It Take Home Project

## Overview

Thanks for the fun project!
Link to the frontend: https://vocal-chimera-d09863.netlify.app/#/
Link to the API: https://tap-vue-db.herokuapp.com/

### Backend
- API built with Express and launched seperate from the frontend on Heroku
	- This created a lot of configuration issues I wasn't expecting
- Database is a MySQL database also running on Heroku

 #### The API is pretty straightforward.
 - GET "/" gets all the products in the database
 - GET "/:id" gets product with :id
 - POST "/:id" adds a like 
 - DELETE "/:id" removes a like
	 - I had CORS issues with this that I couldn't solve in time so the API route / database updating works but it's disabled on the frontend

#### Code
- The API is at `backend > app.js`
- The SQL setup script is at `backend > script.sql`

### Frontend
- I learned Vue 2 and built the frontend with it for this project. I had some React background so some of it was easy to pick up
- Started the project with the Vue CLI
- I used Vue Router 3 for routing
- For styling I used Tailwind and Daisy UI
- Deployed to Netlify
#### Code
- All the code is in `frontend > src` folder
