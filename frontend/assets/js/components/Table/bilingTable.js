import { $ } from "../utils/dom.js";
import { editBilling, deleteBillingAction } from "../controllers/billingController.js";

// Renders the list of students into an HTML table
export function renderBillingTable(billings) {
  // Get references to the table body where rows will be inserted and the 'no students' message
  const body = $("billingsTableBody");
  const noBillings = $("noBillings");

  // Clear any existing rows from the table body before rendering new data
  body.innerHTML = "";

  // Check if the student array is empty
  if (billings.length === 0) {
    // If no students are found, display the 'no students' message and stop execution
    noBillings.style.display = "block";
    return;
  }

  // If students exist, hide the 'no students' message
  noBillings.style.display = "none";

  // Iterate over each student object in the provided array
  billings.forEach(billing => {
    // Create a new table row element for the current student
    const row = document.createElement("tr");
    row.className = "border-b"; // Add styling class (likely Tailwind CSS)

    // Populate the row with dynamic HTML content using a template literal
    row.innerHTML = `
      <td class="px-3 py-2">${billing.id}</td>
      <td class="px-3 py-2">${billing.name}</td>
      <td class="px-3 py-2">${billing.email}</td>
      <td class="px-3 py-2">${billing.course}</td>
      <td class="px-3 py-2">${billing.year}</td>
      <td class="px-3 py-2 flex space-x-2">
        <!-- Buttons are created with data attributes holding the student ID -->
        <button class="bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-3 rounded"
          data-edit="${billing.id}">Edit</button>

        <button class="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          data-delete="${billing.id}">Delete</button>
      </td>
    `;

    // --- Attach event listeners to the newly created buttons ---

    // Find the 'Edit' button within this specific row and attach a click handler
    // When clicked, call the editStudent function with the correct student ID
    row.querySelector("[data-edit]").onclick = () => editStudent(student.id);
    
    // Find the 'Delete' button within this specific row and attach a click handler
    // When clicked, call the deleteStudentAction function with the correct student ID
    row.querySelector("[data-delete]").onclick = () => deleteStudentAction(student.id);

    // Append the fully constructed row to the table body
    body.appendChild(row);
  });
}