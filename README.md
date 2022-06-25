# Secrets

A simple server rendered app for users to submit their secrets anonymously.

Built to practice user authentication methods and six levels of security.

A hosted version can be found here: https://jmg-secrets.herokuapp.com/

# Security and Authentication

The security levels/authentication explored in this project were:

-   Level 1 - Register users with username and password
-   Level 2 - Database encryptions using mongoose encryption
-   Level 3 - Hashing passwords using md5
-   Level 4 - Salting and hasing using bcrypt
-   Level 5 - Cookies and sessions using Passport.js
-   Level 6 - Third party OAuth - Token based authentication using Google Sign in

## How to use

Users can register as a new user, or login if an account has already been made.
They can either locally authenticate by completing the register form, or use their google account to login using OAuth

Users will then be directed to the secrets page. This will anonymously display any secrets already submitted by other users. A secret can be added to the page by accessing the 'submit a secret' page.

Upon submission, users will be redirected back to the secrets page to view their secret in the list.

## Software and Packages used:

-   MongoDB
-   Mongoose
-   EJS
-   Express
-   Node.js
-   Passport.js
-   Passport local mongoose
-   Express session
-   OAuth 2.0
