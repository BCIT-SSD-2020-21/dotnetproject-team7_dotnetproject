# dotnetproject-team7_dotnetproject

## Work-in-progress-readme

## Requirements for documentation (taken from Phil's repo)

-   _App Description_
    Short non-technical "elevator pitch"
-   _Installation Instructions_
    Instruction for if you were to sign over the repo to an other development team, what steps would need to be taken to test the app locally. Ex. Names of Environment Variables/User Secrets, list of third party accounts that require membership, tools/scripts/commands that need to be run, etc.
-   _Requirements List_
    Functional and Non-Functional Requirements
-   _Feature List_
    Prioritized list of "must have" and "nice to have" features
-   _Prototypes_
    A prototype (or prototypes) that mock out the layout and flow of each of your app features. Start with "must have" and if your team gets to "nice to have" then you can add/update the prototype(s) on a case by case basis.
-   _ERD_
    An ERD that accurately represents your database structure. Update the entities, attributes and relationships as you go.

## IDEAS

-   Aiden: COVID-19 stats API
-   Tilman: K-Drama movie API, with rating endpoint (+ comments?)
    Shows
    Actors
    Directors
    Genres

    -   Filter by actors, filter by genre

    ## FUNCTIONAL

    ### Backend - Functional requirements:

    -   Authentication (login, sign up etc.)
    -   Rating capability
    -   Database
        -   Static list of series / shows to populate page
        -   CRUD capability (update: add ratings)

    ### Frontend - Functional requirements:

    -   Sign up / login forms with validation
    -   Home page with all dramas (popular, featured director, recent)
    -   Featured view once they click on one show
    -   Rating capability (default is not yet rated)

    ## NON-FUNCTIONAL

    ### Backend - Non-Functional requirements:

    -   Query external API as dynamic data source
    -   Review capability
    -   Alter ratings / reviews

    ### Frontend - Non-Functional requirements:

    -   Review input form
