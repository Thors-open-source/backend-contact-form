## Backend template for sending emails
### How to install 
```javascript
npm i backend-contact-form
```
#### Dependencies 
* nodemailer <br>
* express <br>
* body-parser <br>
* dotenv

## Setup

Create a .env file and paste this
```javascript
EMAIL = "your-gmail"
PASS = "your-email-password or app-specific-password"
```
This will get imported, don't share or upload your .env file.

Gmail has some built-in security, and if you use multi-factor authentication, you're required to create an app specific password. This is done on your google profile.

## How to use

```javascript
var mail = require("backend-contact-form");

mail(
    // EXAMPLE FORM
    `
    <form action="/" id="contact-form" autocomplete="off" method="post">
        <fieldset style="display:flex;flex-direction:column;width:200px;height:200px;">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" required>

            <label for="message">Message</label>
            <textarea id="message" name="message" rows="3" required></textarea>

            <button type="submit" style="margin-top:30px;">Submit</button>
        </fieldset>
    </form>
    `
);
```

#### Starting server

```javascript
npm start
```

The port is set to 8080, you can change the 'PORT' variable if you wish, the rest of the code will follow along.


Go to localhost:8080 (if you didn't change the 'PORT' variable), and your form will show.

Submit, and the module will parse the data and send the email to your gmail account!

