
//const chalk = require('chalk');
// const { createStyle} = require("./src/stylesHelperController")
// const { readJSONFile, writeJSONFile } = require("./src/helpers")
// const { index, showController, createStyleController, destroy, editStyleController} = require("./src/stylesController");
// const inform = console.log;


// function run() {
//     inform(4);

//     let styles = readJSONFile("data", "styles.json");
//     console.log("the style from indexJS", styles)
//     /**
//      * const name = process.argv[3]; // This is used as an argument and represents the name of the purchase
//         const amount = process.argv[4]; // This is used as an argument and represents the amount of the purchase
//      */ 
//     const action = process.argv[2]; //action user typed in
//     const styleId = process.argv[3]; //style
//     const amount = process.argv[4]
//     let writeToFile = false;

//     switch (action) {
//         case "index":
//             const styleView = index(styles)
//             inform(styleView);
//             break;
//         case "show":
//             showController(styles)
//             //inform(viewShow);
//             break;

//         case "edit":
//             const styleId = process.argv[3];
//             const updatedName = process.argv[4];
//             editStyleController(styles, styleId, updatedName);
//              writeToFile = true;
//              break;

//         case "create":
//             createStyleController(styleId, amount, styles)
//             //updatedStyle = create(styles, styleId);
//             writeToFile = true;
//             break;
//         case "destroy":
//             updatednewStyle = destroy(styles, styleId );
//              writeToFile = true;
//             break;
      

//         default: 
//         inform(chalk.blue("Hey, did you forget something? Your cart is empty 🫠"));
        
//     }
//     if (writeToFile) {
//     writeJSONFile("data", "styles.json", styles);
//     inform("Thank you. Styles have been updated");
//     }
//     //put this in purchase controller for receipt

// }
// run()

