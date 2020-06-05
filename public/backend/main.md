# Documentation of the Backend part

> Deliverable D1
## General group information

| Member n. | Role | First name | Last Name | Matricola | Email address |
|-----------|---------------|------------|-----------|-----------|-----------------|
| 1 | administrator | Daniele | De Dominicis | 946103 | daniele.dedominicis@mail.polimi.it |
| 2 | member | Mario | Di Odoardo | 928188 | mario.diodoardo@mail.polimi.it |

## Links to other deliverables
- Deliverable D0: the web application is accessible at [this address](https://voluntary-abruzzo.herokuapp.com).
- Deliverable D2: the YAML or JSON file containing the specification of the app API can be found at [this address](https://voluntary-abruzzo.herokuapp.com/backend/spec.yaml).
- Deliverable D3: the SwaggerUI page of the same API is available at [this address](https://voluntary-abruzzo.herokuapp.com/backend/swaggerui).
- Deliverable D4: the source code of D0 is available as a zip file at [this address](https://voluntary-abruzzo.herokuapp.com/backend/app.zip).
- Deliverable D5: the address of the online source control repository is available [this address](https://github.com/Danielededo/HYP-Abruzzo).
We hereby declare that this is a private repository and, upon request,we will  give access to the instructors.
## Specification
### Web Architecture
Describe here, with a diagram, the components of your web application and how they interact. Highlight which parts belong to the application layer, data layer or presentation layer. How did you ensure that HTML is not rendered server side?

​							![Alt text](ADP.PNG?raw=true "Application-Data-Presentation layer")	
The client makes an http request to the server via Fetch API calls, the server retrieves data from the database and then reply with json objects. Once the client receives the json it uses javascript functions in order to render it in the page. We ensure that html isn't rendered server side because we have used the client-side approach.

### API
#### REST compliance
Describe here to what extent did you follow REST principles and what are the reasons for which you might have decided to diverge. Note, you must not describe the whole API here, just the design decisions.

The client and the server can work independently. In fact the server takes care of returning all the client's requests without knowing how it works.
#### OpenAPI Resource models
Describe here synthetically, which models you have introduced for resources.

    Event : represents an event organized by our association.
    Service : represents a service organized by our association.
    Person : represents a member of our association.
### Data model
Describe with an ER diagram the model used in the data layer of your web application. How these map to the OpenAPI data model?

​									![Alt text](ER.png?raw=true "ER Diagram")
For each object we have created a table in the database that allows us to make queries.

## Implementation
### Tools used
Describe here which tools, languages and frameworks did you use for the backend of the application.

We mainly used languages and frameworks presented in the course, for the database we have used postgresql with pgadmin integration.
### Discussion
Describe here:
- How did you make sure your web application adheres to the provided OpenAPI specification? Which method did you use to test all APIs endpoints against the expected response? We have tested manually all the APIs.

- Why do you think your web application adheres to common practices to partition a REST-based web application (static assets vs.
application data) Instead of receiving all the HTML pages already precompiled by the server, we receive only json objects through which we can compile the html files.
- Describe synthetically why and how did you manage session state, what are the state change triggering actions (e.g., POST to login etc..). We have not managed session state since we don't have state change triggering actions.

- Which technology did you use (relational or a no-SQL database) for managing the data model? We have used postgres as DBMS and SQL as query language (knex as query-builder)

## Other information
### Task assignment
Describe here how development tasks have been subdivided among members of the group, e.g.:
> - Daniele worked on front end (70%) and back end (30% of the time)
> - Mario worked on front end (30%) and back end (70% of the time)
### Analysis of existing API
Describe here the research of (full or part of) existing APIs that are similar in objectives and scope to the one implemented, that have possibly guided implementation choices (these should not be necessarily OpenAPI implementations). Toy APIs (such as the Swagger's Pet Store) or the example shown during lectures are not a valid response. Use TWO or more items of the form:
> We took partial inspiration from APIs seen in the course, in particular the part  that manages the books request because of the similarity to most of our requests. Or for the part of the API that manages the events of a given month we considered the example of swagger's petstore because of it is a very clear and explanatory example.
### Learning outcome
What was the most important thing all the members have learned while developing this part of the project, what questions remained unanswered, how you will use what you've learned in your everyday life?

- Daniele learned to write Javascript, he would have liked to know more about  Ajax and JQuery. He is interested to face with other frameworks.
- Mario learned how to build a database, he appreciate working on it. He learned  also what is an API and how to use it concretely.