from .connection import get_connection

def recipt_report():
    """
    Returns joined rows: recipt + billing id + menu id
    """
    conn = get_connection()
    rows = conn.execute("""
        SELECT
            r.id AS recipt_id,
            r.recipt_on,
            b.id AS billing_id,
            b.order_by AS billing_order_by,
            m.id AS menu_id,
            m.name AS menu_name
        FROM recipts r
        JOIN billings b ON b.id = r.billing_id
        JOIN menus m ON m.id = r.menu_id
        ORDER BY r.id DESC;
    """).fetchall()
    conn.close()
    return [dict(r) for r in rows]