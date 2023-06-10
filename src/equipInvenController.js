const { nanoid } = require("nanoid");
const inform = console.log;
const { chalk } = require("chalk");


function index(arrayOfEquipment) {
  return arrayOfEquipment
    .map((eachEquipment) => eachEquipment.id + " " + eachEquipment.name)
    .join("\n");
}
function generateValidPrice(priceInCents) {
  const parsedPrice = parseFloat(priceInCents);
  if (isNaN(parsedPrice) || parsedPrice < 0) {
    throw new Error("Invalid Price");
  }
  return Math.ceil(parsedPrice);
}

function createEquipment(name, priceInCents, inStock, quantity) {
  const purchaseId = nanoid();
  const price = generateValidPrice(priceInCents);
  const roundedQuantity = Math.round(quantity);

  const newItem = {
    id: purchaseId,
    name: name,
    priceInCents: price,
    inStock: inStock,
    quantity: roundedQuantity,
    purchaseDate: new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  };
  return newItem;
}

//createEquipment()

function createEquipmentController(
  name,
  priceInCents,
  inStock,
  quantity,
) {

    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid Name ");
    }
    if (
      typeof priceInCents !== "number" ||
      isNaN(priceInCents) ||
      priceInCents < 0
    ) {
      throw new Error("Invalid price");
    }
    if (typeof inStock !== "boolean") {
      throw new Error("Invalid inStock value");
    }
    if (typeof quantity !== "number" || quantity < 0) {
      throw new Error("Invalid quantity");
    }
    const orderEquipment = createEquipment(
      name,
      priceInCents,
      inStock,
      quantity
    );
    equipmentList.push(orderEquipment);
    inform("Purchase Created Successfully");
  
}

function shoppingCart() {}

function editEquipmentController(equipmentList, id, updatedName) {
  const equipmentToEdit = equipmentList.find(
    (equipment) => equipment.id === id
  );

  if (!equipmentToEdit) {
    inform(chalk.red("Equipment not found. No action taken"));
    return;
  }
  equipmentToEdit.name = updatedName;
  //styleToEdit.name = updatedName;
  inform(chalk.bold.green("Equipment successfully updated"));
  return;
}

// function listEquipment(equipment) {
//     return  equipment.map(({id, name, priceInCents, inStock, purchaseDate}) => ({
//     id,
//     name,
//     amount,
//     donation}));
//     }

function destroyEquipment(equipment, id){
   
        const toDestroy = equipment.findIndex((product) => product.id === id);
        if (toDestroy > -1) {
          equipment.splice(toDestroy, 1);
          inform(chalk.blue("Equipment successfully removed from inventory"));
          //return styles;
        } else {
          inform("Equipment not found. No action taken");
          //return styles;
        }
      
}

module.exports = {
  index,
  createEquipment,
  createEquipmentController,
  editEquipmentController,
  destroyEquipment
};
