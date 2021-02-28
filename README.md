## Vehicle Management System

### API Setup
First setup will take while, because of database import.
You can cancel import with ``ctrl + c`` if you don't want to wait all data to be imported, 
and next run will up without database import (in case that at least one row was inserted).

```
cd server

yarn install

yarn docker-up

yarn start:dev
```

### WEB Setup
```
cd web

yarn install

yarn run serve
```
Web appliacation is on http://localhost:8080/vehicle
