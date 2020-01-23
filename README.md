## DevFinder backend

First of all, clone this repository to your machine and go inside the application folder to run a few starter commands.

Before start runnig this project, we need to setup some development variables. Inside the main folder of the project just copy the `.env.example` file content to a new file and name it as: `.env`.

Now replace the `MONGO_URI` value with your personal mongodb url inside your new `.env` file.

In the project directory, you can run the commands below to build and run the app in development mode (make sure you have `yarn` installed in your machine):

### `yarn`

Builds all the app dependencies.<br />

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3333](http://localhost:3333) to view it in the browser and to consume the rest api.

## The routes are:

### GET: "/devs"

Returns an array os devs stored in your database.

### POST: "/devs"

Sending a body object passing the following dev data: github_username, techs, latitude, longitude.

### GET: "/search"

Sending the search data as query params: latitude, longitude, techs. And returns an array of devs near to the location that are interested in the techs searched.

Hope you all enjoy it!

Any trouble running the project, call me in `LinkedIn`: [linkedin.com/in/antonio-mesquita-b51aa6183](http://linkedin.com/in/antonio-mesquita-b51aa6183)
