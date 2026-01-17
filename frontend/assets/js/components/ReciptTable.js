import { $ } from "../utils/dom.js";
import { deleteReciptAction } from "../controllers/reciptController.js";

export function renderReciptTable(recipts) {
  const body = $("reciptsTableBody");
  const empty = $("noRecipts");

  body.innerHTML = "";

  if (!recipts || recipts.length === 0) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  recipts.forEach(r => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="px-3 py-2 border">${r.id}</td>
      <td class="px-3 py-2 border">${r.billing_id}</td>
      <td class="px-3 py-2 border">${r.menu_id}</td>
      <td class="px-3 py-2 border">${r.staff_id}</td>
      <td class="px-3 py-2 border">${r.recipt_on ?? ""}</td>
      <td class="px-3 py-2 border">
        <button class="text-red-600 underline" data-del="${r.id}">Delete</button>
      </td>
    `;
    body.appendChild(tr);
  });

  body.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => deleteReciptAction(Number(btn.dataset.del)));
  });
}