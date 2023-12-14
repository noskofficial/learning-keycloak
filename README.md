# Learning-keycloak

## Keycloak: Open Source Identity and Access Management
```
Identity: Unique name of person or device
Authentication: Process of verifying identity
Authorization: Function over identity assigning access rights. Grant access based on a set of rules, where the rule depend on identity.
```
For more information: [here](https://www.keycloak.org/guides)

## How to run the project:

```bash
docker-compose up --build
```

## Authenticate the client:

1. Create the realm to manage IAM for your application [Don't use master realm]
2. Create the client
3. Fill the valid redirect uris, valid post logout redirect uris, and web origins
<details>
  <summary>Images to create client</summary>
  
  ![telegram-cloud-photo-size-5-6332609719956520474-y](https://github.com/noskofficial/learning-keycloak/assets/55124197/490c549e-cb3f-4e22-92d9-685582142c6e)
</details>
<details>
  <summary>Image showing browser web origin</summary>
  
  ![image](https://github.com/noskofficial/learning-keycloak/assets/55124197/e825e724-87fe-44f2-b119-2a21057f7129)
</details>
4. Create a user and set the password
<details>
  <summary>Image showing setting user password</summary>

  ![telegram-cloud-photo-size-5-6332609719956520476-y](https://github.com/noskofficial/learning-keycloak/assets/55124197/7a71b61b-ab89-4bae-913e-39ce3701b87b)
</details>
5. Fill the .env file of frontend
6. After following from step 1-4.
7. Run the project
8. You are able to login the user and see the protected route

## Validate the token from the backend:
1. Get the client public key:
<details>
  <summary>Image showing pulic key</summary>
  
  ![telegram-cloud-photo-size-5-6332609719956520476-y](https://github.com/noskofficial/learning-keycloak/assets/55124197/48ae551b-d802-456e-a671-a1fd03c237ef)
</details>
2. Add the public key in .env file of backend
3. Run the project
4. Now you are able to see the socials of the user if email matches in the data:

```
backend/routes/socials.js

let data = {
  "test@gmail.com": {
    github: "https://github.com/test",
    linkedin: "https://linkedin.com/in/test",
    twitter: "https://twitter.com/test",
    facebook: "https://facebook.com/test",
  },
  "best@gmail.com": {
    github: "https://github.com/best",
    linkedin: "https://linkedin.com/in/best",
    twitter: "https://twitter.com/best",
    facebook: "https://facebook.com/best",
  },
};
```

Thank you!
