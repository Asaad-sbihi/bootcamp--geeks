
import psycopg2

def get_connection():
    return psycopg2.connect(
        dbname="restaurant",
        user="postgres",
        password="Asaad  123",
        host="localhost"
    )
