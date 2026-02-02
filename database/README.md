# Database Setup

1. ## Install PostgreSQL
   - Download and install PostgreSQL from the official website: https://www.postgresql.org/download/

2. ## Create a database
   - Open the PostgreSQL command line tool (psql) or a GUI tool like pgAdmin.
   - Create a new database for this project. You can use the following command in psql:
     ```sql
     CREATE DATABASE your_db_name;
     ```

3. ## Create a user
   - It is recommended to create a new user for this project. You can use the following command in psql:
     ```sql
     CREATE USER your_db_user WITH PASSWORD 'your_db_password';
     ```

4. ## Grant privileges
   - Grant all privileges on the new database to the new user:
     ```sql
     GRANT ALL PRIVILEGES ON DATABASE your_db_name TO your_db_user;
     ```

5. ## Create tables
   - Connect to the new database:
     ```sql
     \c your_db_name
     ```
   - Run the `database.sql` script to create the necessary tables:
     ```sql
     \i path/to/your/project/database/database.sql
     ```

6. ## Update .env file
   - Open the `.env` file in the `backend` directory.
   - Replace the placeholder values with your actual database credentials:
     ```
     DB_NAME=your_db_name
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     ```
