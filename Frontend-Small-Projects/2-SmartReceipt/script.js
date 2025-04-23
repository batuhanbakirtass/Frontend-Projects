// script.js

// Sample items for the receipt
const items = [
    { item: "Laptop", quantity: 2, price: 800 },
    { item: "Monitor", quantity: 1, price: 150 },
    { item: "Mouse", quantity: 4, price: 25 },
  ];
  
  // Function to generate the receipt
  function generate() {
    // Date and time of the receipt generation
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  
    // Start the receipt string
    let receiptText = `Receipt\nDate: ${formattedDate}\n\n`;
  
    // Initialize total cost
    let totalCost = 0;
  
    // Loop through the items array to add item details to the receipt
    items.forEach(item => {
      const itemTotal = item.quantity * item.price; // Calculate total for each item
      receiptText += `${item.item} (x${item.quantity}) - $${item.price.toFixed(2)} each\n`; // Add item details
      receiptText += `Item Total: $${itemTotal.toFixed(2)}\n\n`; // Add item total
      totalCost += itemTotal; // Add item total to the overall total
    });
  
    // Add the grand total to the receipt
    receiptText += `Grand Total: $${totalCost.toFixed(2)}`;
  
    // Display the receipt in the 'receiptOutput' element
    document.getElementById('receiptOutput').textContent = receiptText;
  }
  