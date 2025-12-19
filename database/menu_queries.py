from datetime import datetime
from .connection import get_connection
def db_get_all():
    conn = get_connection()
    rows = conn.execute("SELECT * FROM menus ORDER BY name ASC").fetchall()
    conn.close()
    return [dict(r) for r in rows]


def db_get_one(menu_no):
    conn = get_connection()
    row = conn.execute("SELECT * FROM menus WHERE no = ?", (menu_no,)).fetchone()
    conn.close()
    return dict(row) if row else None


def db_create(data):
    conn = get_connection()
    now = datetime.now().isoformat()
    cur = conn.execute(
        "INSERT INTO menus ( name, price, rating, created_at) VALUES (?, ?, ?, ?)",
        (data["name"], data["price"], data["rating"], now)
    )
    conn.commit()
    new_no = cur.lastrowid
    conn.close()
    return db_get_one(new_no)


def db_update(menu_no, data):
    conn = get_connection()
    now = datetime.now().isoformat()
    conn.execute(
        "UPDATE menus SET name=?, price=?, rating=?, updated_at=? WHERE no=?",
        (data["name"], data["price"], data["rating"], now, menu_no)
    )
    conn.commit()
    conn.close()
    return db_get_one(menu_no)


def db_delete(menu_no):
    menu = db_get_one(menu_no)
    if not menu:
        return None

    conn = get_connection()
    conn.execute("DELETE FROM menus WHERE no=?", (menu_no,))
    conn.commit()
    conn.close()
    return menu

