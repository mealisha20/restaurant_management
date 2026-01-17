import { apiGetReciptReport } from "../services/reportService.js";
import { renderReciptReportTable } from "../components/ReciptReportTable.js";
import { $ } from "../utils/dom.js";

export function initReciptReportController() {
  loadReport();
}

async function loadReport() {
  const spinner = $("loadingSpinner");
  const table = $("reportTableContainer");

  spinner.style.display = "block";
  table.style.display = "none";
  const rows = await apiGetReciptReport();
  renderReciptReportTable(rows);

  spinner.style.display = "none";
  table.style.display = "block";
}