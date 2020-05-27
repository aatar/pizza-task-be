# Pizza Task Backend

## Getting started

The following instructions will set the development environment in your local machine, as well as let you run locally an instance of the system.

### Steps

1. Clone the repository or download source code:

	```
	$ git clone https://github.com/aatar/pizza-task-be.git
	```
	

2. Install PostgreSQL
	#### Mac OS X
	Follow these steps: https://thecodersblog.com/PostgreSQL-PostGIS-installation/

	#### Ubuntu
	Follow these steps: https://tecadmin.net/install-postgresql-server-on-ubuntu/


3. Create a role with a password.


4. Create a database for development and another one for testing. Optionally, you can create a database for production.


5. Create a .env file in the root of the project, with the following data:
    ```
	DB_HOST=localhost
    DB_PORT=5432 // or the port you use for postgres
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_NAME=database_name_production
    DB_NAME_DEV=database_name_development
    DB_NAME_TEST=database_name_testing
	```


6. Install node modules:
    ```
	$ npm install
	```


7. Run the migrations for development and testing:
	```
	$ npm run migrations
    $ npm run migrations-test
	```


8. Start the server:
	```
	$ npm start
	```


9. You can also run the tests:
	```
	$ npm test
	```
