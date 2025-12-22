// Base API URL from env.js
const API_MENUS_URL = window.ENV.API_MENUS_URL;

// Helper: safely parse JSON or return null
async function safeJson(res) {
  try {
    return await res.json();
  } catch (_) {
    return null;
  }
}

// Fetch all students
export async function apiGetAll() {
  const res = await fetch(API_MENUS_URL);
  if (!res.ok) return [];
  return safeJson(res);
}
// Fetch one student by ID
export async function apiGetOne(id) {
  const res = await fetch(`${API_MENUS_URL}/${id}`);
  if (!res.ok) return null;
  return safeJson(res);
}

// Create a new student
export function apiCreate(data) {
  return fetch(API_MENUS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

// Update a student
export function apiUpdate(id, data) {
  return fetch(`${API_MENUS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

// Delete a student
export function apiDelete(id) {
  return fetch(`${API_MENUS_URL}/${id}`, { method: "DELETE" });
}