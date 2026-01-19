// frontend/assets/js/components/ProfilesTable.js
import { $ } from "../utils/dom.js";

export function renderProfilesTable(billings) {
  const body = $("profilesTableBody");
  const noINFOs = $("noProfiles");

  if (!body) return;

  body.innerHTML = "";

  if (!billings || billings.length === 0) {
    if (noINFOs) noINFOs.style.display = "block";
    return;
  }

  if (noINFOs) noINFOs.style.display = "none";

  billings.forEach((b) => {
    const tr = document.createElement("tr");
    tr.className = "border-b";

    tr.innerHTML = `
      <td class="px-3 py-2">${b.id}</td>

      <td class="px-3 py-2">
        <a href="/infos/${b.id}" data-link class="text-blue-600 hover:underline font-medium">
          ${b.order_by}
        </a>
      </td>

      <td class="px-3 py-2">${b.total_items}</td>
      <td class="px-3 py-2">${b.total_amount}</td>

      <td class="px-3 py-2">
        <a href="/infos/${b.id}" data-link
          class="inline-flex items-center justify-center px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700">
          View
        </a>
      </td>
    `;

    body.appendChild(tr);
  });
}