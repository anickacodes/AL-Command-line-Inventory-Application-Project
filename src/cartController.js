const inform = console.log;
const fs = require("node:fs")

function addToCartController(equipmentList, ids, cartItems) {
  if (ids.length === 0) {
    inform("No equipment ID provided.");
    return;
  }

  ids.forEach((id) => {
    const equipmentToAdd = equipmentList.find((equipment) => equipment.id === id);

    if (equipmentToAdd) {
      const cartItemIndex = cartItems.findIndex((item) => item.id === id);

      if (cartItemIndex !== -1) {
        // If the item is already in the cart, increase the quantity
        cartItems[cartItemIndex].quantity += 1;
      } else {
        // If the item is not in the cart, add it
        cartItems.push({ ...equipmentToAdd, quantity: 1 });
      }
    } else {
      inform(`Equipment with ID ${id} not found.`);
    }
  });

  inform("Items added to the cart.");
  writeJSONFile("data", "cartItems.json", cartItems); // Write cart items to JSON file
}

function cancelCartController(cartItems) {
  cartItems = []; // Empty the shopping cart
  inform("Shopping cart has been canceled. All items removed.");
  writeJSONFile("data", "cartItems.json", cartItems); // Write cart items to JSON file
}
  
  function writeJSONFile(directory, filename, data) {
    const filePath = `${directory}/${filename}`;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  
  }
  
  // Function to display the shopping cart
  function showCartController(cartItems) {
    if (cartItems.length === 0) {
      inform("The shopping cart is empty.");
    } else {
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.priceInCents * item.quantity;
      }, 0);
  
      const cartItemsFormatted = cartItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          priceInCents: item.priceInCents,
          quantity: item.quantity,
        };
      });
  
      inform(JSON.stringify(cartItemsFormatted, null, 2));
      inform(`Total Price: $${(totalPrice / 100).toFixed(2)}`);
    }
  }
  
  module.exports = {
    addToCartController,
    showCartController,
    cancelCartController
  };