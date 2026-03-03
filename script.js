/* ============================================
   DRIMORIA SUPPORT ORGANISATION - JAVASCRIPT
   ============================================ */

// Initialize database on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeDatabase();
    setupEventListeners();
    loadDtaFromStorage();
});

/* ============================================
   DATABASE FUNCTIONS
   ============================================ */

// Database object for managing donations and inquiries
const database = {
    donations: [],
    inquiries: [],
    
    // Save to localStorage
    save: function() {
        localStorage.setItem('drimoria_donations', JSON.stringify(this.donations));
        localStorage.setItem('drimoria_inquiries', JSON.stringify(this.inquiries));
    },
    
    // Load from localStorage
    load: function() {
        const donations = localStorage.getItem('drimoria_donations');
        const inquiries = localStorage.getItem('drimoria_inquiries');
        
        if (donations) this.donations = JSON.parse(donations);
        if (inquiries) this.inquiries = JSON.parse(inquiries);
    },
    
    // Add donation
    addDonation: function(donation) {
        donation.id = Date.now();
        donation.date = new Date().toLocaleDateString();
        this.donations.push(donation);
        this.save();
        return donation;
    },
    
    // Add inquiry
    addInquiry: function(inquiry) {
        inquiry.id = Date.now();
        inquiry.date = new Date().toLocaleDateString();
        this.inquiries.push(inquiry);
        this.save();
        return inquiry;
    },
    
    // Get all donations
    getDonations: function() {
        return this.donations;
    },
    
    // Get all inquiries
    getInquiries: function() {
        return this.inquiries;
    },
    
    // Get statistics
    getStatistics: function() {
        const totalDonations = this.donations.length;
        const totalAmount = this.donations.reduce((sum, d) => sum + parseFloat(d.amount || 0), 0);
        
        return {
            totalDonations,
            totalAmount,
            averageDonation: totalDonations > 0 ? (totalAmount / totalDonations).toFixed(2) : 0,
            totalInquiries: this.inquiries.length
        };
    }
};

// Initialize database
function initializeDatabase() {
    database.load();
}

// Load data from storage and display on page
function loadDtaFromStorage() {
    const stats = database.getStatistics();
    console.log('DRIMORIA Statistics:', stats);
}

/* ============================================
   NAVIGATION & MENU FUNCTIONS
   ============================================ */

// Setup event listeners
function setupEventListeners() {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) {
                navMenu.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Donation form submission
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', handleDonationSubmit);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
}

// Navigate to page
function navigateTo(page) {
    window.location.href = page + '.html';
}

// Update navigation active state on page load
function updateActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Update on page load
document.addEventListener('DOMContentLoaded', updateActiveNav);

/* ============================================
   FORM HANDLING FUNCTIONS
   ============================================ */

// Handle donation form submission
function handleDonationSubmit(event) {
    event.preventDefault();
    
    const donorName = document.getElementById('donorName').value.trim();
    const donorEmail = document.getElementById('donorEmail').value.trim();
    const donorPhone = document.getElementById('donorPhone').value.trim();
    const donationAmount = document.getElementById('donationAmount').value;
    const donationMessage = document.getElementById('donationMessage').value.trim();
    
    // Validation
    if (!donorName || !donorEmail || !donorPhone || !donationAmount) {
        showAlert('Please fill in all required fields.', 'error');
        return;
    }
    
    if (parseFloat(donationAmount) <= 0) {
        showAlert('Please enter a valid donation amount.', 'error');
        return;
    }
    
    // Create donation object
    const donation = {
        name: donorName,
        email: donorEmail,
        phone: donorPhone,
        amount: donationAmount,
        message: donationMessage
    };
    
    // Add to database
    const result = database.addDonation(donation);
    
    // Show success message
    showAlert(`Thank you for your generous donation of $${donationAmount}! Your contribution will make a real difference in the lives of those we serve. We will send a receipt to ${donorEmail}.`, 'success');
    
    // Reset form
    document.getElementById('donationForm').reset();
    
    // Log for verification
    console.log('Donation recorded:', result);
    
    // Send email notification (in a real app, this would be backend)
    sendDonationNotification(donation);
}

// Handle contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validation
    if (!name || !email || !subject || !message) {
        showAlert('Please fill in all fields.', 'error');
        return;
    }
    
    // Create inquiry object
    const inquiry = {
        name,
        email,
        subject,
        message
    };
    
    // Add to database
    const result = database.addInquiry(inquiry);
    
    // Show success message
    showAlert(`Thank you for reaching out, ${name}! We have received your message and will respond within 24 hours to ${email}.`, 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Log for verification
    console.log('Inquiry recorded:', result);
    
    // Send email notification (in a real app, this would be backend)
    sendInquiryNotification(inquiry);
}

/* ============================================
   NOTIFICATION FUNCTIONS
   ============================================ */

// Send donation notification (simulated)
function sendDonationNotification(donation) {
    // In a real application, this would send an email via a backend server
    console.log('Sending donation notification email to:', donation.email);
    
    // Simulated email content
    const emailContent = `
        Dear ${donation.name},
        
        Thank you for your generous donation of $${donation.amount} to DRIMORIA SUPPORT ORGANISATION.
        
        Your contribution will help us continue our mission to empower vulnerable girls and women, 
        support orphans, and provide care for street children.
        
        You can track your donation impact through our website.
        
        With gratitude,
        DRIMORIA SUPPORT ORGANISATION
        "Restoring Hope, Transforming Lives"
        
        Contact: +256 703 190 381
        Email: badriaadam114@gmail.com
    `;
    
    console.log('Email would be sent with content:', emailContent);
}

// Send inquiry notification (simulated)
function sendInquiryNotification(inquiry) {
    // In a real application, this would send an email via a backend server
    console.log('Sending inquiry notification email to:', inquiry.email);
    
    // Simulated email content
    const emailContent = `
        Dear ${inquiry.name},
        
        Thank you for contacting DRIMORIA SUPPORT ORGANISATION.
        
        We have received your inquiry regarding: ${inquiry.subject}
        
        Our team will review your message and respond within 24 hours.
        
        Message received: "${inquiry.message}"
        
        Best regards,
        DRIMORIA SUPPORT ORGANISATION
        "Restoring Hope, Transforming Lives"
        
        Contact: +256 703 190 381
        Email: badriaadam114@gmail.com
    `;
    
    console.log('Email would be sent with content:', emailContent);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Show alert message
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    // Style the alert
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 1rem;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    `;
    
    // Set color based on type
    if (type === 'success') {
        alertDiv.style.backgroundColor = '#27ae60';
        alertDiv.style.color = 'white';
    } else if (type === 'error') {
        alertDiv.style.backgroundColor = '#e74c3c';
        alertDiv.style.color = 'white';
    } else {
        alertDiv.style.backgroundColor = '#3498db';
        alertDiv.style.color = 'white';
    }
    
    document.body.appendChild(alertDiv);
    
    // Remove after 4 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => alertDiv.remove(), 300);
    }, 4000);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Validate email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validate phone number
function validatePhone(phone) {
    const regex = /^\+?[\d\s\-()]{10,}$/;
    return regex.test(phone);
}

/* ============================================
   EXPORT FUNCTIONS FOR ADMIN/ANALYSIS
   ============================================ */

// Export donations as JSON
function exportDonationsJSON() {
    const donations = database.getDonations();
    const dataStr = JSON.stringify(donations, null, 2);
    downloadFile(dataStr, 'donations.json', 'application/json');
}

// Export inquiries as JSON
function exportInquiriesJSON() {
    const inquiries = database.getInquiries();
    const dataStr = JSON.stringify(inquiries, null, 2);
    downloadFile(dataStr, 'inquiries.json', 'application/json');
}

// Export as CSV
function exportDonationsCSV() {
    const donations = database.getDonations();
    
    if (donations.length === 0) {
        showAlert('No donations to export.', 'error');
        return;
    }
    
    let csv = 'Name,Email,Phone,Amount,Message,Date\n';
    
    donations.forEach(donation => {
        csv += `"${donation.name}","${donation.email}","${donation.phone}","${donation.amount}","${donation.message || ''}","${donation.date}"\n`;
    });
    
    downloadFile(csv, 'donations.csv', 'text/csv');
}

// Download file utility
function downloadFile(content, filename, contentType) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:' + contentType + ';charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    showAlert(`Exported as ${filename}`, 'success');
}

// Get database statistics
function getDatabaseStats() {
    return database.getStatistics();
}

/* ============================================
   ADMIN CONSOLE FUNCTIONS
   ============================================ */

// View all donations in console
function viewAllDonations() {
    console.table(database.getDonations());
}

// View all inquiries in console
function viewAllInquiries() {
    console.table(database.getInquiries());
}

// View statistics
function viewStatistics() {
    console.log('DRIMORIA Statistics:', getDatabaseStats());
}

// Clear database (warning: destructive)
function clearDatabase(confirm = false) {
    if (!confirm) {
        console.warn('To clear database, call clearDatabase(true)');
        return;
    }
    
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone!')) {
        database.donations = [];
        database.inquiries = [];
        database.save();
        console.log('Database cleared successfully.');
    }
}

// Admin info
console.log('%c🌟 DRIMORIA SUPPORT ORGANISATION 🌟', 'color: #e74c3c; font-size: 16px; font-weight: bold;');
console.log('%cAdmin Console Commands:', 'color: #3498db; font-weight: bold;');
console.log('viewAllDonations() - View all donations');
console.log('viewAllInquiries() - View all inquiries');
console.log('viewStatistics() - View database statistics');
console.log('exportDonationsJSON() - Export donations as JSON');
console.log('exportInquiriesJSON() - Export inquiries as JSON');
console.log('exportDonationsCSV() - Export donations as CSV');
console.log('getDatabaseStats() - Get statistics object');
console.log('clearDatabase(true) - Clear all data (warning: destructive)');

/* ============================================
   ADD ANIMATION KEYFRAMES TO PAGE
   ============================================ */

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   PAGE PERFORMANCE & ANALYTICS
   ============================================ */

// Track page performance
window.addEventListener('load', function() {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime + 'ms');
    }
});

// Detect browser and device info
function getDeviceInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        onLine: navigator.onLine,
        platform: navigator.platform
    };
}

console.log('Device Info:', getDeviceInfo());
