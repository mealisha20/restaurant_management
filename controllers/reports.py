from core.responses import send_json
from services.report_service import service_get_recipt_report

def get_recipt_report(handler):
    data = service_get_recipt_report()
    return send_json(handler, 200, data)