# Command Line CRUD Application

You will build (or test) an application that lets users create and manipulate to an extent, an inventory database. 

## Getting Started

1. Fork and clone this repository
1. Open up the repository in your code editor.
1. Start a new node project
1. Set up a .gitignore file
1. Install nanoid version 3
1. Install chalk version 4

## Instructions

Build out the following functionality. Be sure to organize your code so that the functions stay small and have one job, and also, manage your files so that it is clear what kind of functions are within each file.

- A user can create a purchase. The purchased object will have the following:
  - `id` - generated by nanoid
  - `name` - the name of the purchase
  -`priceInCents` - the product price in cents
  - `inStock` - the item is in the inventory
  - `quantity` - the amount purchased
  - `purchaseDate` - the date the user purchased/created the item
  
  
  ### Set up & Features
  
- A user can see an index of all their purchases, showing the `id`, `name`, `priceInCents`, `inStock`, `quantity`, `purchaseDate`
- A user can see a show view of 1 item with all the purchase details. 
- A user can update/edit a purchase.
- A user can delete/destroy a purchase.
- A user can add products to a cart outside of the inventory database.
- A user can cancel/empty the cart


When a user performs an action like creating or deleting an item, the data file is updated correctly. If the JSON is malformed, there is some logic to prevent writing to the file and thus corrupting the data file.
1. When a user creates an item a unique id is assigned to the new item.
1. Add a cart function where a user can add items to the shopping cart and see the total price and total number of each item
1. Add a cancel cart function that empties the shopping cart.




### Testing your code

to ensure your code is formatted correctly, including handling errors
run the following in the command line:

`node index.js destroy 62N2W3g `

`node index.js edit JO2gt6F `

`node index.js edit Q2a0edNMxovpKyL6xPtMH "100pk Diane Clear Processing Caps"`

`node index.js create "Swiffer Wet Jet" 8644 true 7`

`node index.js create "Hendrix-PIN-TAIL-COMB" true`

`node index.js cart add uFFho09 h_PxY2z`

`node index.js lessThan10`

