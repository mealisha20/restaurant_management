// Main entrypoint for frontend
 import { initStudentController } from "./controllers/billingController.js";
import { router } from "./router/viewRouter.js";

// Initialize app on page load
window.addEventListener("DOMContentLoaded", () => {
  router();
   initbillingController();
   initmenuController();
   initstaffController();
});