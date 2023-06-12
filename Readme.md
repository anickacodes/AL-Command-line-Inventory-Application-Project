# Command Line CRUD Application

Welcome new hiree! Your second task as a member of CLN Styles is to help us test the funtionality of our inventory app

### Getting Started 
  run npm install to download the required dependencies

### Set up & Features
  
- A user can see an index of all their purchases, showing the `id`, `name`, `priceInCents`, `inStock`, `quantity`, `purchaseDate` (List Items)
- A user can see a show view of 1 item with all the purchase details. 
- A user can update/edit a purchase.
- A user can delete/destroy a purchase.
- A user can add products to a cart outside of the inventory database.
- A user can cancel/empty the cart


## Tips 
1. When a user creates an item a unique id is assigned to the new item.
2. A user can add items to the shopping cart and see the total price and total number of each item
3. A user can cancel and empty the shopping cart. (hopefully)




### Testing our code

To help us test our codes functionality, including handling errors, 
run the following individually in the command line:

`node index.js destroy 62N2W3g `

`node index.js edit JO2gt6F `

`node index.js edit Q2a0edNMxovpKyL6xPtMH "100pk Diane Clear Processing Caps"`

`node index.js create "Swiffer Wet Jet" 8644 true 7`

`node index.js create "Hendrix-PIN-TAIL-COMB" true`

`node index.js cart add uFFho09 h_PxY2z`

`node index.js lessThan10`


**To be super sure, try running a `create` command that inputs `120` `"colorcharm PAINTS™ Paints Purple"` at `$8.05` into the `equipmentInventory.json`. Add the new item to the cartItems.json. Happy Testing!!**
