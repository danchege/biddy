# Biddy
live demo:https://danchege.github.io/biddy/

Biddy is a web-based platform for buying and selling new and used items. It allows users to browse items for sale, place bids, and submit items they want to sell. The platform is designed to be user-friendly and responsive, providing a seamless experience for both buyers and sellers.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Use](#how-to-use)
- [Contact Information](#contact-information)

---

## Features
1. **Browse Items**: Users can view items for sale, categorized into Electronics, Furniture, Appliances, Vehicles, and Kitchenware.
2. **Place Bids**: Users can place bids on items directly from the platform.
3. **Sell Items**: Sellers can submit items they want to sell by filling out a form.
4. **Responsive Design**: The platform is fully responsive and works on all devices.
5. **Contact Form**: Users can reach out to the platform administrators via a contact form.

---

## Technologies Used
- **HTML5**: For structuring the web pages.
- **CSS3**: For styling and layout, including responsive design.
- **JavaScript**: For interactivity and form handling.
- **WebP Images**: For optimized image loading.

---

## Project Structure
The project is organized into the following main sections:
- **`index.html`**: The main HTML file containing the structure of the website.
- **`styles.css`**: The main CSS file for styling the website.
- **`script.js`**: The JavaScript file for interactivity and form handling.
- **`/images`**: A folder containing all the images used in the website, optimized in WebP format.

---

## How to Use
1. **Browse Items**:
   - Navigate to the "Items for Sale" section.
   - Use the category buttons to filter items by category.
   - Click "Place Bid" to bid on an item.

2. **Sell Items**:
   - Go to the "Sell to Us" section.
   - Fill out the form with item details and your contact information.
   - Submit the form to send your selling request.

3. **Contact Us**:
   - Navigate to the "Contact" section.
   - Fill out the contact form with your name, email, and message.
   - Submit the form to send your message.

---

## Form Configuration

### 1. **Sell Form**
The "Sell to Us" form is located in the `#sell` section of the `index.html` file. It allows users to submit details about the items they want to sell. The form includes the following fields:
- **Item Name**: Text input for the name of the item.
- **Category**: Dropdown menu to select the item's category.
- **Description**: Textarea for a detailed description of the item.
- **Asking Price**: Number input for the seller's asking price.
- **Seller Name**: Text input for the seller's name.
- **Seller Email**: Email input for the seller's email address.
- **Seller Phone**: Phone input for the seller's contact number.


![sell_form_email](images/form%20emails/sell%20form%20email%20example.jpg)

The form uses the `onsubmit` attribute to call the `sendSellEmail(event)` function in `script.js`, which handles the submission process and the email sent to seller as shown.

### 2. **Bid Form**
The bid form is part of the modal that appears when a user clicks "Place Bid" on an item. It includes the following fields:
- **Your Name**: Text input for the bidder's name.
- **Your Phone Number**: Phone input for the bidder's contact number.
- **Your Bid Amount**: Number input for the bid amount.

![bid_form_email](images/form%20emails/bid%20email%20example.jpg)

The form uses the `onsubmit` attribute to call the `sendBidEmail(event)` function in `script.js`, which processes the bid submission and the email is also sent to sellers inbox as shown above.

### 3. **Contact Form**
The contact form is located in the `#contact` section of the `index.html` file. It includes the following fields:
- **Your Name**: Text input for the user's name.
- **Your Email**: Email input for the user's email address.
- **Message**: Textarea for the user's message.

![contact_form](images/form%20emails/contact%20form%20email%20example.jpg)

The form uses the `onsubmit` attribute to call the `sendContactEmail(event)` function in `script.js`, which handles the message submission and an email is sent to the seller.

---

## Contact Information
For any inquiries, you can reach us through the following channels:
- **Email**: danychege28@gmail.com
- **Phone**: +254 713332171
- **WhatsApp**: +254 713332171
- **Facebook**: @Biddy

---

## License
This project is for demonstration purposes and is not intended for commercial use.

## Future improvements
- Add backend to handle large-scale funtions and money transactions 