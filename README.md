# dotnetproject-team7_dotnetproject

## Deployment to Netlify
[https://peaceful-visvesvaraya-addbcc.netlify.app/](https://peaceful-visvesvaraya-addbcc.netlify.app/)

### App Description

Korflix is the go-to resource for K drama fans. Users -- predominantly people who like Korean dramas but are looking for more resources / suggestions -- can sign up, post ratings and find shows from an ever-growing list. Basic functionality will support ratings, with written reviews being a stretch goal.

### Installation Instructions

The app can be run locally on your machine to test functionality and changes before they are deployed. 

### Frontend-specific
- clone this repository
```git clone https://github.com/BCIT-SSD-2020-21/dotnetproject-team7_dotnetproject``` 
- install necessary packages
```npm install```
- run React app
```npm start```

### Backend-specific
Please refer to the [backend repository](https://github.com/BCIT-SSD-2020-21/dotnetproject-team7_dotnetproject_backend/) for instructions on how to work with the backend. Once the backend is running in Visual Studio, the frontend will be able to receive data from it. Optionally, the backend can be deployed to Azure and the frontend via Netlify. 

You will require an API key for querying the TMDB database. Please apply for one following the instructions at this URL:
https://www.themoviedb.org/documentation/api

### Requirements

#### Functional

##### Backend

-   Authentication (login, sign up etc.)
-   Rating capability
-   Database
    -   Static list of series / shows to populate page
    -   CRUD capability (update: add ratings)

##### Frontend

-   K drama fans can sign up on the site and submit user ratings
-   Users can find titles from a selection of K dramas

#### Non-functional

##### Backend

-   Query _The Movie DB API_ as dynamic data source
-   Review capability
-   Alter ratings / reviews / favourites

##### Frontend

-   Review input form
-   Add to favourites (heart button)

### Feature list

#### Must have

-   Sign up / login forms with validation
-   Home page with all dramas (popular, featured director, recent)
-   Featured view once they click on one show
-   Rating capability (default is not yet rated)
-   Search function (search in title, director, cast, overview)

#### Nice to have

-   Filters
-   Suggestions (similar shows)
-   Preview videos / trailers
-   Expose API to external developers

### Prototype

![](https://i.imgur.com/XSzibOl.jpg)

### ERD

![](https://i.imgur.com/gzF192B.png)





