import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  // console.log('load page1');
  try {
    // throw 'error1'; manually creating error

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error2';
      loadCart(() => {
        // reject('error3');
        resolve("value2");
      });
    }); /*.then((value) => {
          // instead of using this we can store the value in a variable as above as awiat retutrns the the value of resolve('value2'); 
      })*/

  } catch (error) {
    console.log("unexpected error. please try again later.");
  }
  renderOrderSummary();
  renderPaymentSummary();

  // return 'value1';
}
  loadPage(); /*.then((value) => {
      console.log('next step');
      // console.log(value);
    });*/

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
Promise.all([
  new Promise((resolve) => {
    loadProducts(() => {
      resolve('value1');
    });
  }),
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value2');
    });
  })

]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
//promises
new Promise((resolve) => {
  // console.log('start promise');

  loadProducts(() => {
    // console.log('finished loading');
    resolve('value1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  // console.log('next step');

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/
