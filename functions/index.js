
const { email, password } = require('./config')
const nodemailer = require('nodemailer')
const functions = require('firebase-functions');
const htmlToText = require('nodemailer-html-to-text').htmlToText
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
})
mailTransport.use("compile", htmlToText())
const APP_NAME = 'PIZZA'
exports.sendUserEmail = functions.database.ref('/orders/{pushId}')
    .onCreate(async (order) => {
        const res = await sendorderEmail(order.val())
        return res
    });

async function sendorderEmail(order) {
    const topper = 0
    const mailOptions = {
        from: `${APP_NAME}<noreply@pizza.com>`,
        to: order.email,
        subject: `Your order from ${APP_NAME}`,
        html: `
    <table style="width:500px;margin:auto;">
   <tr>
   <th>
   ${order.displayName}
   </th>
   <th>Here is confirmation of your order</th>
   </tr>
   ${order.order.map(({ name, quantity, price, toppings, total }) => `
   <tr>
  
   <td>${quantity} - ${name}</td>
   <td>${toppings ? `(${toppings.length} extras)` : ''}</td>
  
   <td>basic price £${price}</td>
   
   
   </tr>
  `).join("")}
  <tr><td>Total Price including extras and tax ${order.order[0].total}</td></tr>
    </table>` }

    const res = await mailTransport.sendMail(mailOptions)

    return res
}