import sqlite3

def migrate():
    conn = sqlite3.connect('vahansetu/stations.db')
    cursor = conn.cursor()
    
    print("Starting Next-Level Migration...")
    
    # 1. Add Fleet Support
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS fleets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            fleet_name TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS fleet_vehicles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fleet_id INTEGER NOT NULL,
            vehicle_name TEXT NOT NULL,
            vehicle_number TEXT NOT NULL,
            total_kwh REAL DEFAULT 0,
            total_spend REAL DEFAULT 0,
            status TEXT DEFAULT 'idle',
            battery_pct INTEGER DEFAULT 80,
            lat REAL,
            lng REAL
        )
    ''')
    
    # 2. Update Charging Sessions for Fleet
    try:
        cursor.execute('ALTER TABLE charging_sessions ADD COLUMN vehicle_id INTEGER')
    except: pass
    
    conn.commit()
    conn.close()
    print("Migration Complete.")

if __name__ == '__main__':
    migrate()
