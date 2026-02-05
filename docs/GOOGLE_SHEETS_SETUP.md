# Google Sheets Setup for Lead Tracking (Service Provider Pivot)

**Purpose:** Track lead volume per service to decide which service to provide yourself.

---

## 📊 Leads Sheet Structure

Create a Google Sheet named **"Karnal Leads"** with these columns:

| Column | Description | Example |
|--------|-------------|---------|
| **Timestamp** | Auto-filled when lead comes in | 2026-02-04 14:30:00 |
| **Name** | Customer name | Rajesh Kumar |
| **Phone** | Customer phone | 9876543210 |
| **Service** | Service category | Construction Cost |
| **Service Slug** | Service identifier | civil-construction-cost-karnal |
| **Message** | Requirement details | Need quote for 1200 sq.ft |
| **Budget** | Estimated budget (from form) | ₹2 lakhs |
| **Status** | Lead status | New / Contacted / Converted / Lost |
| **Project Value** | Actual project value (₹) | 150000 |
| **Conversion Date** | Date converted to booking | 2026-02-10 |
| **Vendor Used** | "Self" or vendor name | Self / ABC Contractors |

---

## 🔧 Setup Options

### Option A: Google Apps Script (Free, Recommended)

1. **Create Google Sheet** with columns above
2. **Open Apps Script** (Extensions → Apps Script)
3. **Create webhook endpoint:**

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.service,
    data.serviceSlug,
    data.message || '',
    data.budget || '',
    'New',
    '', // Project Value (filled later)
    '', // Conversion Date (filled later)
    ''  // Vendor Used (filled later)
  ]);
  
  return ContentService.createTextOutput('OK');
}
```

4. **Deploy as web app:**
   - Publish → Deploy as web app
   - Execute as: Me
   - Who has access: Anyone
   - Copy the web app URL

5. **Update LeadForm.astro** to POST to this URL (or use Zapier)

### Option B: Zapier (Free Tier - 100 tasks/month)

1. **Create Zap:**
   - Trigger: Webhook (Catch Hook)
   - Action: Google Sheets (Add Row)

2. **Map fields:**
   - Name → Column A
   - Phone → Column B
   - Service → Column C
   - etc.

3. **Copy webhook URL** and use in form submission

---

## 📈 Projects Sheet (When You Start Providing Services)

Create a second sheet **"Projects"** with these columns:

| Column | Description |
|--------|-------------|
| **Project ID** | Unique ID | PROJ-001 |
| **Customer Name** | From Leads sheet | Rajesh Kumar |
| **Phone** | From Leads sheet | 9876543210 |
| **Service** | Service category | Construction |
| **Project Value** | Total project value (₹) | 150000 |
| **Advance Received** | Advance payment (₹) | 50000 |
| **Labor Cost** | Labor cost (₹) | 60000 |
| **Material Cost** | Material cost (₹) | 40000 |
| **Your Margin** | Project Value - Labor - Material (₹) | 50000 |
| **Status** | In Progress / Completed | In Progress |
| **Start Date** | Project start date | 2026-02-15 |
| **Completion Date** | Project completion date | 2026-03-30 |

---

## 📊 Metrics to Calculate (Per Service, Monthly)

**Formula in Google Sheets:**

```
Lead Count: =COUNTIF(Leads!C:C, "Construction Cost")
Conversion Rate: =COUNTIFS(Leads!C:C, "Construction Cost", Leads!H:H, "Converted") / COUNTIF(Leads!C:C, "Construction Cost")
Average Project Value: =AVERAGEIF(Leads!C:C, "Construction Cost", Leads!I:I)
Total Revenue (Lead Gen): =COUNTIFS(Leads!C:C, "Construction Cost", Leads!K:K, "<>Self") * 200
Total Revenue (Service Provider): =SUMIF(Projects!D:D, "Construction", Projects!E:E)
Your Margin (Service Provider): =SUMIF(Projects!D:D, "Construction", Projects!I:I)
```

---

## 🎯 Decision Formula

**In Google Sheets, add a "Decision" column:**

```
=IF(AND(
  Lead Count >= 10,
  Conversion Rate >= 0.3,
  Average Project Value >= 50000
), "START PROVIDING", "KEEP AS LEAD GEN")
```

---

## 🔄 Workflow

1. **Lead comes in** → Auto-added to Leads sheet (Status: New)
2. **You contact lead** → Update Status to "Contacted"
3. **Lead converts** → Update Status to "Converted", add Project Value, Conversion Date
4. **If you provide service** → Add row to Projects sheet, update Vendor Used = "Self"
5. **If vendor provides** → Update Vendor Used = vendor name

---

## 📝 Notes

- **Budget field** is optional but helps estimate Project Value
- **Project Value** should be filled after you talk to customer
- **Vendor Used = "Self"** means you're providing the service
- **Track monthly** to see which service has highest volume/value