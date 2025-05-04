// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
//   });

// console.log("point 0");
// // const extensions = 'https://developer.chrome.com/docs/extensions'
// // const webstore = 'https://developer.chrome.com/docs/webstore'


// chrome.action.onClicked.addListener(async (tab) => {
//   // if (1) {//tab.url.startsWith(extensions) || tab.url.startsWith(webstore)
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     console.log("point 1");
//     const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON'

//     // Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     });


    
//     if (nextState === "ON") {

//       // document.addEventListener('DOMContentLoaded', function () { 
//       //   var submitButton = document.getElementById('button_submit');
//       //   submitButton.addEventListener('click', sendData);
//       //   });
//       //   function sendData() {
//       //     let params = {
//       //     active: true,
//       //     currentWindow: true
//       //    }
//       //   chrome.tabs.query(params, gotTabs);
//       //   function gotTabs(tabs) {
        
//         // var selected = document.getElementById("select_image");
//         var selectedImage = "images/keepitup.jpg"
//         let message = {
//           txt: "Hello",
//           selectedImage: selectedImage
//         }
//         chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
//           console.log("Success");
//         });


//         chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//           if (message.txt == "Hello") {
//           replace(message.selectedImage, sender, sendResponse);
//           }
//           });
//           let imgs = document.querySelectorAll('img');
          
//           for (imgElt of imgs) {
//             let file = 'images/keepitup.jpg';
//             let url = chrome.extension.getURL(file);
//             imgElt.src = url;
//           }

//     // }
//   }
// })

//   //       // Insert the CSS file when the user turns the extension on
//   //       await chrome.scripting.insertCSS({
//   //         files: ["style.css"],
//   //         target: { tabId: tab.id },
//   //       });


        
//   //     } else if (nextState === "OFF") {
//   //       // Remove the CSS file when the user turns the extension off
//   //       await chrome.scripting.removeCSS({
//   //         files: ["style.css"],
//   //         target: { tabId: tab.id },
//   //       });
//   //     }
//   //   }
//   // });
