// Category filtering
document.addEventListener('DOMContentLoaded', function () {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const itemCards = document.querySelectorAll('.item-card');

    categoryBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            // Remove active class from all buttons
            categoryBtns.forEach((b) => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const category = this.dataset.category;

            // Filter items
            itemCards.forEach((card) => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Form submissions
    document.getElementById('bidForm').addEventListener('submit', function (e) {
        e.preventDefault();
        sendBidEmail(e); // Correct function
    });

    document.getElementById('sellForm').addEventListener('submit', function (e) {
        e.preventDefault();
        sendSellEmail(e); // Correct function
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        sendContactEmail(e); // Correct function
    });
});

// Modal functions
function openBidModal(itemName) {
    // Find the item card with the matching name
    const itemElement = Array.from(document.querySelectorAll('.item-card')).find((card) =>
        card.querySelector('.item-info h3').textContent === itemName
    );

    if (!itemElement) {
        console.error(`Item with name "${itemName}" not found.`);
        return;
    }

    // Fetch the item details
    const itemDescription = itemElement.querySelector('.item-info p:nth-of-type(1)')?.textContent || 'No description available.';
    const currentBid = itemElement.querySelector('.price')?.textContent || 'No bids yet.';

    // Set the modal content
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
window.addEventListener('click', function (event) {
    const bidModal = document.getElementById('bidModal');
    const successModal = document.getElementById('successModal');

    if (event.target === bidModal) {
        bidModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Function to handle Bid Form email
function sendBidEmail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const itemName = document.getElementById('modalItemName').textContent;
    const itemDescription = document.getElementById('modalItemDescription').textContent || 'No description available.';
    const currentBid = document.getElementById('modalCurrentBid').textContent || 'No bids yet.';
    const bidderName = document.getElementById('bidderName').value;
    const bidderPhone = document.getElementById('bidderPhone').value;
    const bidAmount = document.getElementById('bidAmount').value;

    // Construct the email subject and body
    const subject = `Bid for ${itemName}`;
    const body = `Hello,

I would like to place a bid for the following item:

Item Name: ${itemName}
Description: ${itemDescription}
Current Bid: ${currentBid}
My Bid: KES ${bidAmount}

Please let me know if my bid is accepted.

Thank you.

Name: ${bidderName}
Phone: ${bidderPhone}`;

    console.log(body); // Log the decoded message for debugging

    // Trigger the mailto link
    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink; // This will now work as it's tied to a user gesture
}

// Function to handle Sell Form email
function sendSellEmail(event) {
    event.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const itemCategory = document.getElementById('itemCategory').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const sellPrice = document.getElementById('sellPrice').value;
    const sellerName = document.getElementById('sellerName').value;
    const sellerEmail = document.getElementById('sellerEmail').value;
    const sellerPhone = document.getElementById('sellerPhone').value;

    // Construct the email subject and body
    const subject = `Selling Request: ${itemName}`;
    const body = `Hello,

I would like to sell the following item:

Item Name: ${itemName}
Category: ${itemCategory}
Description: ${itemDescription}
Asking Price: KES ${sellPrice}

Seller Details:
Name: ${sellerName}
Email: ${sellerEmail}
Phone: ${sellerPhone}

Please let me know if you are interested.

Thank you.`;

    console.log(body); // Log the decoded message for debugging

    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Function to handle Contact Form email
function sendContactEmail(event) {
    event.preventDefault();

    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactMessage = document.getElementById('contactMessage').value;

    // Construct the email subject and body
    const subject = `Contact Message from ${contactName}`;
    const body = `Hello,

You have received a new message:

Name: ${contactName}
Email: ${contactEmail}

Message:
${contactMessage}

Thank you.`;

    console.log(body); // Log the decoded message for debugging

    const mailtoLink = `mailto:danychege28@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function showSuccess(message) {
    document.getElementById('successMessage').textContent = message;
    document.getElementById('successModal').style.display = 'block';
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#' || !document.querySelector(targetId)) return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});

