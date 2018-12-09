## Mentor Notes:

Some guidance after delivery in FACK1 (December 2018) - I think the README.md is informative enough that you can probably just give them the link and let them go, but we added a bit of structure:

### FACK1 structure:

**Total Time: 1 hour**

**Part 1 ~5 minute intro ~10 minutes coding ~5 minutes casting**

Note that part 1 should be very brief, the main useful stuff is in part 2. Do not spend too long on this section - having someone cast afterwards is a good way of making sure everyone is ready for part 2 after 10-15 minutes.
- Spend 5 minutes talking about learning outcomes, demonstrating the website as it works initially - i.e. failing to succesfully check passwords.
- Maybe give very brief overview of the server file structure, showing them where the handlers are.
- peope do not need to understand the db queries, but can look if they want.

- Give them (max) 10 minutes to do the coding 
- Go round and keep an eye on everyone, as soon as everyone has done, finish, and have someone cast the solution
- Most people should get this, but some other things to talk about at this stage:
  - Correct status codes to send back (500 if `db` query breaks, 403 if password doesn't match
  - What error message to send back ("Password is wrong" vs. "Invalid email/password combination") talk about the benefits of obscuring some information from potential attackers

**Part 2 <5 minute intro ~25-30 minutes coding ~10 minutes casting**

Main part of the workshop - 30 minutes coding should be plenty of time for everyone to complete.

- Go to the `db.json` file, ask them what's wrong (plaintext)?
- ask them what they should do (hash)
- tell them they need to use `bcryptjs` to fix this (talk about difference between `bcrypt` and `bcryptjs`)
- they will be implementing the theory from the presentation [here](https://docs.google.com/presentation/d/1EwWXNoJHxRoJxhFRvwvOr2tqslQe4PBxyDeRHWJFJH4/edit#slide=id.p1)
- ask them if there will be any other problems after hashing? (log in will break)
- once they are hashing the password they need to then change the login code they did in part 1 again

- 30 minutes was pretty much enough time for everyone in k1 to finish, common problems:
  - Make sure they use the asycnh version of `hash` and `compare`
  - In the docs, it's not clear which argument is the password to be hashed
  - not much error handling of bcrypt (not super important for this WS tbh, but still)
  - make sure people are looking in the `db.json` file to see what's being stored.
  - if people finish early suggest maybe they send back different errors for log in - if the user doesn't exist, we send back undefined as password, could handle this before doing compare)
  
- For casting, try to get people to explain each line
  - ask them to explain how the compare works - it takes 2 arguements, plaintext and a hash, what does it do?
  - this is to test their understanding of the previous slideshow - **hash is irreversible** so therefore it must convert the plaintext to the hash
  - but how does it know what salt to use, how many rounds?
  - it is all stored within the hash as explained in [this slide](https://docs.google.com/presentation/d/1EwWXNoJHxRoJxhFRvwvOr2tqslQe4PBxyDeRHWJFJH4/edit#slide=id.p26)
  - `bcrypt.compare` is smart, looks at the hash to then create a new hash of the plaintext
  - Quiz: register two users with the same password (diff emails), ask if the hash will be the same
  - no as bcrypt randomly generates the salt each time.
  
