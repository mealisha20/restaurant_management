Great question — and this is actually an important teaching moment for your billings 👍
You did nothing wrong by asking this.

⸻

Short answer (the intuition)

CSV is raw data → PDF is layout.

That difference forces two very different approaches.

⸻

Why CSV can be downloaded directly 📄

CSV export is pure data:

id,order_by,total_items,total_amount
1,Aarav Sharma,aarav@gmail.com,2025
2,Priya Verma,priya@gmail.com,2024

So we can:
	1.	Convert JS objects → ensure strings
	2.	Create a Blob
	3.	Force a browser download

👉 No styling
👉 No layout
👉 No rendering

That’s why CSV feels simple and instant.

⸻

Why PDF is different 🧠

A PDF is not data, it is a visual document.

It needs:
	•	Fonts
	•	Column widths
	•	Page size (A4 / Letter)
	•	Line breaks
	•	Tables
	•	Wrapping
	•	Pagination

Browsers cannot magically convert JSON → PDF.

So you have 3 real options:

⸻

Option 1 (what you used): Print current page → Save as PDF ✅

window.print();

Why this is actually GOOD
	•	Uses existing HTML + CSS
	•	WYSIWYG (what you see is what you get)
	•	No external libraries
	•	Very easy for billings to understand
	•	Zero backend changes

This is why many internal tools use this exact approach.

💡 You didn’t “hack” it — you used the browser as a renderer.

⸻

Option 2: Client-side PDF libraries (more complex)

Libraries like:
	•	jsPDF
	•	pdfmake
	•	html2pdf

Example idea:

html2pdf().from(element).save();

Problems for a college project
	•	Large libraries
	•	Font issues
	•	Table alignment bugs
	•	Harder to explain
	•	More magic, less learning

👉 Overkill for what you’re teaching.

⸻

Option 3: Backend-generated PDF (real-world, but advanced)

Flow:

Frontend → API → Server renders PDF → downloads file

Used in:
	•	Invoices
	•	Legal documents
	•	Certificates

But this requires:
	•	Backend PDF engines
	•	Templates
	•	Streaming responses

❌ Way too much for this stage.
