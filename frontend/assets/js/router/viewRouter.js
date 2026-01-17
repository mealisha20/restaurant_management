import { initBillingController } from "../controllers/billingController.js";
import { initMenuController } from "../controllers/menuController.js";
import { initStaffController } from "../controllers/staffController.js";
import { initReciptController } from "../controllers/reciptController.js";
import { initReciptReportController } from "../controllers/reportController.js";
// Load a view into #app container
async function loadView(path) {
const res = await fetch(path);

// If the view file is missing, show 404 view
    if (!res.ok) {
    const fallback = await fetch("/frontend/pages/404.html").then((r) => r.text());
    document.querySelector("#app").innerHTML = fallback;
    return;
  }
  
  const html = await res.text();
  document.querySelector("#app").innerHTML = html;
}
export async function router() {
  // Normalize path: remove trailing slash (except "/")
  let path = window.location.pathname;
   if (path.length > 1) path = path.replace(/\/$/, "");

  if (path === "/" || path === "/home") {
    await loadView("/frontend/pages/home.html");
  }
else if (path === "/billings") {
    await loadView("/frontend/pages/billings.html");
    initBillingController();
  }
  else if (path === "/menus") {
    await loadView("/frontend/pages/menus.html");
    initMenuController();
  }
  else if (path === "/staffs") {
    await loadView("/frontend/pages/staffs.html");
    initStaffController();
  }
  else if (path === "/recipts") {
    await loadView("/frontend/pages/recipts.html");
    initReciptController();
  }

  else if (path === "/reports/recipts") {
    await loadView("/frontend/pages/report_recipts.html");
    initReciptReportController();
  }
  else {
    await loadView("/frontend/pages/404.html");
  }
}

// Make links work without page reload
export function initRouterEvents() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, "", e.target.href);
      router();
    }
  });

  // Back/forward buttons support
  window.addEventListener("popstate", router);
}