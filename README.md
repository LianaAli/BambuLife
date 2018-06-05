# BambuLife
Front-end &amp; Back-end Test

## Front-end Test
With API from swapi.co, build a single page application where users can:
1. View all people in the Star Wars universe.
2. View the detail of all people in the Star Wars universe.

## Back-end Test
In this test, we will be building an API of a simple user profiling system. The system can register a new user who will be categorised into a profile type (or rank) depending on the user's answers of some profiling question prior to registering.

For this case, the user will be asked two questions, their savings amount and their loan amount. There are some 6 options for each questions: 0, 2000, 4000, 6000, 8000 and 10000. The difference is that for saving, each option maps to score 1 to 6 while for loan the option maps to 6 to 1. Do keep in mind that in the future, the number of question a user need to answer might change to many more than just 2.

The user will be profiled based on the score. Profile A is if the score is >= 8, B for >= 6, C for >= 4, and D for >= 2.

You are to design and build an API which provides an endpoint to cover this requirement. The endpoint will receive the answers of the questions (not the score) and will save the users to the database and return the profile to the client.

Guidelines:
You may build using one of these programming language (and framework): NodeJS (Express, Hapi or Sails), Java (Sprint Boot), C# (ASP.NET) or Phyton (Django).