const user = {
    "data": {
        "_id": "6047efaab3fe080cb6825f59",
        "username": "user",
        "email": "user@mail.com",
        "password": "$2b$10$hLWXpF.ty960oLDja41Ed.r4oIUYXzHKZTIU33sR9SU1T3YLUlHsy",
        "activationToken": null,
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYwNDdlZmFhYjNmZTA4MGNiNjgyNWY1OSIsInVzZXJuYW1lIjoidXNlciIsImVtYWlsIjoidXNlckBtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGhMV1hwRi50eTk2MG9MRGphNDFFZC5yNG9JVVlYekhLWlRJVTMzc1I5U1UxVDNZTFVsSHN5IiwiYWN0aXZhdGlvblRva2VuIjpudWxsLCJfX3YiOjB9LCJpYXQiOjE2NjgxOTcxNDR9.f3PUmv1g5xM0h3TyyYj7s8nCQTOOtrHNxMu_Oxx2uTs"
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
        "content-length": "549",
        "content-type": "application/json; charset=utf-8"
    },
    "config": {
        "url": "http://localhost:3000/user/login",
        "method": "post",
        "data": "{\"credential\":{\"username\":\"user\"},\"password\":\"pass\"}",
        "headers": {
            "Accept": "application/json, text/plain, */*",
            "Content-Type": "application/json;charset=utf-8"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "baseUrl": "http://localhost:3000",
        "Content-Type": "application/json"
    },
    "request": {}
}


export default user;