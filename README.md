
# E-commerce API

An E-commerce API created using NodeJS, express and MongoDB as the database.

![Capture](https://user-images.githubusercontent.com/62784600/221340582-d8bc201f-a011-45bc-8dd5-1b61c496216a.PNG)


## Setup and Run Locally

Commands

```
# clone github repo

$ git clone https://github.com/Abhinav2011/E-commerce-API
$ cd E-commerce-API
$ cp .env

# SET DATABASE URL

$ npm install
$ npm run dev

```
## API Reference

### Authentication Routes

#### Register User

```http
  POST /api/v1/auth/register
```

#### Login User

```http
  POST /api/v1/auth/login
```
#### Logout User

```http
  POST /api/v1/auth/logout
```
### User Routes

#### Get All User

```http
  GET /api/v1/user/getAllUser
```
#### Show Current User

```http
  GET /api/v1/user/showMe
```

#### Get User By Id

```http
  GET /api/v1/user/${id}
```

#### Update User

```http
  PUT /api/v1/user/updateUser
```

#### Update User Password

```http
  PATCH /api/v1/user/updateUserPassword
```

### Product Routes


#### Create a Product

```http
  POST /api/v1/product/create
```

#### Get All Products

```http
  GET /api/v1/product/getAllProduct
```

#### Get Product By Id

```http
  GET /api/v1/product/${id}
```

#### Upload Product Image

```http
  POST /api/v1/product/uploadImage
```

#### Update a Product

```http
  PUT /api/v1/product/${id}
```

#### Delete a Product

```http
  DELETE /api/v1/product/${id}
```





