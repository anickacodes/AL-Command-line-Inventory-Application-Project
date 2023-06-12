
const chalk = require("chalk");
const { index, createEquipmentController, editEquipmentController, destroyEquipmentController } = require("./src/equipInvenController");
const { readJSONFile, writeJSONFile } = require("./src/helper");
const inform = console.log;

function run() {
  let equipment = readJSONFile("data", "equipmentInventory.json");

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
        createEquipmentController(equipment, name, priceInCents, inStock, quantity);
        writeToFile = true;
      } catch (error) {
        inform(chalk.yellow("Error:", error.message));
      }
      break;

    case "destroy":
      const destroyEquipmentId = args[1];
      destroyEquipmentController(equipment, destroyEquipmentId);
      writeToFile = true;
      break;

    default:
      inform(chalk.blue("Invalid Command 🫠"));
  }

  if (writeToFile) {
    writeJSONFile("data", "equipmentInventory.json", equipment);
    inform(chalk.magenta("Thank you for your action. Equipment inventory has been updated."));
  }
}

run();