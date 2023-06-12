const inform = console.log;



function addToCartController(equipmentList, id, cartItems) {
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
  
      inform("Item added to the cart.");
    } else {
      inform("Equipment not found.");
    }
  }
  
  // Function to display the shopping cart
  function showCartController(cartItems) {
    if (cartItems.length === 0) {
      inform("The shopping cart is empty.");
    } else {
      const totalPrice = cartItems.reduce((total, item) => {
        return total + item.priceInCents * item.quantity;
      }, 0);
  
      const cartSummary = cartItems.map((item) => {
        return {
          id: item.id,
          name: item.name,
          priceInCents: item.priceInCents,
          quantity: item.quantity,
        };
      });
  
      inform(JSON.stringify(cartSummary, null, 2));
      inform(`Total Price: $${(totalPrice / 100).toFixed(2)}`);
    }
  }
  
  module.exports = {
    addToCartController,
    showCartController,
  };