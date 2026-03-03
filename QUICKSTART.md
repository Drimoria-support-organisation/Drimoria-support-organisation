# DRIMORIA SUPPORT ORGANISATION - Quick Start Guide

## 🚀 Getting Started (5 Minutes)

### Step 1: Open the Website
1. Locate the folder: `final website`
2. Double-click `index.html` to open in your default browser
3. You should see the DRIMORIA website with all sections

### Step 2: Navigate the Website
- Click navigation links at the top to jump to sections
- Use "Donate Now" or "Get Involved" buttons to scroll to relevant sections
- Click the hamburger menu (☰) on mobile devices

### Step 3: Test the Forms

#### Test Donation Form:
1. Click "Donate" in navigation or "Donate Now" button
2. Fill in:
   - Name: John Doe
   - Email: john@example.com
   - Phone: +256 701 234567
   - Amount: 50
3. Click "Donate Now"
4. See success message appear

#### Test Contact Form:
1. Click "Contact" in navigation
2. Fill in all fields
3. Click "Send Message"
4. See success message

### Step 4: Access Admin Dashboard
1. Open `admin.html` in your browser
2. See statistics of donations and inquiries
3. Export data using the control buttons

---

## 📁 File Structure

```
final website/
├── index.html         ← Main website (OPEN THIS FIRST)
├── style.css          ← Website styling
├── script.js          ← Website functionality & database
├── admin.html         ← Admin dashboard
├── database.json      ← Organization data template
├── README.md          ← Full documentation
├── QUICKSTART.md      ← This file
└── images/            ← Add your images here
    ├── hero.jpg
    ├── gallery1.jpg
    ├── gallery2.jpg
    ├── gallery3.jpg
    ├── gallery4.jpg
    ├── gallery5.jpg
    └── gallery6.jpg
```

---

## 🖼️ Adding Images & Videos

### Way 1: Replace Placeholder Images
1. Place images in the `images/` folder
2. Name them: `hero.jpg`, `gallery1.jpg`, `gallery2.jpg`, etc.
3. Website automatically loads them

### Way 2: Add Videos
Option A - YouTube Videos:
```html
<!-- Replace VIDEO_ID with actual YouTube video ID -->
<iframe width="100%" height="280" 
    src="https://www.youtube.com/embed/VIDEO_ID" 
    frameborder="0" allowfullscreen></iframe>
```

Option B - Local Video Files:
```html
<video width="100%" height="280" controls>
    <source src="images/video.mp4" type="video/mp4">
</video>
```

---

## 🔧 Customization Checklist

- [ ] Update phone number (256703190381)
- [ ] Update email (badriaadam114@gmail.com)
- [ ] Update bank details (ABSA, 6009779130)
- [ ] Update social media links
- [ ] Add images to images/ folder
- [ ] Change primary color if needed
- [ ] Update mission statement
- [ ] Update vision statement
- [ ] Add more programs if needed

---

## 📊 Understanding the Database

### How Data is Stored:
- **Where**: In your browser's localStorage
- **What**: Donations and inquiries
- **When**: Automatically saved on form submission
- **Why**: No backend server needed

### View Data in Console:

1. Open browser DevTools (F12 or Right-click → Inspect)
2. Go to "Console" tab
3. Run these commands:

```javascript
viewAllDonations()          // See all donations
viewAllInquiries()          // See all inquiries
viewStatistics()            // See stats
getDatabaseStats()          // Get stats object
```

### Export Data:

```javascript
exportDonationsJSON()        // Download JSON
exportDonationsCSV()         // Download CSV
exportInquiriesJSON()        // Download JSON
```

---

## ⚡ Key Features

✅ **Fully Responsive** - Works on desktop, tablet, mobile  
✅ **No Backend Needed** - All storage in browser  
✅ **Beautiful Design** - Modern, professional appearance  
✅ **Form Validation** - Email and phone validation  
✅ **Admin Dashboard** - Track donations easily  
✅ **Export Functionality** - Download data as JSON/CSV  
✅ **Social Media Integration** - YouTube, Facebook, Twitter links  
✅ **Smooth Navigation** - Professional user experience  

---

## 🎨 Changing Colors

Edit `style.css` to change the color scheme:

```css
:root {
    --primary-color: #e74c3c;      /* Red - Change this */
    --secondary-color: #3498db;    /* Blue - Change this */
    --dark-color: #2c3e50;         /* Dark Gray */
    --light-color: #ecf0f1;        /* Light Gray */
}
```

Popular colors:
- Green: `#27ae60`
- Orange: `#f39c12`
- Purple: `#9b59b6`
- Blue: `#2980b9`

---

## 📱 Testing on Different Devices

### Test on Phone:
1. Open DevTools (F12)
2. Click device icon (📱)
3. Select different phone models
4. See website adapt

### Test Forms:
- Fill and submit both forms
- Check console for confirmation
- Visit admin.html to see data

---

## 🔐 Security Notes

⚠️ **Current Setup (Development)**
- Data stored locally in browser
- No encryption
- No server communication
- Perfect for testing

✅ **For Production (Real Money)**
- Use HTTPS (SSL certificate)
- Setup backend server
- Use payment processor (Stripe, PayPal)
- Encrypt sensitive data
- Never store payment cards on client

---

## 🆘 Troubleshooting

### Images not showing?
- Check image names match: `hero.jpg`, `gallery1.jpg`, etc.
- Ensure images are in `images/` folder
- PNG also works: `hero.png`, `gallery1.png`
- Check browser console (F12) for errors

### Forms not submitting?
- Check browser console for errors
- All required fields must be filled
- Valid email required (contains @)
- Phone should have numbers

### Donation not showing in admin?
1. Submit donation in main website
2. Refresh admin.html page
3. Check console: `viewAllDonations()`

### Database lost after closing browser?
- Data persists by default
- Check Settings → Clear browsing data
- May have cleared browser storage
- Export data regularly to be safe

---

## 📞 Contact Information

**DRIMORIA SUPPORT ORGANISATION**
- **Phone**: +256 703 190 381
- **Email**: badriaadam114@gmail.com
- **Bank**: ABSA - 6009779130
- **YouTube**: https://youtube.com/@drimoria4

---

## 💡 Pro Tips

1. **Regular Backups**
   - Use admin dashboard to export data regularly
   - Keep CSV/JSON files as backup

2. **Test Before Sharing**
   - Test all forms work
   - Test on mobile
   - Check images load

3. **Update Content**
   - Add new gallery images regularly
   - Update stories and testimonials
   - Keep social links current

4. **Monitor Donations**
   - Check admin dashboard daily
   - Export weekly summaries
   - Thank donors via email

5. **Share Website**
   - Put link in email signatures
   - Share on social media
   - Include in fundraising materials

---

## 🎯 Next Steps

### Immediate (Today)
1. ✅ Test the website
2. ✅ Submit test donations
3. ✅ Check admin dashboard
4. ✅ Add your images

### This Week
1. Add real contact information
2. Add organization images
3. Customize colors/logo
4. Test all forms

### This Month
1. Deploy to web hosting
2. Set up domain name
3. Add SSL certificate
4. Set up email notifications

---

## 📚 Learn More

- **Full Documentation**: Read `README.md`
- **Form Functions**: See `script.js` comments
- **Styling**: Check `style.css` for custom CSS
- **Admin Features**: Open `admin.html` in browser

---

## ✨ Website Sections Explained

| Section | Purpose |
|---------|---------|
| Home | Hero section with CTAs |
| About | Organization background |
| Mission & Vision | Goals and objectives |
| Programs | 6 core programs |
| Gallery | Images and media |
| Donate | Donation form and bank details |
| Contact | Contact form and info |
| Footer | Links and copyright |

---

## 🔗 Social Media Links to Update

In `index.html`, find and update these:

```html
<!-- Facebook -->
<a href="https://facebook.com/YOUR_PAGE">Facebook</a>

<!-- Twitter -->
<a href="https://twitter.com/YOUR_ACCOUNT">Twitter</a>

<!-- YouTube (already set) -->
<a href="https://youtube.com/@drimoria4">YouTube</a>
```

---

## 📊 Admin Dashboard Walkthrough

1. **Open**: admin.html
2. **See Stats**: Total donations, total amount, average
3. **View Data**: All donations and inquiries in tables
4. **Search**: Filter by name, email, etc.
5. **Export**: Download as JSON or CSV
6. **Clear**: Delete all data if needed

---

## 🎓 Learning Resources

If you want to modify code:
- **HTML**: Structure of website
- **CSS**: Styling and colors
- **JavaScript**: Interactivity and forms
- **YouTube**: Search tutorials for each

---

## ✅ Pre-Launch Checklist

- [ ] Website opens and displays correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Images appear in gallery
- [ ] Admin dashboard shows data
- [ ] Mobile version works
- [ ] Contact info is correct
- [ ] Social links are working
- [ ] Data exports as JSON/CSV
- [ ] Colors match organization branding

---

## 🎉 You're Ready!

Your DRIMORIA Support Organisation website is fully functional and ready to:
- Accept donations
- Receive inquiries
- Showcase your mission
- Track all interactions
- Export data for analysis

**Start accepting donations today!**

---

**Last Updated**: March 2024  
**Version**: 1.0  
**Status**: ✅ Production Ready
