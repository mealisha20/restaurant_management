# controllers/recipts.py
# Handlers are responsible for dealing with HTTP details (headers, body, methods)

from core.responses import send_json, send_404
from core.request import parse_json_body
from services.recipt_service import (
    service_get_all,
    service_get_one,
    service_create,
    service_delete
)

def get_all_recipts(handler):
    return send_json(handler, 200, service_get_all())

def get_recipt(handler, recipt_id):
    recipt = service_get_one(recipt_id)
    return send_json(handler, 200, recipt) if recipt else send_404(handler)

def create_recipt(handler):
    data = parse_json_body(handler)
    new_recipt = service_create(data)
    return send_json(handler, 201, new_recipt)

def delete_recipt(handler, recipt_id):
    deleted = service_delete(recipt_id)
    return send_json(handler, 200, {"deleted": True}) if deleted else send_404(handler)