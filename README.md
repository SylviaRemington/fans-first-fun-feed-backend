# Fans First Fun Feed (BACKEND)

**BACKEND EXPRESS API CREATION** <br>
<!-- **-- Started August 21st, 2025 for GA Project #3** -->
<!-- **We have one week to complete this project.** -->

**LINK TO FRONTEND GITHUB REPO:** https://github.com/SylviaRemington/fans-first-fun-feed-frontend


<!-- <p align="center">
  <img src="./public/images/smallerFansFirst.png) " alt="Fans First Fun Image" /><br>
  <b>Fans First Fun Feed App Image</b>
</p> -->

![FansFirstBlue](./public/images/smallerFansFirst.png) <br>

This app is a **MERN stack app** for **Savannah Bananas** fans.

**Savannah Bananas is an alternative baseball team known for dances, trick plays, and fan engagement**. The initial idea was for it to be called: The Banana Fan Dance and Moment Share App. 

- Live fans will be able to add dance moves (name, type) to perform at games; while both live and online fans will be able to share favorite, awesome moments from the game (text, category like trick plays, dance moves, or Dad-bod-cheer-squad) inspired by game events or IG videos. 

- All entries will appear in a community feed for everyone to view and like. 

- This is a way to bring fans together in a simple, list-based interface!

This app will, most likely, be simplified a lot; and start out as a way for fans to share great, fun moments from the game. Once I have that CRUD functionality accomplished, I will move on to creating the dance move part of it. That will be more for a stretch goal; and this stretch goal portion may be accomplished after the Project 3 deadline (since we only have a week to create a full stack app with both BACKEND and FRONTEND).

### Addtl:
In this, I’ll build an Express API that serves as the BACKEND for a full-stack "moment-sharing" application called Fans First Fun Feed. Within this Express API, I’ll implement full CRUD functionality and test it with Postman.

### About Express API JWT Auth Template:
My Express API will make use of the Express API JWT Auth Template. This template provides this Express application with pre configured JWT Authentication. This style of authentication in HTTP uses tokens, or unique identifier strings, to tell who a user is when they’re making an authenticated request.

Thanks to this template, this Express application will already be able to sign up and sign in users. The template also includes a verifyToken middleware function. The verifyToken middleware ensures that any route following it in the middleware pipeline will require authentication before proceeding.

To demonstrate JWT Authentication, my Express application will use verifyToken to protect all routes related to the hoot resource. This means users will be required to sign in before getting access to any Fans First Fun Feed data.


<hr>

## Utilizing Express JWT Auth Template 
### --As per class suggestion for more ease creating backend api--

## About

This repo is an Express JWT Auth template meant to be paired with a front-end app utilizing JWT tokens.

## Getting started

Fork and clone this repository to your local machine.

After moving into the cloned directory, run `npm i` to download the dependencies.

Create a `.env` file in the root of the project:

```bash
touch .env
```

and add your MongoDB URI and a secret JWT string to it. Your MongoDB URI will look something like the first entry, but with your username and password:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@sei.azure.mongodb.net/myApp?retryWrites=true
JWT_SECRET=supersecret
```

Start the app in your terminal with:

``` sh
npm run dev
```








