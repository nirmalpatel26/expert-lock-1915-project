let data = [
    {
        "id": 1,
        "subject": "Kotlin",
        "price": 18,
        "duration": 6+" Month"
    },
    {
        "id": 2,
        "subject": "Java",
        "price": 53,
        "duration":6+" Month"
    },
    {
        "id": 3,
        "subject": "javascript",
        "price": 49,
        "duration": 6+" Month"
    },
    {
        "id": 4,
        "subject": "c++",
        "price": 29,
        "duration": 6+" Month"
    },
    {
        "id": 5,
        "subject": "python",
        "price": 31,
        "duration": 6+" Month"
    },
    {
        "id": 6,
        "subject": "python",
        "price": 22,
        "duration":6+" Month"
    },
    {
        "id": 7,
        "subject": "C++",
        "price": 63,
        "duration": 6+" Month"
    },
    {
        "id": 8,
        "subject": "PYTHON",
        "price": 43,
        "duration": 6+" Month"
    },
    {
        "id": 9,
        "subject": "PYTHON",
        "price": 45,
        "duration": 6+" Month"
    },
    {
        "id": 10,
        "subject": "JAVA",
        "price": 20,
        "duration": 6+" Month"
    },
    {
        "id": 11,
        "subject": "JAVA",
        "price": 20,
        "duration": 6+" Month"
    },
    {
        "id": 12,
        "subject": "KOTLIN",
        "price": 20,
        "duration": 6+" Month"
    }
];

// fetchData();
// async function fetchData() {
//     try {
//         let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");
//         res = await res.json();
//         // console.log(res);
//         data = res.data;
//         // console.log(res.data);
//         displayData(data);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// --------------------------------------------------------------
// fetchData();
// function fetchData() {
//   fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
//     .then(res => res.json())
//     .then(dat => {
//       data = dat.data;
//       displayData(data);
//     }).catch((err) => console.log(err));
// }
let filterby = document.getElementById("filter");

filterby.addEventListener("change", function () {
    if (filterby.value == "") {
        displayData(data);
    }
    else if(filterby.value==='high'){
        let copy=[...data];
        let higher=copy.sort((a,b)=>{
            return a.price - b.price;
        })
        displayData(higher);
    }
    else if(filterby.value==='low'){
        let copy=[...data];
        let higher=copy.sort((a,b)=>{
            return b.price - a.price;
        })
        displayData(higher);
    }
    else {
        let filteredData = data.filter(p => p.subject == filterby.value);
        displayData(filteredData);
    }
});

let container = document.getElementById("product-container");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];

displayData(data)
function displayData(data) {
    container.innerHTML = "";
    data.forEach(function (product) {

        let card = document.createElement("div");
        card.id="card";
        // let img = document.createElement("img");
        let subject = document.createElement("h2");
        // let description = document.createElement("p");
        let duration = document.createElement("h4");
        let price = document.createElement("h3");
        let addTocart = document.createElement("button");

        // img.src = product.img;
        subject.innerText = product.subject;
        price.innerText = `₹${product.price}`;
        // description.innerText = product.details;
        duration.innerText = product.duration;
        addTocart.innerText = "Buy";

        addTocart.addEventListener("click", function () {
            if (checkAvalible(product)) {
                alert("Course Already in Cart");
            } else {
                cartData.push({ ...product, quantity: 1 });

                localStorage.setItem("cart", JSON.stringify(cartData));
                alert("Course Added To Cart");
            }
        });

        card.append(subject, price, duration, addTocart);
        container.append(card);
    });
}

function checkAvalible(product) {
    for (let i = 0; i < cartData.length; i++) {
        if (product.id === cartData[i].id) {
            return true;
        }
    }
    return false;
}


search.addEventListener("input", () => {
    let filtered = data.filter(e => {
        if (e.subject.toUpperCase().includes(search.value.toUpperCase()) === true) {
            return true;
        } else {
            return false;
        }
    });
    displayData(filtered);
});