## About The Project

Tugas individu backend nodejs harisenin.com

### register customer

Contoh:

```sh
{
    "username" : "yusufhaha",
    "email": "yusufhaha@gmail.com",
    "phone_number" : "0812228232",
    "password": "12341234"
}
```

![register customer](/screenshot/register-customer.png "register customer").

### login authentication

Contoh:

```sh
  {
   "email": "yusufhaha@gmail.com",
   "password": "12341234"
}
```

![login customer account](/screenshot/login-auth.png "login customer account").
![authorization cookie](/screenshot/authorization-cookie.png "authorization cookie").

### get customer

memakai params
![get customer data](/screenshot/get-customer.png "get customer data").

### update customer password

memakai params dan body raw json
contoh:

```sh
  {
   "password": "passwordbaru"
}
```

![update password success](/screenshot/update-password-success.png "update password success").
![update password fail](/screenshot/update-password-fail.png "update password fail").

### update customer profile picture

memakai params dan form-data dengan key image

![update profile picture result](/screenshot/update-profile-pic.png "update profile picture result").
![update profile picture result in imagekit](/screenshot/update-profile-pic-imagekit.png "update profile picture result in imagekit").

### delete customer

memakai params
![delete customer data](/screenshot/delete-customer.png "delete customer data").
