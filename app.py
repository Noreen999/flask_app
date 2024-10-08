from flask import Flask, render_template, request, redirect, url_for, flash
import psycopg2

app = Flask(__name__)

# Function to create a database connection
def create_connection():
    try:
        # Replace with your actual database credentials
        conn = psycopg2.connect(
            dbname='park_db',      # Database name from docker-compose.yml
            user='postgres',       # Use 'postgres' as the username (defined in docker-compose.yml)
            password='noor',       # Use 'noor' as the password (defined in docker-compose.yml)
            host='db',             # Docker service name 'db', not 'localhost'
            port='5432'            # PostgreSQL default port
        )
        print("Database connection successful!")
        return conn
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None


# Route for the dashboard
@app.route('/')
def dashboard():
    return render_template('dashboard.html')

# Route for the login page
@app.route('/login')
def login():
    return render_template('login.html')

# Route for the registration page
@app.route('/register')
def register():
    return render_template('reg.html')

# Route for the data form page
@app.route('/data-form')
def data_form():
    return render_template('dfoam.html')

# Testing database connection
@app.route('/db-test')
def db_test():
    conn = create_connection()
    if conn:
        conn.close()  # Close the connection after checking
        return "Connected to the database!"
    else:
        return "Failed to connect to the database."

if __name__ == '__main__':
    app.run(debug=True)
