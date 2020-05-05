<h2 align="center">
  <a href="https://github.com/MegaHack53/">
    <img alt="Open Weather Logo" src="https://shawee.io/images/welovehackathons.png" width="250px" />
  </a>
</h2>
<h1 align="center">
  Megahack Team 53 - REST API :computer:
</h1>

<p align="justify">
  This project is based in the MegaHack competition, as a solution to the Flourish Savings Challenge.  We developed the app KIPcash, we bet in this solution for beginners when the subject is managing personal finances. Applying features for learning, expences, community and challenges.
 </p>
<p align="center">The simple REST API was designed to work with any client mainly with <a href="https://github.com/MegaHack53/frontend_megahack">Team 53 Front-end</a>.</p>

<p align="center">
  <a href="https://github.com/iamseki">
    <img alt="Made by Christian Seki" src="https://img.shields.io/badge/made%20by-Christian%20Seki-brightgreen">
  </a>
  <a href="https://github.com/higorreculiano">
    <img alt="and Higor Reculiano" src="https://img.shields.io/badge/and%20-Higor%20Reculiano-brightgreen">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

### Running server locally

> create a `.env` file at the root and set **MONGO_URL** env var

install all dependencies `yarn install` and run `yarn dev`

- access server on ***localhost:3333***

## Interact with API :book:

*development environment deploy*: ***https://megahack53-api.herokuapp.com/***

> ### / transactions
- **get method**
  - list all transactions made by user :
    ``` 
     {
       transactions : [ {
            "id": "5eaccbb1642db9476c6817c0",
            "category": "Food",
            "description": "using delivery service",
            "value": 500,
            "type": "outcome",
            "createdAt": "2020-05-02T01:24:01.929Z",
                         }, ... ],
          balance : {
                     income : 1000,
                     outcome: 1000,
                     total: 0
                    }
      }
    ```
  - list specific category transaction passing on query params :
    `transactions/job`
    ``` 
	{
	  "category": "job",
	  "balance": {
	    "income": 450,
	    "outcome": 0,
	    "total": 450
	  }
	}
    ```
   - list all categories available :
    `transactions/categories`
	    ``` 
		[ {
		  "id": "5eb0406184365d002198305f",
		  "value": "job",
		  }, ... ]
	    ```
 - **post method**
    - body to create a transaction :
      ``` 
        {
    		  "category": "Food",
    		  "description": "using delivery service",
    		  "value": 500,
    		  "type": "outcome"	  
        }
      ```
    - In response expect the same as body with id and createdAt.
    ---

> ### / cards
- **get method**
  - list all cards available:
    ``` 
     [ {
    "id": "5eae4968758afb0021c01a04",
    "readtime": "7 min",
    "description": "description about article",
    "icon": "",
    "author": "PAULO AMORIM",
    "title": "Se você AINDA tem dinheiro na poupança, precisa saber isto",
    "url": "https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/",
    "category": "invest",
    "createdAt": "2020-05-03T04:32:40.811Z"
      }, ... ]
    ```
   - with query params : `invest` `habits` `tools` , example of **cards/tools** response:
    ``` 
      [ {
          "id": "5eae4bb3758afb0021c01a0b",
          "readtime": "",
          "description": "",
          "icon": "https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png",
          "author": "MEUS DIVIDENDOS",
          "title": "Cálculo de Dividendos",
          "url": "http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed",
          "category": "tools",
          "createdAt": "2020-05-03T04:42:27.242Z"
        }, ... ]
    ```
 - **post method**
    - body to create a card, **category** is required by passing `invest`,`habits` or `tools`.
         - creating a `invest` or `habits` category : 
         ```  
           {
                "author": "Conrado Navarro",
                "readtime": "6 min",
                "title": "Educação financeira: acorde agora e conquiste sua liberdade",
                "description": "description about article",
                "url": "https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/",
                "category":"invest"
           }
        ```
        - creating a `tools` category : 
         ``` 
           {
                "author": "ME POUPE",
                "title": "Simulador de CDB e Letras de Crédito",
                "icon": "https://img.icons8.com/carbon-copy/100/000000/accounting.png",
                "url":  "http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/",
	            "category":"tools"
           }
        ```
    - In response expect the same as body with id and createdAt.

> ### / posts
- **get method**
  - list all posts about a specific **topic** query call `posts/Inflation`:
    ```
	[
	  {
	    "id": "5eaf507a78424c4ed3b286fb"
	    "topic": "Inflation",
	    "author": "Christian Seki",
	    "avatar": "link to some avatar",
	    "ocupation": "Nodejs Developer",
	    "definition": "description about topic",
	    "trusted": 6,
	    "comments": [
	      {
		"createdAt": "2020-05-03T23:15:11.517Z",
		"_id": "5eaf507f78424c4ed3b286fc",
		"name": "Rafaella Seki",
		"message": "thansk man !",
		"avatar": "https://avatars0.githubusercontent.com/u/62911893?s=460&v=4"
	      } , ... ],
	    "createdAt": "2020-05-03T23:15:06.024Z",
	    "__v": 3,
	  }, ...
	]
    ```
 - **post method**
    - body to create a post :
         ```  
		{
			"topic": "Inflation",
			"author": "Christian Seki",
			"avatar": "URL TO AVATAR",
			"ocupation": "Nodejs Developer",
			"definition": "definition about topic"
		}
        ```
 - **put method**
     - body to create a comment in existing post :
         ``` 
           {
                "author": "ME POUPE",
                "title": "Simulador de CDB e Letras de Crédito",
                "icon": "https://img.icons8.com/carbon-copy/100/000000/accounting.png",
                "url":  "http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/",
	            "category":"tools"
           }
        ```
      - **add trusted** to existing post,`posts/trust/topicId`
        - both put methods reponse is http code status 204
