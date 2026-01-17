from datetime import datetime
from .connection import get_connection
# -----------------------------
# reciptS CRUD
# -----------------------------

def recipts_get_all():
    conn = get_connection()
    rows = conn.execute("SELECT * FROM recipts ORDER BY id DESC").fetchall()
    conn.close()
    return [dict(r) for r in rows]

def recipts_get_one(recipt_id: int):
    conn = get_connection()
    row = conn.execute("SELECT * FROM recipts WHERE id = ?", (recipt_id,)).fetchone()
    conn.close()
    return dict(row) if row else None

def recipts_create(data: dict):
    """
    Expected data:
      - billing_id (int)
      - menu_id (int)
      - staff_id (int)
      - recipt_on (optional)
    """
    conn = get_connection()
    now = datetime.now().isoformat()
    recipt_on = data.get("recipt_on") or now

    cur = conn.execute(
        "INSERT INTO recipts (billing_id, menu_id, staff_id, recipt_on, created_at) VALUES (?, ?, ?, ?, ?)",
        (data["billing_id"], data["menu_id"], data["staff_id"], recipt_on, now)
    )
    conn.commit()
    new_id = cur.lastrowid
    conn.close()
    return recipts_get_one(new_id)

def recipts_delete(recipt_id: int):
    recipt = recipts_get_one(recipt_id)
    if not recipt:
        return None

    conn = get_connection()
    conn.execute("DELETE FROM recipts WHERE id=?", (recipt_id,))
    conn.commit()
    conn.close()
    return recipt


