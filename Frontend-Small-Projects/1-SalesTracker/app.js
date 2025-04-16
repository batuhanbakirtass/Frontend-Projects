// Array to store sales information
const sales = []; 

// Function to add a new sale to the sales array
function addSale() {
    // Retrieve user input values from the HTML
    const item = document.getElementById("item").value;
    const quantity = parseInt(document.getElementById("quantity").value); // Convert to integer
    const price = parseFloat(document.getElementById("price").value); // Convert to float
    const discount = parseFloat(document.getElementById("discount").value) / 100 || 0; // Calculate discount
    const date = document.getElementById("date").value; // Date of the sale
    const taxRate = parseFloat(document.getElementById("taxRate").value) / 100 || 0; // Tax rate, default to 0

    // Add the new sale data to the sales array
    sales.push({ item, quantity, price, discount, date, taxRate });

    // Reset form fields to allow for new input
    document.getElementById("item").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("price").value = '';
    document.getElementById("discount").value = '';
    document.getElementById("date").value = '';
    document.getElementById("taxRate").value = '';

    // Alert the user that the sale was successfully added
    alert('Sale added successfully!');
}

// Function to calculate total sales for a specific date
function calculateTotalSales(sales, filterDate) {
    let total = 0; // Initialize total sales amount

    // Loop through each sale in the sales array
    for (let i = 0; i < sales.length; i++) {
        const item = sales[i];
        const discount = item.discount || 0;  // Check for discount, use 0 if not present
        
        // If the sale date matches the filter date, process the sale
        if (item.date === filterDate) {
            // Calculate item total after discount
            let itemTotal = item.quantity * item.price * (1 - discount); 
            
            // Calculate tax amount and add to item total
            const taxAmount = itemTotal * item.taxRate; 
            itemTotal += taxAmount; // Add tax to the item total
            
            // Add item total to the overall total
            total += itemTotal; 
        }
    }
    return total; // Return the total sales amount for the selected date
}

// Event listener for date filtering
document.getElementById("filterDate").addEventListener("change", function() {
    const filterDate = document.getElementById("filterDate").value; // Get the selected filter date
    const total = calculateTotalSales(sales, filterDate); // Calculate the total sales for the selected date
    document.getElementById("result").innerText = `Total Sales on Selected Date: $${total.toFixed(2)}`; // Display the result
});
