import sqlite3

def migrate():
    conn = sqlite3.connect('vahansetu/stations.db')
    cursor = conn.cursor()
    
    print("Initiating Quantum Protocol Migration...")
    
    # 1. Update Stations for Load Balancers
    try:
        cursor.execute('ALTER TABLE stations ADD COLUMN current_load REAL DEFAULT 0.0')
        cursor.execute('ALTER TABLE stations ADD COLUMN predicted_occupancy TEXT')
    except: pass
    
    # 2. Add Infrastructure Telemetry
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS grid_forecast (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            hour INTEGER,
            load_factor REAL,
            price_multiplier REAL
        )
    ''')
    
    conn.commit()
    conn.close()
    print("Quantum Migration Complete.")

if __name__ == '__main__':
    migrate()
