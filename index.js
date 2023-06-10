const chalk = require("chalk");
const {
  index,
  createEquipmentController,
  editEquipmentController,
  destroyEquipmentController,
} = require("./src/equipInvenController");
const { readJSONFile, writeJSONFile } = require("./src/helper");
const { nanoid } = require("nanoid");
//const { index, showController, createStyleController, destroy, editStyleController} = require("./src/equipInvenController");
const inform = console.log;

function run() {
  // inform(4);

  const equipment = readJSONFile("data", "equipmentInventory.json");
  //console.log("the style from indexJS", equipment);
  let id = null;
  /**
     * const name = process.argv[3]; // This is used as an argument and represents the name of the purchase
        const amount = process.argv[4]; // This is used as an argument and represents the amount of the purchase
     */
  const args = process.argv.slice(2); //action user typed in
  const command = args[0]; //equipment
  //const amount = process.argv[4]
  let writeToFile = false;

  switch (command) {
    case "index":
      const EquipmentView = index(equipment);
      inform(EquipmentView);
      break;
    case "show":
      showController(equipment);
      //inform(viewShow);
      break;

    case "edit":
      const editEquipmentId = process.argv[3];
      const updatedName = process.argv[4];
      editEquipmentController(equipment, editEquipmentId, updatedName);
      writeToFile = true;
      break;

    case "create":
       id = nanoid();
      const name = args[1];
      const priceInCents = Number(args[2]);
      const inStock = args[3] === "true";
      const quantity = Number(args[4]);
      const receipt = [];

      try {
        createEquipmentController(
          name,
          priceInCents,
          inStock,
          quantity,
          equipment
        );
        inform("Purchase Created Successfully.");
      } catch (error) {
        const errorObject = {
          id,
          name,
          priceInCents,
          inStock,
          quantity,
          error: error.message,
        };
        receipt.push(errorObject);

        inform(chalk.yellow("Receipt", JSON.stringify(receipt, null, 2)));

        writeToFile = true;
        break;
      }
    case "destroy":
        destroyEquipmentId = process.argv[3]
      destroyEquipmentController(equipment, destroyEquipmentId);
      writeToFile = true;
      break;

    default:
      inform(chalk.blue("Invalid Command 🫠"));
  }
  if (writeToFile) {
    writeJSONFile("data", "equipmentInventory.json", equipment);
    inform(
      chalk.magenta(
        "Thank you for your purchase. Equipment inventory has been updated."
      )
    );
  }
  //put this in purchase controller for receipt
}
run();
