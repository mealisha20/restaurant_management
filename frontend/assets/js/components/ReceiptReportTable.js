import { $ } from "../utils/dom.js";

export function renderReceiptReportTable(rows) {
  const body = $("reportTableBody");
  const empty = $("noRows");

  body.innerHTML = "";

  if (!rows || rows.length === 0) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  rows.forEach(i => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-3 py-2 border">${i.receipt_id ?? ""}</td>
      <td class="px-3 py-2 border">
        ${i.billing_order_by ?? ""} <span class="text-xs text-gray-500">(ID: ${i.billing_id ?? ""})</span>
      </td>
      <td class="px-3 py-2 border">
        ${i.menu_name ?? ""} <span class="text-xs text-gray-500">(ID: ${i.menu_id ?? ""})</span>
      </td>
      <td class="px-3 py-2 border">
        ${i.staff_name ?? ""} <span class="text-xs text-gray-500">(ID: ${i.staff_id ?? ""})</span>
      </td>
      <td class="px-3 py-2 border">${i.receipt_on ?? ""}</td>
    `;
    body.appendChild(tr);
  });
}