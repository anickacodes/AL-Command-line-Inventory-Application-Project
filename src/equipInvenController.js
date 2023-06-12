const { nanoid } = require("nanoid");
const inform = console.log;
const chalk = require("chalk");

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

function createEquipmentController(
  equipmentList,
  name,
  priceInCents,
  inStock,
  quantity
) {
  try {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Invalid Name");
    }
    if (
      typeof priceInCents !== "number" ||
      isNaN(priceInCents) ||
      priceInCents < 0
    ) {
      throw new Error("Invalid Price");
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
    inform(chalk.green(equipmentList, "Purchase Created Successfully"));
  } catch (error) {
    inform(chalk.yellow("Error:", error.message));
  }
}
function showController(equipmentList, id) {
  const equipmentToShow = equipmentList.find((equipment) => equipment.id === id);

  if (equipmentToShow) {
    inform(JSON.stringify([equipmentToShow], null, 2));
  } else {
    inform("Equipment not found.");
  }
}

function editEquipmentController(equipmentList, id, updatedName) {
  const equipmentToEdit = equipmentList.find(
    (equipment) => equipment.id === id
  );

  if (!equipmentToEdit) {
    inform("Equipment not found. No action taken");
    return;
  }

  equipmentToEdit.name = updatedName;
  inform(chalk.bold.green("Equipment successfully updated"));
}

function destroyEquipmentController(equipmentList, id) {
  const index = equipmentList.findIndex((equipment) => equipment.id === id);

  if (index > -1) {
    equipmentList.splice(index, 1);
    inform("Equipment successfully removed from inventory");
  } else {
    inform("Equipment not found. No action taken");
  }
}

module.exports = {
  index,
  createEquipmentController,
  showController,
  editEquipmentController,
  destroyEquipmentController,
};
