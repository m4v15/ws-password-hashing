# ws-password-hashing

## Set Up

1. Clone this repo
1. `npm install`
1. `npm start`
1. Go to `http://localhost:4000/`

## Description

This is a very basic server site that allows registration and log in, cool huh?

At the moment you can go to the registration, register, and then go to the log in form and log in with the details you just registered. Try it!

...

Cool, hopefully that worked.

Hey, now have a look at the code in your editor...

If you look, the database of users in is in the `db.json` file.

However as you may have noticed, there is a bit of a problem... all the passwords are stored as plaintext! We should change this:

1. Please change the `post` handler for `register` to hash the password _before_ we put it in our database
1. Also change the `post` handler for `login` to _compare_ the inputted password with the hash to check the user typed the correct password...

#### _Hint_

- Use `bcrypt`....
