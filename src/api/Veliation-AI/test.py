db_host = 'database-1.c3ww44kcayjx.ap-south-1.rds.amazonaws.com'
db_name = 'database-1'
db_user = 'postgres'
db_password = 'datascience'
import psycopg2
# Establish a connection to the RDS database
conn = psycopg2.connect(
    host=db_host,
    user=db_user,
    password=db_password
)    
    # Open a cursor
cur = conn.cursor()

# Execute a simple test query
cur.execute("SELECT version();")

# Fetch and print the result
version = cur.fetchone()
print("✅ Connected to PostgreSQL RDS")
print("PostgreSQL version:", version)
conn.close()
