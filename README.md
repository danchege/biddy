# web-development-project

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

The form uses the `onsubmit` attribute to call the `sendSellEmail(event)` function in `script.js`, which handles the submission process.

### 2. **Bid Form**
The bid form is part of the modal that appears when a user clicks "Place Bid" on an item. It includes the following fields:
- **Your Name**: Text input for the bidder's name.
- **Your Phone Number**: Phone input for the bidder's contact number.
- **Your Bid Amount**: Number input for the bid amount.

The form uses the `onsubmit` attribute to call the `sendBidEmail(event)` function in `script.js`, which processes the bid submission.

### 3. **Contact Form**
The contact form is located in the `#contact` section of the `index.html` file. It includes the following fields:
- **Your Name**: Text input for the user's name.
- **Your Email**: Email input for the user's email address.
- **Message**: Textarea for the user's message.

The form uses the `onsubmit` attribute to call the `sendContactEmail(event)` function in `script.js`, which handles the message submission.

---

## Contact Information
For any inquiries, you can reach us through the following channels:
- **Email**: danychege28@gmail.com
- **Phone**: +254 713332171
- **WhatsApp**: +254 713332171
- **Facebook**: @BidsByDan

---

## License
This project is for demonstration purposes and is not intended for commercial use.