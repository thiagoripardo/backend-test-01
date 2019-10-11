#  Nodejs API

An API that uses NodeJS(>= LTS Carbon) and Express.

### Installation

```

cd backend-test-01/teste-1
npm i

```

### Configuration .env

```

PORT=8000
baseURL='http://localhost:8000'
DEBUG=0 # 1 activate morgan

```

### Run development mode

```

npm run dev

```

### Run tests

```

npm run test

```

### Requests Examples

```

Filter: GET /users?role=Manager
Sort: GET /users?orderBy=name&order=desc
Pagination: GET /users?pageSize=5&pageNumber=1
Users Detail: GET /users/54
Analysis: GET /analisys
Analysis Detail: GET /analisys/3

```