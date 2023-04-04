# Endelebe Movie API

## Introduction

In this project I focus on APIs which fetch data from IMDP API, and this API provides so many approaches like  search movies by their title, movie, actors, keyword, Provides top 250 movies, most popular movies, coming soon, box office movies and etc. Generally this project get information about any movies by popular movies, coming movies, box office movies, search movies finally  give detail information about the movies.  But due to of security IMDP API has limit (100 access ) per day so if you access more than the limit it will limit you and you can not fetch the data to access the data you should upgrade to subscription which you should to pay. 

IDMP Link [API for IMDb, TMDb, Wikipedia and more - IMDb API (imdb-api.com)](https://imdb-api.com/)

> In this project, I aim to demonstrate what is API, type of API, How do we secure, how to limit API, how do we use API
> 

## What is API

API stands for Application Programming Interface. It is a set of protocols, routines, and tools for building software and applications. APIs allow different software applications to communicate with each other, enabling the exchange of data and functionality. APIs can be used to access data or services from other software applications, or to expose data or services from your own application for use by other developers or applications.

some example of free APIs links

`[https://restcountries.com/v2/all](https://restcountries.com/v2/all)`  ⇒ All countries 

`[https://api.thecatapi.com/v1/breeds](https://api.thecatapi.com/v1/breeds)` ⇒ Type cats

## How do Access It

To access an API, you typically need to send a request to the API endpoint with the appropriate parameters. The API will then respond with the requested data in a specified format, such as JSON or XML. The exact method for accessing an API can vary depending on the API and the programming language or tool you are using. However, most APIs will provide documentation that explains how to access the API and what parameters are available. It is also important to note that some APIs may require authentication or authorization before you can access them.

## Type of API

SOAP and REST are two different architectural styles that can be used to design APIs. Here are some key differences between them:

Communication protocol: SOAP (Simple Object Access Protocol) uses XML for data exchange, while REST (Representational State Transfer) uses a variety of formats, such as XML, JSON, or plain text.

Messaging pattern: SOAP follows a message-oriented architecture, where a message is sent from a client to a server and a response is returned. REST, on the other hand, uses a resource-oriented architecture, where a client interacts with resources (e.g., URLs) to perform operations.

Data transfer: SOAP requires more bandwidth and overhead because it uses XML for data transfer, while REST can use more lightweight data formats such as JSON, which requires less bandwidth.

API Design: SOAP APIs tend to be more rigid in their design and functionality because they typically use a fixed set of methods (e.g., GET, POST, PUT, and DELETE) and follow a strict schema definition. REST APIs, on the other hand, can be more flexible because they allow for more diverse functionality and can support a wider range of HTTP methods.

Security: Both SOAP and REST APIs can support a variety of security mechanisms, but SOAP has more built-in security features such as encryption, authentication, and authorization.

Overall, the choice between SOAP and REST depends on the specific requirements and constraints of your application. If you require strict message validation and error handling, or need to support distributed transactions, SOAP may be a better choice. On the other hand, if you prioritize simplicity, performance, and scalability, REST may be a better choice.

## Use of API

APIs can be used in a wide variety of ways, such as accessing data from other applications or services, integrating with different software and systems, and automating workflows. Some common use cases for APIs include:

- Integrating with social media platforms to post updates or retrieve data
- Using mapping APIs to display location-based information in an application
- Accessing weather data to provide forecasts or alerts
- Automating tasks or workflows by integrating with other software applications or services
- Creating custom dashboards or reports that combine data from multiple sources

APIs can be a powerful tool for developers and organizations, enabling them to build new applications and services that leverage existing functionality and data. However, it is important to use APIs responsibly and to ensure that you have the appropriate permissions and authorizations to access the data or services you are requesting.

## How do we Secure API

APIs can be secured in a number of ways. Some common security mechanisms for APIs include:

- Authentication: APIs can require users to provide credentials, such as a username and password, to access protected resources. Common authentication mechanisms include OAuth, OpenID Connect, and JSON Web Tokens (JWTs).
- Encryption: APIs can encrypt data in transit using protocols such as SSL or TLS. This can help protect sensitive information from interception or tampering.
- Authorization: APIs can use authorization mechanisms to control access to protected resources based on roles or permissions. Common authorization mechanisms include OAuth scopes and RBAC (Role-Based Access Control).
- Rate limiting: APIs can limit the number of requests that a user can make over a given period of time. This can help prevent abuse and ensure that resources are available for all users.
- Input validation: APIs can validate input data to prevent attacks such as SQL injection or cross-site scripting (XSS).

Overall, the specific security mechanisms used for an API will depend on the requirements and constraints of the application. It is important to carefully consider the security implications of API design and to follow best practices for securing APIs.

# Conclusion

This document provides an overview of APIs, including their definition, how to access them, types of APIs (SOAP and REST), and common use cases. It also discusses API security mechanisms such as authentication, encryption, authorization, rate limiting, and input validation. The document aims to demonstrate how to secure and limit API usage, and how to use APIs responsibly.
