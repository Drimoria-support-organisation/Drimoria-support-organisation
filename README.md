# DRIMORIA SUPPORT ORGANISATION - Website Documentation

## Overview
A fully functional, responsive website for DRIMORIA SUPPORT ORGANISATION - a charity dedicated to empowering vulnerable girls and women, supporting orphans, and providing care to street children.

**Motto: "RESTORING HOPE, TRANSFORMING LIVES"**

---

## Project Structure

```
final website/
│
├── index.html          # Main website file
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality and database
├── database.json       # Organization data and templates
├── README.md          # This file
│
└── images/            # Image folder
    ├── hero.jpg       # Hero section background image
    ├── gallery1.jpg   # Gallery image 1
    ├── gallery2.jpg   # Gallery image 2
    ├── gallery3.jpg   # Gallery image 3
    ├── gallery4.jpg   # Gallery image 4
    ├── gallery5.jpg   # Gallery image 5
    └── gallery6.jpg   # Gallery image 6
```

---

## Features

### 1. **Navigation**
- Sticky navigation bar with smooth scrolling
- Mobile-friendly hamburger menu
- Quick access to all sections

### 2. **Sections**

#### Home Section
- Hero banner with call-to-action buttons
- Organization welcome message

#### About Section
- Organization background and information

#### Mission & Vision Section
- Clear mission statement
- Vision statement
- 6 organizational objectives with checkmarks

#### Programs Section
- 6 main programs with icons
- Descriptions of each initiative
- Hover effects and responsive layout

#### Gallery Section
- Image gallery with 6 items
- Overlay effects on hover
- Responsive grid layout

#### Donation Section
- Professional donation form (Name, Email, Phone, Amount, Message)
- Bank account information (ABSA - 6009779130)
- Donation impact information showing what different amounts can achieve
- Form validation and success messages

#### Contact Section
- Contact form (Name, Email, Subject, Message)
- Contact information (Phone, Email, Bank details)
- Social media links (YouTube, Facebook, Twitter)
- Form validation

#### Footer
- Quick links
- Organization information
- Contact details
- Copyright information

### 3. **Database System**
- **Client-side database** using browser localStorage
- Stores donations and inquiries
- Automatic save/load functionality
- No backend required

### 4. **Form Handling**
- Email validation
- Phone validation
- Required field validation
- Success/error alerts
- Auto form reset after submission
- Data persistence in browser

### 5. **Mobile Responsive**
- Works on desktop, tablet, and mobile
- Hamburger menu for mobile
- Responsive grid layouts
- Touch-friendly buttons

---

## How to Use the Website

### 1. **Adding Images**

Add your images to the `images/` folder:
- For the hero section: rename and place as `hero.jpg`
- For gallery: add as `gallery1.jpg`, `gallery2.jpg`, etc. (up to `gallery6.jpg`)

The website will automatically display replacement images if files are missing.

### 2. **Adding Videos**

To add YouTube videos to the gallery or other sections, modify the `index.html` file:

```html
<div class="gallery-item">
    <iframe width="100%" height="280" src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" allowfullscreen></iframe>
    <div class="gallery-overlay">
        <p>Video Title</p>
    </div>
</div>
```

### 3. **Updating Contact Information**

All contact information is displayed in the HTML. To update:
- **Phone**: Search for "256703190381" in `index.html`
- **Email**: Search for "badriaadam114@gmail.com"
- **Bank**: Search for "ABSA" and account number
- **Social Media**: Update the YouTube, Facebook, and Twitter URLs

### 4. **Customizing Colors**

Edit the color variables in `style.css`:

```css
:root {
    --primary-color: #e74c3c;      /* Red */
    --secondary-color: #3498db;    /* Blue */
    --dark-color: #2c3e50;         /* Dark Gray */
    --light-color: #ecf0f1;        /* Light Gray */
}
```

---

## Admin Console Commands

Open browser developer tools (F12) and use these commands in the console:

### View Data
```javascript
viewAllDonations()           // View all donations in a table
viewAllInquiries()          // View all inquiries in a table
viewStatistics()            // View donation stats
```

### Export Data
```javascript
exportDonationsJSON()        // Download donations as JSON
exportInquiriesJSON()        // Download inquiries as JSON
exportDonationsCSV()         // Download donations as CSV
```

### Get Statistics
```javascript
getDatabaseStats()           // Returns statistics object
```

### Advanced
```javascript
database.getDonations()      // Get donations array
database.getInquiries()      // Get inquiries array
clearDatabase(true)          // Clear all data (DESTRUCTIVE)
```

---

## Donation System

### How It Works
1. User fills out donation form with:
   - Full name
   - Email address
   - Phone number
   - Donation amount (in USD)
   - Optional message

2. Data is validated and stored in browser storage
3. User receives confirmation message
4. In production, an email would be sent automatically

### Bank Transfer Option
Users can also donate directly via bank transfer:
- **Bank Name**: ABSA
- **Account Number**: 6009779130

---

## Contact & Inquiry System

### How It Works
1. User submits contact form with:
   - Name
   - Email
   - Subject
   - Message

2. Data is validated and stored
3. User receives confirmation
4. In production, organization receives email notification

---

## Technical Details

### Database Storage
- Uses browser's **localStorage** API
- Data persists between sessions
- No server required
- Can be exported as JSON or CSV

### JavaScript Functions

#### Form Handling
- `handleDonationSubmit()` - Process donation form
- `handleContactSubmit()` - Process contact form

#### Navigation
- `navigateTo(sectionId)` - Scroll to section
- `updateActiveNavLink()` - Update nav highlighting

#### Utilities
- `showAlert()` - Display notifications
- `validateEmail()` - Email validation
- `validatePhone()` - Phone validation
- `formatCurrency()` - Format numbers as currency

---

## Security Notes

⚠️ **Important for Production:**

1. **Never store sensitive payment data** on the client-side
2. Use a **backend server** for:
   - Payment processing
   - Email notifications
   - Data security
   - PCI compliance

3. Recommended backend stack:
   - Node.js/Express
   - PHP/Laravel
   - Python/Django
   - Or any payment provider API (Stripe, PayPal, etc.)

---

## Customization Guide

### 1. Change Organization Name
Search for "DRIMORIA SUPPORT ORGANISATION" and replace throughout HTML.

### 2. Update Mission/Vision
Edit the text in the Mission & Vision section in `index.html`.

### 3. Add More Programs
Add new program cards in the Programs section:

```html
<div class="program-card">
    <div class="program-icon">🎯</div>
    <h3>Program Name</h3>
    <p>Program description goes here.</p>
</div>
```

### 4. Change Color Scheme
Modify CSS variables in `style.css` `:root` section.

### 5. Add More Gallery Items
Add more gallery items following the same pattern in the Gallery section.

---

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

---

## Performance Tips

1. **Optimize Images**: Compress images using tools like TinyPNG
2. **Use WebP Format**: Faster loading for modern browsers
3. **Lazy Loading**: Images load only when visible
4. **Minify CSS/JS**: In production, minify code files
5. **Caching**: Enable browser caching headers on server

---

## Support & Maintenance

### Regular Updates
- Update social media links
- Add new programs/events
- Update gallery with new images
- Monitor donations and inquiries

### Backup Data
Use console commands to export data regularly:
```javascript
exportDonationsCSV()
exportInquiriesJSON()
```

### Clear Old Data
```javascript
clearDatabase(true)  // Use with caution!
```

---

## Next Steps for Production

1. **Set up a backend server** for payment processing and emails
2. **Implement SSL certificate** for HTTPS
3. **Add email service** (SendGrid, Mailgun, etc.)
4. **Integrate payment gateway** (Stripe, PayPal)
5. **Set up analytics** (Google Analytics)
6. **Configure CDN** for faster image delivery
7. **Add form validation** on backend
8. **Implement user accounts** for donors
9. **Add donation tracking** dashboard
10. **Set up regular backups**

---

## Contact Information

**DRIMORIA SUPPORT ORGANISATION**
- 📞 Phone: +256 703 190 381
- 📧 Email: badriaadam114@gmail.com
- 🏦 Bank: ABSA - 6009779130
- 🎥 YouTube: https://youtube.com/@drimoria4

---

## License & Usage

This website is provided for DRIMORIA SUPPORT ORGANISATION's use.
For modifications, feature requests, or technical support, contact the organization.

---

**Last Updated**: March 2024
**Version**: 1.0
**Status**: Fully Functional
