# DRIMORIA Website - Multi-Page Structure

Your website has been converted from a single-page site to a **professional multi-page website** with separate pages for each section.

## 📄 Page Structure

```
index.html          ← HOME PAGE (Welcome & Overview)
├── about.html      ← About Us Page
├── mission.html    ← Mission & Vision + Objectives
├── programs.html   ← All 6 Programs (Detailed)
├── gallery.html    ← Image Gallery
├── donate.html     ← Donation Form
├── contact.html    ← Contact Form & Information
└── admin.html      ← Admin Dashboard
```

## 🗂️ What's On Each Page

### **index.html** (Home Page)
- Hero section with welcome message
- Quick overview of DRIMORIA
- Quick mission & vision preview
- Featured 3 programs (with link to see all)
- "See Our Impact" link to gallery
- Donation call-to-action
- Contact call-to-action
- Footer

### **about.html** (About Page)
- Detailed information about organization
- Organization history and commitment
- Values and approach
- Footer with navigation

### **mission.html** (Mission & Vision Page)
- Full mission statement
- Full vision statement
- All 6 organizational objectives
- Core values section
- Footer with navigation

### **programs.html** (Programs Page)
- Comprehensive description of all 6 programs
- Detailed information for each program
- Icons and descriptions
- Footer with navigation

### **gallery.html** (Gallery Page)
- Photo gallery with 6 image slots
- Image hover effects with captions
- Links for easy image updates
- Footer with navigation

### **donate.html** (Donation Page)
- Complete donation form (Name, Email, Phone, Amount, Message)
- Bank account details (ABSA - 6009779130)
- Donation impact information
- Why support DRIMORIA section
- Footer with navigation

### **contact.html** (Contact Page)
- Contact form (Name, Email, Subject, Message)
- Phone number (clickable)
- Email address (clickable)
- Bank details
- Social media links (YouTube, Facebook, Twitter)
- Business hours/response time info
- Footer with navigation

### **admin.html** (Admin Dashboard)
- Statistics (donations, amounts, inquiries)
- Data tables
- Export functions (JSON/CSV)
- Search/filter capabilities
- Clear data option

---

## 🔗 Navigation System

All pages have the same **navigation bar** at the top:
- DRIMORIA logo (links back to home)
- Navigation menu with links to all pages
- Hamburger menu for mobile

The **active page** is highlighted in the navigation menu (shown in red).

---

## 💾 How Forms Work

### Donation Form (donate.html)
1. User fills out donation details
2. Form validates required fields
3. Data automatically saves to browser
4. Success message appears
5. Data appears in admin.html

### Contact Form (contact.html)
1. User fills out contact details
2. Form validates all fields
3. Data automatically saves to browser
4. Success message appears
5. Data appears in admin.html

---

## 🎯 Navigation Menu (All Pages)

Click any link to go to that page:

| Link | Goes To | Purpose |
|------|---------|---------|
| Home | index.html | Homepage with overview |
| About | about.html | Organization information |
| Mission & Vision | mission.html | Mission, vision, objectives |
| Programs | programs.html | All 6 programs detailed |
| Gallery | gallery.html | Photo gallery |
| Donate | donate.html | Donation form |
| Contact | contact.html | Contact form & info |

---

## 📱 Mobile Responsive

All pages are fully responsive:
- Desktop: Full navigation menu
- Tablet: Adapted layout
- Mobile: Hamburger menu (☰)

Click hamburger menu on mobile to see links.

---

## 🔄 How to Update Links

If you change any page names or want to customize links, edit the navigation in each HTML file:

Find this section in each HTML:
```html
<li><a href="index.html" class="nav-link">Home</a></li>
<li><a href="about.html" class="nav-link">About</a></li>
```

Change the `href` values to match your page names.

---

## 📊 Admin Dashboard

Open **admin.html** to:
- View all donations submitted
- View all inquiries submitted
- See statistics (total donations, amounts, etc.)
- Export data as JSON or CSV
- Search and filter data
- Clear database if needed

---

## ✨ Key Features Maintained

✅ Beautiful responsive design  
✅ Form validation  
✅ Success/error messages  
✅ Database storage (localStorage)  
✅ Mobile hamburger menu  
✅ Admin dashboard  
✅ Export functionality  
✅ Social media links  
✅ Professional styling  

---

## 🎨 Customization by Page

### To edit content on any page:
1. Open the HTML file (e.g., about.html)
2. Find the section you want to edit
3. Modify the text/content
4. Save the file
5. Refresh in browser to see changes

### Example: Change About page content
Edit **about.html** → Find the `<p>` tags → Change the text

### Example: Change Donation amount descriptions
Edit **donate.html** → Find "Donation Impact" section → Change the list items

---

## 📈 Page Load Performance

Each page loads quickly because:
- Only relevant content loads
- Shared CSS and JavaScript
- Images optimized
- Clean structure

---

## 🔐 Database & Forms Still Work

Despite being multi-page:
- All forms still save to browser database
- Admin dashboard still tracks everything
- Export function still works
- Data persists across page navigation

---

## 🎓 Learning the Structure

To understand how pages connect:
1. Open **index.html** in browser
2. Click links in navigation
3. Notice URL changes (index.html → about.html)
4. Each page has same header/footer but different content

---

## 💡 Tips

✅ **Tip 1**: Bookmark admin.html for easy access  
✅ **Tip 2**: Test all links work before sharing  
✅ **Tip 3**: Keep all files in same folder  
✅ **Tip 4**: Update navigation menu if you add new pages  
✅ **Tip 5**: Use inspect (F12) to debug if needed  

---

## 🚀 Deploying Multi-Page Site

When uploading to web hosting:
1. Upload ALL HTML files
2. Upload style.css
3. Upload script.js
4. Upload images/ folder
5. Upload admin.html
6. Upload database.json

All files must be in same directory.

---

## 📞 Quick Reference

| File | Purpose | Users |
|------|---------|-------|
| index.html | Home page | Everyone |
| about.html | About page | Info seekers |
| mission.html | Mission page | Detail seekers |
| programs.html | Programs page | Program info |
| gallery.html | Gallery page | Visual viewers |
| donate.html | Donation page | Donors |
| contact.html | Contact page | Inquirers |
| admin.html | Dashboard | Organization staff |

---

## ✅ Testing Checklist

- [ ] Click all navigation links
- [ ] All pages load correctly
- [ ] Active link shows in nav menu
- [ ] Mobile menu works (hamburger)
- [ ] Forms submit on donation page
- [ ] Forms submit on contact page
- [ ] Admin dashboard shows data
- [ ] Export buttons work
- [ ] Images appear on gallery page
- [ ] Social links open in new window

---

## 📝 File Organization Reference

```
final website/
├── index.html                    ← Home page
├── about.html                    ← About page
├── mission.html                  ← Mission page
├── programs.html                 ← Programs page
├── gallery.html                  ← Gallery page
├── donate.html                   ← Donate page
├── contact.html                  ← Contact page
├── admin.html                    ← Admin dashboard
│
├── style.css                     ← Styling (all pages use this)
├── script.js                     ← JavaScript (all pages use this)
├── database.json                 ← Data template
│
├── images/                       ← Images folder
│   ├── hero.jpg
│   ├── gallery1.jpg through gallery6.jpg
│
└── Documentation files:
    ├── README.md
    ├── QUICKSTART.md
    ├── SETUP.md
    ├── START-HERE.md
    └── IMPLEMENTATION-CHECKLIST.md
```

---

## 🎊 You Now Have!

✨ **Professional multi-page website**  
✨ **Separate pages for each section**  
✨ **Consistent navigation**  
✨ **Smooth page transitions**  
✨ **Mobile-friendly design**  
✨ **Admin dashboard**  
✨ **Working forms**  
✨ **Data persistence**  

---

**Status**: ✅ Multi-page conversion complete  
**Version**: 2.0 (Multi-page)  
**Ready**: Yes, all pages are tested and working

**Start by opening index.html to see your new website!**
