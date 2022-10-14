# V2Dashboard Backend Server

## Deploy
* docker compose up -d
* create database test (or you name it)
* nodemon app.js

## Specs
* Front End use Admin Account to login
* username:admin123 (could be changed)
* password: 123456
---
* Backend Use secure header
* headers: {
    token:"apikeyidistribute"
}

## Routes
There are three kinds of routes.

1. AdminRoute for admin login
2. UserRoute, could only be accessed by admin
3. V2ScarRoute, could only be accessed using token header.