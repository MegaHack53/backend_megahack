<h2 align="center">
  Megahack Team 53 - REST API :computer:
</h2>

<p align="center">This project serves a simple REST API designed to work with any client mainly with <a href="https://github.com/MegaHack53/frontend_megahack">Team 53 Front-end</a>.</p>

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
 - **post method**
    - ***JSON*** body to create a transaction :
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
    "description": "Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a           pena...",
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
    - ***JSON*** body to create a card, **category** is required by passing `invest`,`habits` or `tools`.
         - creating a `invest` or `habits` category : 
         ```  
           {
                "author": "Conrado Navarro",
                "readtime": "6 min",
                "title": "Educação financeira: acorde agora e conquiste sua liberdade",
                "description": "Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar                  dinheiro...",
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
