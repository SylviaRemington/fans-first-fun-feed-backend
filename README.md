# Fans First Fun Feed

**BACKEND EXPRESS API CREATION**

![FansFirstBlue](./public/images/smallerFansFirst.png)

This app is going to be a MERN stack app for Savannah Bananas fans (an alternative baseball team known for dances, trick plays, and fan engagement). The initial idea was for it to be called: The Banana Fan Dance and Moment Share App. Live fans will be able to add dance moves (name, type) to perform at games; while both live and online fans will be able to share favorite, awesome moments from the game (text, category like trick plays, dance moves, or Dad-bod-cheer-squad) inspired by game events or IG videos. All entries will appear in a community feed for everyone to view and like. This is a way to bring fans together in a simple, list-based interface!

This app will, most likely, be simplified a lot; and start out as a way for fans to share great, fun moments from the game. Once I have that CRUD functionality accomplished, I will move on to creating the dance move part of it. That will be more for a stretch goal; and this stretch goal portion may be accomplished after the Project 3 deadline (since we only have a week to create a full stack app with both backend and front end).






<hr>

# Utilizing Express JWT Auth Template 
### As per class suggestion for more ease creating backend

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
