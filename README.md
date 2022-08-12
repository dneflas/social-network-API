# Social Network API 🗣

![license badge](https://img.shields.io/badge/license-MIT-blue)

## Description

<!-- This project is a full-stack progressive web application that allows users to track their budget. The main purpose of the project is to turn an existing application into a progressive web application. The application includes a Web Manifest and is installable with offline capabilities that use Service Workers and IndexedDB. -->

This API is built for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Technologies used include MongoDB for the database, Mongoose for ODM, and Express.js for routing.
<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployed Link](#deployed-link)
- [License](#license)
- [Questions](#questions)  
  <br>

## Installation

Use the following command to download dependencies for the project:

```
npm install
```

  <br>

## Usage

The API can be invoked using:

```
npm start
```

</br>
<!-- The application can be installed onto a computer or mobile devices. Users can enter in a transaction name and amount to be either added or subtracted. A line item for the transaction is created, and a graph of the transactions is populated. The application works offline, and all offline transactions are added to the database once the application comes back online. -->

Routes for this API include:

### User Routes

- `GET` all users
- `GET` user by \_id
- `POST` a new user
- `PUT` to update a user by its \_id
- `DELETE` to remove user by its \_id
- `POST` to add a new friend to a user's friend list
- `DELETE` to remove a friend from a user's friend list

### Thought Routes

- `GET` to get all thoughts
- `GET` to get a single thought by its \_id
- `POST` to create a new thought
- `PUT` to update a thought by its \_id
- `DELETE` to remove a thought by its \_id
- `POST` to create a reaction stored in a single thought's reactions array field
- `DELETE` to pull and remove a reaction by the reaction's reactionId value

[Walk Through Video of Routes](https://drive.google.com/file/d/10PCYO1DMz7rY6yhK3ld5e3o91l1Mi1dS/view)

<br>

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).  
 </br>

## Questions

[GitHub](https://github.com/dneflas)
