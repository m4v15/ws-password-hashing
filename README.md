# ws-password-hashing

## Set Up

1. Clone this repo
1. `npm install`
1. `npm run dev`
1. Go to `http://localhost:4000/`

## Description

This is a very basic server site that allows registration and log in, cool huh?

At the moment you can go to the registration, register, and then go to the log in form and log in with the details you just registered. Try it!

...

Cool, hopefully that worked...

Wait a second, I think I did something wrong... try to enter any password and user combination... **uh oh!** it logs you in whatever you type! :scream:

Hey, now have a look at the code in your editor...

### Part 1

Look at the stuff in the `POST login` handler. We take the email and the password the user enters, then get the password that is in the database and then log the user in... This is a serious bug. **We should check that the password in the database is the same as the password the user enters**

1. Change the code so that we only send a `success logged in!` message when the password the user enters is the same as password in the database. If they are different send back a fail message. The important code happens on [these lines](https://github.com/m4v15/ws-password-hashing/blob/55c0e2fe229edb44a11078e0b007d199281dad2f/src/handlers/post.js#L16-L17).

#### Finished?

Cool, check it works by registering and enter the right password (you should see your log in message) and then enter the wrong password (you should see the fail message)

### Part 2

If you look, our mock database of users in is the `db.json` file, in the root directory.

However as you may have noticed, there is another serious problem... all the passwords are stored as plaintext! We should change this:

1. Please change the `POST register` handler to hash the password _before_ we put it in our database. The important code happens in [these lines](https://github.com/m4v15/ws-password-hashing/blob/55c0e2fe229edb44a11078e0b007d199281dad2f/src/handlers/post.js#L29-L33).
1. This will break our comparison in part one. Also change the `POST login` handler to compare the inputted password with the now hashed password in the database...

#### _Hint_

- Use `bcrypt`....

#### Finished?

Check it works by deleting the db.json file, then creating some users! It will create a new `db.json` file and hopefully all the passwords should be hashes.

Then try to log in and see if it works!
