let screen = document.getElementById("show")
let pID = localStorage.getItem('productID')
console.log(pID)
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(json => {
      console.log(json);
     let oneProduct = json.find((el)=> el.id == pID)
     console.log(oneProduct);
     screen.innerHTML += `
        <div>
                <img class="img" src="${oneProduct.image}" alt="" height: 7em; width: 12em;>
           <p id="cov" class="title"> ${oneProduct.title}</p>
           <h2 class="price">$ ${oneProduct.price}</h2>
            <div>
              <button onclick="makePayment(${oneProduct.price})" class="btn btn-info">BUY NOW</button>
              </div>
         `
    });

    function makePayment(price) {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-38ff9144bcb3581d755ae013f575a9a2-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: price,
      currency: "USD",
      payment_options: "card, banktransfer, ussd",
      redirect_url: "https://google.com",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: "rose@unsinkableship.com",
        phone_number: "09064170013",
        name: "Devloper nonso",
      },
      customizations: {
        title: "The nonsoglobal Store",
        description: "Payment for this product",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  }