const chalk = require("chalk");
const {
  index,
  createEquipmentController,
  showController,
  editEquipmentController,
  destroyEquipmentController,
} = require("./src/equipInvenController");
const {
  addToCartController,
  showCartController,
  cancelCartController,
} = require("./src/cartController");
const { readJSONFile, writeJSONFile } = require("./src/helper");
const inform = console.log;

function run() {
  let equipment = readJSONFile("data", "equipmentInventory.json");
  let cartItems = readJSONFile("data", "cartItems.json");
  //let cartItems = [];

  const args = process.argv.slice(2);
  const command = args[0];

  let writeToFile = false;

  switch (command) {
    case "index":
      const equipmentView = index(equipment);
      inform(chalk.cyan(equipmentView));
      break;

    case "edit":
      const editEquipmentId = args[1];
      const updatedName = args[2];
      editEquipmentController(equipment, editEquipmentId, updatedName);
      writeToFile = true;
      break;

    case "create":
      const name = args[1];
      const priceInCents = parseInt(args[2]);
      const inStock = args[3] === "true";
      const quantity = parseInt(args[4]);

      try {
        createEquipmentController(
          equipment,
          name,
          priceInCents,
          inStock,
          quantity
        );
        writeToFile = true;
      } catch (error) {
        inform(chalk.yellow("Error:", error.message));
      }
      break;

    case "show":
      const showProductId = process.argv[3];

      showController(equipment, showProductId);
      break;

    case "destroy":
      const destroyEquipmentId = args[1];
      destroyEquipmentController(equipment, destroyEquipmentId);
      writeToFile = true;
      break;

    case "cart":
      const cartCommand = args[1];

      switch (cartCommand) {
        case "add":
          const addToCartIds = args.slice(2); // Get the item IDs from the command arguments
          addToCartController(equipment, addToCartIds, cartItems);
          break;

        case "show":
          showCartController(cartItems);
          break;

        case "cancel":
          cancelCartController(cartItems);
          writeToFile = true; // Set writeToFile to true to save the changes to cartItems.json
          break;

        default:
          inform(chalk.blue("Invalid Cart Command 🛒"));
          break;
      }
      break;

    case "lessThan10":
      const lessThan10Items = equipment.filter((item) => item.quantity < 10);
      const lessThan10ItemsView = index(lessThan10Items);
      inform(chalk.inverse.cyan("Alert! Low Inventory- Restock soon!"));
      inform(chalk.magentaBright(lessThan10ItemsView));
      break;

    default:
      inform(chalk.blue("Invalid Command 🫠"));
  }

  if (writeToFile) {
    writeJSONFile("data", "equipmentInventory.json", equipment);
    writeJSONFile("data", "cartItems.json", cartItems);
    inform(
      chalk.magenta(
        "Thank you for your action. Equipment inventory has been updated."
      )
    );
  }
}

run();
