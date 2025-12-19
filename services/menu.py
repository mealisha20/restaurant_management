from database.menu_queries import (
     db_get_all
    , db_get_one
    , db_create
    , db_update
    , db_delete
)


def service_get_all():
    return db_get_all()

def service_get_one(menu_name):
    return db_get_one(menu_name)

def service_create(data):
    return db_create(data)

def service_update(menu_name, data):
    return db_update(menu_name, data)

def service_delete(menu_name):
    return db_delete(menu_name)
