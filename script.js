// Category filtering
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const itemCards = document.querySelectorAll('.item-card');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.dataset.category;

            // Filter items
            itemCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form submissions
    document.getElementById('bidForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitBid();
    });

    document.getElementById('sellForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitSellRequest();
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
});

// Modal functions
function openBidModal(itemName, itemDescription, currentBid) {
    // Set the item details in the modal
    document.getElementById('modalItemName').textContent = itemName;
    document.getElementById('modalItemDescription').textContent = itemDescription;
    document.getElementById('modalCurrentBid').textContent = currentBid;

    // Show the modal
    document.getElementById('bidModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bidModal').style.display = 'none';
    document.getElementById('successModal').style.display = 'none';
    // Reset forms
    document.getElementById('bidForm').reset();
    document.getElementById('sellForm').reset();
    document.getElementById('contactForm').reset();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const bidModal = document.getElementById('bidModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === bidModal) {
        bidModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Form submission functions
function submitBid() {
    const itemName = document.getElementById('modalItemName').textContent;
    const bidderName = document.getElementById('bidderName').value;
    const bidderPhone = document.getElementById('bidderPhone').value;
    const bidAmount = document.getElementById('bidAmount').value;

    // In a real implementation, this would send to a server
    // For this demo, we'll simulate sending an email
    const subject = `New Bid for ${itemName}`;
    const body = `Item: ${itemName}%0D%0A%0D%0A` +
                 `Bidder Name: ${bidderName}%0D%0A` +
                 `Bidder Phone: ${bidderPhone}%0D%0A` +
                 `Bid Amount: KSh ${bidAmount}`;

    // This would normally be sent to your email via a server
    // For demo purposes, we'll just show a success message
    showSuccess(`Your bid of KSh ${bidAmount} for ${itemName} has been submitted successfully!`);
    closeModal();
}

function submitSellRequest() {
    const itemName = document.getElementById('itemName').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const sellPrice = document.getElementById('sellPrice').value;
    const sellerName = document.getElementById('sellerName').value;
    const sellerEmail = document.getElementById('sellerEmail').value;
    const sellerPhone = document.getElementById('sellerPhone').value;

    // In a real implementation, this would send to a server
    const subject = `New Sell Request: ${itemName}`;
    const body = `Item Name: ${itemName}%0D%0A` +
                 `Category: ${itemCategory}%0D%0A` +
                 `Description: ${itemDescription}%0D%0A` +
                 `Asking Price: KSh ${sellPrice}%0D%0A%0D%0A` +
                 `Seller Info:%0D%0A` +
                 `Name: ${sellerName}%0D%0A` +
                 `Email: ${sellerEmail}%0D%0A` +
                 `Phone: ${sellerPhone}`;

    // This would normally be sent to your email via a server
    // For demo purposes, we'll just show a success message
    showSuccess(`Your sell request for ${itemName} has been submitted successfully! We'll contact you soon.`);
}

function submitContactForm() {
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactMessage = document.getElementById('contactMessage').value;

    // In a real implementation, this would send to a server
    const subject = `New Contact Form Submission from ${contactName}`;
    const body = `Name: ${contactName}%0D%0A` +
                 `Email: ${contactEmail}%0D%0A%0D%0A` +
                 `Message:%0D%0A${contactMessage}`;

    // This would normally be sent to your email via a server
    // For demo purposes, we'll just show a success message
    showSuccess(`Thank you for your message, ${contactName}! We'll get back to you soon.`);
}

function showSuccess(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').style.display = 'block';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

function sendBidEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const itemName = document.getElementById('modalItemName').textContent;
    const itemDescription = document.getElementById('modalItemDescription').textContent;
    const currentBid = document.getElementById('modalCurrentBid').textContent;
    const bidderName = document.getElementById('bidderName').value;
    const bidderPhone = document.getElementById('bidderPhone').value;
    const bidAmount = document.getElementById('bidAmount').value;

    // Construct the email subject and body
    const subject = `Bid for ${itemName}`;
    const body = `Hello,%0D%0A%0D%0A` +
                 `I would like to place a bid for the following item:%0D%0A%0D%0A` +
                 `Item Name: ${itemName}%0D%0A` +
                 `Description: ${itemDescription}%0D%0A` +
                 `Current Bid: ${currentBid}%0D%0A` +
                 `My Bid: KES ${bidAmount}%0D%0A%0D%0A` +
                 `Please let me know if my bid is accepted.%0D%0A%0D%0A` +
                 `Thank you.%0D%0A%0D%0A` +
                 `Name: ${bidderName}%0D%0A` +
                 `Phone: ${bidderPhone}`;

    // Create the mailto link
    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
}

// Function to handle Sell Form email
function sendSellEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const itemName = document.getElementById('itemName').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const sellPrice = document.getElementById('sellPrice').value;
    const sellerName = document.getElementById('sellerName').value;
    const sellerEmail = document.getElementById('sellerEmail').value;
    const sellerPhone = document.getElementById('sellerPhone').value;

    // Construct the email subject and body
    const subject = `Selling Request: ${itemName}`;
    const body = `Hello,%0D%0A%0D%0A` +
                 `I would like to sell the following item:%0D%0A%0D%0A` +
                 `Item Name: ${itemName}%0D%0A` +
                 `Category: ${itemCategory}%0D%0A` +
                 `Description: ${itemDescription}%0D%0A` +
                 `Asking Price: KES ${sellPrice}%0D%0A%0D%0A` +
                 `Seller Details:%0D%0A` +
                 `Name: ${sellerName}%0D%0A` +
                 `Email: ${sellerEmail}%0D%0A` +
                 `Phone: ${sellerPhone}%0D%0A%0D%0A` +
                 `Please let me know if you are interested.%0D%0A%0D%0A` +
                 `Thank you.`;

    // Create the mailto link
    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
}

// Function to handle Contact Form email
function sendContactEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactMessage = document.getElementById('contactMessage').value;

    // Construct the email subject and body
    const subject = `Contact Message from ${contactName}`;
    const body = `Hello,%0D%0A%0D%0A` +
                 `You have received a new message:%0D%0A%0D%0A` +
                 `Name: ${contactName}%0D%0A` +
                 `Email: ${contactEmail}%0D%0A%0D%0A` +
                 `Message:%0D%0A${contactMessage}%0D%0A%0D%0A` +
                 `Thank you.`;

    // Create the mailto link
    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client
    window.location.href = mailtoLink;
}