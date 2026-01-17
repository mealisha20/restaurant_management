# services/recipt_service.py
# Business logic for recipts (no HTTP here)

from database.recipt_queries import (
    recipts_get_all,
    recipts_get_one,
    recipts_create,
    recipts_delete
)

def service_get_all():
    return recipts_get_all()

def service_get_one(recipt_id):
    return recipts_get_one(recipt_id)

def service_create(data):
    return recipts_create(data)

def service_delete(recipt_id):
    return recipts_delete(recipt_id)