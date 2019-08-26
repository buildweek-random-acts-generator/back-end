# Back-end

# ARK

Inspiring yourself can be a chore let ARK help you be your best self. 

## Overview
This API is used as part of the application _ARK Project_ and allows for CRUD operations to be preformed on the users _contacts_ and _actions_. 

This documentation will cover all of the data models and endpoints which can be access via
> <https://random-ark-generator.herokuapp.com/>

# Endpoints

## Authentication

| Request Type | Endpoint      | Description   |
|:------------:|:-------------:|:-------------:|
| POST         | /register | Creates User  |
| POST         | /login    | Creates JWT*  |

* JSON Web Tokens Used to Verify Users

## Authentication

### Register

* A __POST__ request to the `/register` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email@address.com",
    "password": "password"
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | String    |  true      | true       |
| password     | String    |  true      | false      |

### Login

* A __POST__ request to the `/login` endpoint expects to recieve an object as follows: 

```javascript
{
    "email": "email",
    "password": "password",
}
```

| Field        | Type      | Required   | Unique     |
|:------------:|:---------:|:----------:|:----------:|
| email        | String    |  true      | true       |
| password     | String    |  true      | false      |

* The __POST__ request to `/login` will return a jwt and a login message.


# Proposal

 What problem does your app solve?

- Be as specific as possible; how does your app solve the problem?

Random acts generator solves both problems by reminding you to serve- randomly choosing a person from your contacts, and giving you suggestions for how to serve them.

- What is the mission statement?
Our mission is to connect people one random act of kindness at a time. We strive to facilitate acts of kindness no matter where you are or how much you can contribute. We strive to provide a supportive community of individuals with the ideas and means to make change in the world regardless of who you are or where you live. 



## Features

 What features are required for your minimum viable product?
- Navigation on all pages
- Onboarding for new user
- Page and working functionality for a user to add, update, and delete contacts 
- Page displaying existing random acts that can be modified by user
- Page displaying a random user contact and corresponding random act that the user performs for that contact 

   
 What features may you wish to put in a future release?
- Share kindness story to social media
- Streak tracker
- Push notifications reminding user to perform random act for mobile


 What do the top 3 similar apps do for their users?
- MVMNT app - provides a daily service idea
- Kindness App - journal about kindness task completed  
- Random Acts of Kindness - kindness challenge that updates daily
- Frameworks - Libraries

 What 3rd party frameworks/libraries are you considering using?
- Frontend: React
- Backend: Node.js
- Formik
 
Do APIs require you to contact its maintainer to gain access?
- No

Are you required to pay to use the API?
- No

Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
- N/A


## Target Audience

 Who is your target audience? Be specific.
- 	Busy young professionals
-	Mid 20’s
-	College students

 What feedback have you gotten from potential users?
-       They want tasks they can complete remotely and tasks that aren’t too specific.  They had a preference for writing tasks such as texting or sharing messages from their phone.  

 Have you validated the problem and your solution with your target audience? How?
-      Some validation has occurred through sending out surveys.  Also some user testing has occurred through showing our user group a prototype for onboarding, adding contacts, and adding service ideas.  So far, the users have successfully completed the tasks and further testing will occur. 


## Research

 Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

Prototype Key Feature(s)

-        This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

- Landing page with the UVP, call-to-action button, navigation - Monday
- User home page navigation - Tuesday
- Contact List - Tuesday
- Ideas List - Wednesday
- Idea Generator Page - Thursday
- User onboarding (Login, Sign-up) - Wednesday/Thursday
