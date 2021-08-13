[![Contributors][contributors-shield]][contributors-url] &nbsp;
[![Stargazers][stars-shield]][stars-url] &nbsp;
[![Forks][forks-shield]][forks-url] &nbsp;
[![Issues][issues-shield]][issues-url] &nbsp;
[![MIT License][license-shield]][license-url] &nbsp;
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Saixel/PROJECT-AGILE-API-TEST">
    <img src="https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">PROJECT-AGILE-API-TEST</h3>

  <p align="center">
    API Test - The CRM service
    <br />
    <a href="https://github.com/Saixel/PROJECT-AGILE-API-TEST"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Saixel/PROJECT-AGILE-API-TEST">View Demo</a>
    ·
    <a href="https://github.com/Saixel/PROJECT-AGILE-API-TEST/issues">Report Bug</a>
    ·
    <a href="https://github.com/Saixel/PROJECT-AGILE-API-TEST/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
    <a href="#usage">Usage</a>
      <ul>
        <li><a href="#authentication-endpoints">Authentication Endpoints</a></li>
        <li><a href="#users-endpoints">Users Endpoints</a></li>
        <li><a href="#customers-endpoints">Customers Endpoints</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#other-technologies">Other Technologies</a></li>
  </ol>
</details>
<br />

<!-- ABOUT THE PROJECT -->

## About The Project

Here you will find a fantastic REST API to manage customer data for a small shop.

### Built With

- [JavaScript](https://www.javascript.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
  <br />

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- NodeJS
  ```sh
  sudo apt install nodejs
  ```
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install npm packages
   ```sh
   npm install
   ```
3. Config your enviroment variables in `config.js` or in a `.env` file

4. Start the API
   ```sh
   npm run start
   ```
   <br />

<!-- USAGE EXAMPLES -->

## Usage

List of the endpoints currently available in the API.

### Authentication Endpoints

| METHOD |  ENDPOINT  | TOKEN | ROLE |  BODY / PARAMS  | CONTROLLER | RETURN |
| :----: | :--------: | :---: | :--: | :-------------: | :--------: | :----: |
|  POST  | /api/login |  NO   |  NO  | email, password |   login    | token  |

### Users Endpoints

| METHOD |          ENDPOINT           | TOKEN | ROLE  |   BODY / PARAMS   |   CONTROLLER   |         RETURN         |
| :----: | :-------------------------: | :---: | :---: | :---------------: | :------------: | :--------------------: |
|  POST  |         /api/users          |  YES  | ADMIN |    userSchema     |   createUser   | created user (object)  |
|  GET   |         /api/users          |  YES  | ADMIN |   pages (query)   |    getUsers    |   all users (array)    |
|  GET   |     /api/users /:userId     |  YES  | ADMIN | userId (ObjectId) |  getUserById   | specific user (object) |
|  PUT   |     /api/users /:userId     |  YES  | ADMIN | userId (ObjectId) |   updateUser   | updated user (object)  |
|  PUT   | /api/users /:userId /status |  YES  | ADMIN | userId (ObjectId) | updateUserRole | updated user (object)  |
| DELETE |     /api/users /:userId     |  YES  | ADMIN | userId (ObjectId) |   deleteUser   |  confirmation message  |

### Customers Endpoints

| METHOD |              ENDPOINT               | TOKEN | ROLE |     BODY / PARAMS     |      CONTROLLER      |            RETURN            |
| :----: | :---------------------------------: | :---: | :--: | :-------------------: | :------------------: | :--------------------------: |
|  POST  |           /api/customers            |  YES  |  NO  |    customerSchema     |    createCustomer    |  created customer (object)   |
|  GET   |           /api/customers            |  YES  |  NO  |     pages (query)     |     getCustomers     |    all customers (array)     |
|  GET   |     /api/customers /:customerId     |  YES  |  NO  | customerId (ObjectId) |   getCustomerById    |  specific customer (object)  |
|  GET   | /api/customers /creator /:creatorId |  YES  |  NO  | creatorId (ObjectId)  | getCustomerByCreator | customers by creator (array) |
|  GET   | /api/customers /updater /:updaterId |  YES  |  NO  | updaterId (ObjectId)  | getCustomerByUpdater | customers by updater (array) |
|  PUT   |     /api/customers /:customerId     |  YES  |  NO  | customerId (ObjectId) |    updateCustomer    |  updated customer (object)   |
| DELETE |     /api/customers /:customerId     |  YES  |  NO  | customerId (ObjectId) |    deleteCustomer    |  deleted customer (object)   |

<br />

<!-- ROADMAP -->

## Roadmap

The next step I am working on is the implementation of the tests.
<br />

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create.<br />
Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
   <br />

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.
<br />

<!-- CONTACT -->

## Contact

Alexis Guanche - [GitHub](https://github.com/Saixel) - [LinkedIn](https://www.linkedin.com/in/alexis-guanche/) - [HackerRank](https://www.hackerrank.com/Syxel)

Project Link: [https://github.com/Saixel/PROJECT-AGILE-API-TEST](https://github.com/Saixel/PROJECT-AGILE-API-TEST)
<br />

<!-- OTHER TECHNOLOGIES -->

## Other Technologies

- [mongoose](https://www.npmjs.com/package/mongoose)
- [babel/core](https://www.npmjs.com/package/@babel/core)
- [babel/cli](https://www.npmjs.com/package/@babel/cli)
- [babel/node](https://www.npmjs.com/package/@babel/node)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [morgan](https://www.npmjs.com/package/morgan)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [bcryptjs](https://www.npmjs.com/package/bcrypt)
- [cors](https://www.npmjs.com/package/cors)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [helmet](https://www.npmjs.com/package/helmet)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Saixel/PROJECT-AGILE-API-TEST?style=for-the-badge
[contributors-url]: https://github.com/Saixel/PROJECT-AGILE-API-TEST/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Saixel/PROJECT-AGILE-API-TEST?style=for-the-badge
[forks-url]: https://github.com/Saixel/PROJECT-AGILE-API-TEST/network/members
[stars-shield]: https://img.shields.io/github/stars/Saixel/PROJECT-AGILE-API-TEST?style=for-the-badge
[stars-url]: https://github.com/Saixel/PROJECT-AGILE-API-TEST/stargazers
[issues-shield]: https://img.shields.io/github/issues/Saixel/PROJECT-AGILE-API-TEST?style=for-the-badge
[issues-url]: https://github.com/Saixel/PROJECT-AGILE-API-TEST/issues
[license-shield]: https://img.shields.io/github/license/Saixel/PROJECT-AGILE-API-TEST?logo=MIT&style=for-the-badge
[license-url]: https://github.com/Saixel/PROJECT-AGILE-API-TEST/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/alexis-guanche/
[product-screenshot]: images/screenshot.png
