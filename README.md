# Megahack Team 53 - REST API :computer:

This project serves a simple REST API designed to work with any client mainly with [Team 53 Front-end](https://github.com/MegaHack53/frontend_megahack) .

### Running server locally

> create a `.env` file at the root and set **MONGO_URL** env var

install all dependencies `yarn install` and run `yarn dev`

- access server on ***localhost:3333***

## Interact with API :book:

> ### / transactions
- **get method**
  - list all transactions made by user :
    ``` 
     [ {
    		  "_id": "5eaccbb1642db9476c6817c0",
    		  "category": "Food",
    		  "description": "using delivery service",
    		  "value": "500",
    		  "type": "outcome",
    		  "createdAt": "2020-05-02T01:24:01.929Z",
    		  "__v": 0
        }, ... ]
    ```
 - **post method**
    - ***JSON*** body to create a transaction :
      ``` 
        {
    		  "category": "Food",
    		  "description": "using delivery service",
    		  "value": "500",
    		  "type": "outcome"	  
        }
      ```
