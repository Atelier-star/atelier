// ================================
// ATELIER SHOPPING CART
// ================================
// ================================
// MONGOLIAN DISPLAY TEXT
// ================================
const productNameMap = {
    "Classic Suede Boot": "Сонгодог илгэн түрийтэй гутал",
    "Everyday Sneaker": "Өдөр тутмын пүүз",
    "Essential Oversized Hoodie": "Өдөр тутмын сул загвартай худи",
    "Everyday Mini Bag": "Өдөр тутмын мини цүнх",
    "Relaxed Wool Coat": "Сул эсгүүртэй ноосон пальто",
    "Soft Leather Bag": "Зөөлөн арьсан цүнх",
    "Classic Leather Loafer": "Сонгодог арьсан лофер",
    "Minimal Runner": "Минимал загварын пүүз"
};

const categoryMn = {
    "WOMEN": "ЭМЭГТЭЙ",
    "MEN": "ЭРЭГТЭЙ",
    "KIDS": "ХҮҮХЭД",
    "SHOES": "ГУТАЛ",
    "CLOTHING": "ХУВЦАС",
    "ACCESSORIES": "ДАГАЛДАХ ХЭРЭГСЭЛ",
    "SALE": "ХЯМДРАЛ"
};

const categoryEnFromMn = {
    "ЭМЭГТЭЙ": "WOMEN",
    "ЭРЭГТЭЙ": "MEN",
    "ХҮҮХЭД": "KIDS",
    "ГУТАЛ": "SHOES",
    "ХУВЦАС": "CLOTHING",
    "ДАГАЛДАХ ХЭРЭГСЭЛ": "ACCESSORIES",
    "ХЯМДРАЛ": "SALE",
    "БҮГД": "ALL"
};

const colorMn = {
    "Chestnut": "Бор",
    "Black": "Хар",
    "Cream": "Цайвар шаргал",
    "White": "Цагаан",
    "Grey": "Саарал"
};

function translateProductName(name) {
    return productNameMap[name] || name;
}

function translateCategory(category) {
    return categoryMn[String(category).toUpperCase()] || category;
}

function translateColor(color) {
    return colorMn[color] || color;
}



let cart = JSON.parse(localStorage.getItem("atelierCart")) || [];

const productImages = {

    1: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=90"
    ],

    2: [
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=90"
    ],

    3: [
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=90"
    ],

    4: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1535043934128-cf487b6c6729?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=90"
    ],

    5: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=90"
    ],

    6: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=90"
    ],

    7: [
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90",
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=90"
    ],

    8: [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=90",
    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1200&q=90"
]
};

// SAVE CART
function saveCart() {
    localStorage.setItem(
        "atelierCart",
        JSON.stringify(cart)
    );
}


// ================================
// PRODUCT PAGE
// ================================

let selectedSize = null;
let selectedColor = "Chestnut";

// SIZE BUTTONS
const sizeButtons = document.querySelectorAll(".sizes button");


sizeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // бүх size-ийг цэвэрлэх
        sizeButtons.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        // дарсан size-ийг сонгох
        this.classList.add("selected");

        // size хадгалах
        selectedSize = this.textContent.trim();

        console.log("Selected size:", selectedSize);

    });

});



// ================================
// ADD TO BAG
// ================================

const addButton = document.querySelector(".add-to-bag");

if (addButton) {

    addButton.addEventListener("click", function() {

        // size сонгоогүй бол
        if (!selectedSize) {

            alert("Хэмжээгээ сонгоно уу.");

            return;
        }


        // URL-ээс product ID авах
        const urlParams =
            new URLSearchParams(window.location.search);

        const productId =
            Number(urlParams.get("id"));


        // product олох
        const currentProduct =
            catalogProducts.find(function(product) {

                return product.id === productId;

            });


        // product олдохгүй бол
        if (!currentProduct) {

            alert("Бүтээгдэхүүн олдсонгүй.");

            return;
        }


        // сагсанд нэмэх бүтээгдэхүүн
        const product = {

    id: currentProduct.id,

    name: currentProduct.name,

    price: currentProduct.price,

    category: currentProduct.category,

    size: selectedSize,

    color: selectedColor,

    quantity: 1

};


        // өмнө нь байгаа эсэх
        const existingProduct =
            cart.find(function(item) {

                return (
                    item.name === product.name &&
                    item.size === product.size &&
                    item.color === product.color
                );

            });


        if (existingProduct) {

            existingProduct.quantity += 1;

        } else {

            cart.push(product);

        }


        // cart хадгалах
        saveCart();


        // амжилтын мэдэгдэл
        alert(
            product.name +
            " сагсанд нэмэгдлээ."
        );


        // cart руу очих
        window.location.href = "cart.html";

    });

}


// ================================
// CART PAGE
// ================================

function displayCart() {

    const container =
        document.getElementById("cart-container");


    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <h2>ТАНЫ САГС ХООСОН БАЙНА</h2>

                <p>
                    Манай шинэ цуглуулгыг үзээрэй.
                </p>

                <a href="index.html">
                    ДЭЛГҮҮР ХЭСЭХ
                </a>

            </div>

        `;

        return;
    }


    let subtotal = 0;


    let html = "";


    cart.forEach(function(item, index) {

        subtotal +=
            item.price * item.quantity;


        html += `

            <div class="cart-item">

                <div
    class="cart-image"
    style="background-image: url('${productImages[item.id]?.[0] || ""}');">
</div>

                <div class="cart-info">

                    <p class="product-category">
                        ${translateCategory(item.category)}
                    </p>

                    <h3>
                        ${translateProductName(item.name)}
                    </h3>

                    <p>
                        Хэмжээ: ${item.size}
                    </p>

                    <p>
                        Өнгө: ${translateColor(item.color)}
                    </p>

                    <p class="cart-price">
                        ₮${item.price.toLocaleString()}
                    </p>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${index}, -1)">
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${index}, 1)">
                            +
                        </button>

                    </div>


                    <button
                        class="remove-item"
                        onclick="removeItem(${index})">

                        REMOVE

                    </button>

                </div>

            </div>

        `;

    });


    html += `

        <div class="cart-summary">

            <h2>ЗАХИАЛГЫН ДҮН</h2>


            <div class="summary-row">

                <span>Дэд дүн</span>

                <strong>
                    ₮${subtotal.toLocaleString()}
                </strong>

            </div>


            <div class="summary-row">

                <span>Хүргэлт</span>

                <strong>ҮНЭГҮЙ</strong>

            </div>


            <div class="summary-total">

                <span>НИЙТ</span>

                <strong>
                    ₮${subtotal.toLocaleString()}
                </strong>

            </div>


            <button class="checkout-button">

                CHECKOUT

            </button>

        </div>

    `;


    container.innerHTML = html;

}


// ================================
// QUANTITY
// ================================

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

}


// ================================
// REMOVE
// ================================

function removeItem(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

}


// ================================
// START
// ================================

displayCart();
// ================================
// SEARCH OVERLAY
// ================================

const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");


if (openSearch && searchOverlay) {

    openSearch.addEventListener("click", function () {

        searchOverlay.classList.add("active");

        if (searchInput) {
            searchInput.focus();
        }

    });

}


if (closeSearch && searchOverlay) {

    closeSearch.addEventListener("click", function () {

        searchOverlay.classList.remove("active");

    });

}


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (searchOverlay) {
            searchOverlay.classList.remove("active");
        }

    }

});
// ================================
// SEARCH PRODUCTS
// ================================

const searchResults =
    document.getElementById("searchResults");


const products = [

    {
    id: 1,
    name: "Classic Suede Boot",
    category: "Shoes",
    gender: "WOMEN",
    price: 299000
},
    {
    id: 2,
    name: "Everyday Sneaker",
    category: "Shoes",
    gender: "MEN",
    price: 189000
},

    {
    id: 3,
    name: "Essential Oversized Hoodie",
    category: "Clothing",
    gender: "WOMEN",
    price: 159000
},

    {
    id: 4,
    name: "Everyday Mini Bag",
    category: "Accessories",
    gender: "WOMEN",
    price: 129000
},
   {
    id: 5,
    name: "Relaxed Wool Coat",
    category: "Clothing",
    gender: "WOMEN",
    price: 389000
},

    {
    id: 6,
    name: "Soft Leather Bag",
    category: "Accessories",
    gender: "WOMEN",
    price: 249000
},
    {
    id: 7,
    name: "Classic Leather Loafer",
    category: "Shoes",
    gender: "MEN",
    price: 219000
},

    {
    id: 8,
    name: "Minimal Runner",
    category: "Shoes",
    gender: "MEN",
    price: 199000
}

];


if (searchInput && searchResults) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                this.value
                    .trim()
                    .toLowerCase();


            if (query === "") {

                searchResults.innerHTML = "";

                return;

            }


            const results =
                products.filter(function(product) {

                    return (
                        translateProductName(product.name)
                            .toLowerCase()
                            .includes(query)
                        ||
                        product.name
                            .toLowerCase()
                            .includes(query)
                        ||
                        translateCategory(product.category)
                            .toLowerCase()
                            .includes(query)
                        ||
                        product.category
                            .toLowerCase()
                            .includes(query)
                    );

                });


            if (results.length === 0) {

                searchResults.innerHTML = `

                    <p class="no-results">
                        Бүтээгдэхүүн олдсонгүй.
                    </p>

                `;

                return;

            }


            let html = `

                <p class="search-result-title">
                    ХАЙЛТЫН ҮР ДҮН
                </p>

                <div class="search-result-list">

            `;


            results.forEach(function(product) {

                html += `

                    <div
    class="search-result-item"
    onclick="window.location.href='product.html?id=${product.id}'">

                        <div>

                            <p>
                                ${translateCategory(product.category)}
                            </p>

                            <h3>
                                ${translateProductName(product.name)}
                            </h3>

                        </div>

                        <strong>
                            ₮${product.price.toLocaleString()}
                        </strong>

                    </div>

                `;

            });


            html += `</div>`;


            searchResults.innerHTML = html;

        });

}
// ================================
// TRENDING SEARCH
// ================================

const trendingButtons =
    document.querySelectorAll(
        ".search-suggestions button"
    );


trendingButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const value =
                this.textContent.trim();


            if (searchInput) {

                searchInput.value = value;

                searchInput.dispatchEvent(
                    new Event("input")
                );

            }

        }
    );

});
// ======================================
// PRODUCT CATALOG
// ======================================

const catalogProducts = [

    {
    id: 1,
    name: "Classic Suede Boot",
    category: "Shoes",
    gender: "WOMEN",
    price: 239000,
    oldPrice: 299000,
    description: "Өдөр тутам өмсөхөд зориулсан зөөлөн материалтай, тав тухтай сонгодог загварын гутал.",
    sale: true
},

    {
        id: 2,
        name: "Everyday Sneaker",
        category: "SHOES",
        price: 189000,
        description:
            "Өдөр бүр хэрэглэхэд зориулсан хөнгөн, эвтэйхэн, минимал загварын sneaker.",
        label: "ШИНЭ"
    },

    {
    id: 3,
    name: "Essential Oversized Hoodie",
    category: "Clothing",
    gender: "WOMEN",
    price: 119000,
    oldPrice: 159000,
    sale: true
},

    {
        id: 4,
        name: "Everyday Mini Bag",
        category: "ACCESSORIES",
        price: 129000,
        description:
            "Өдөр тутам хэрэглэхэд тохиромжтой, авсаархан минимал загварын цүнх.",
        label: "ШИЛДЭГ"
    },

    {
    id: 5,
    name: "Relaxed Wool Coat",
    category: "Clothing",
    gender: "WOMEN",
    price: 299000,
    oldPrice: 389000,
    sale: true
},

    {
        id: 6,
        name: "Soft Leather Bag",
        category: "ACCESSORIES",
        price: 249000,
        description:
            "Зөөлөн арьсан материалтай, олон төрлийн хувцастай хослуулахад тохиромжтой цүнх.",
        label: "ХЯЗГААРЛАГДМАЛ"
    },

    {
    id: 7,
    name: "Classic Leather Loafer",
    category: "SHOES",
    price: 219000,
    description:
        "Сонгодог хэлбэр, цэвэрхэн хийцтэй, ажил болон өдөр тутмын хэрэглээнд тохиромжтой.",
    label: "СОНГОДОГ"
},

{
    id: 8,
    name: "Minimal Runner",
    category: "Shoes",
    gender: "MEN",
    price: 149000,
    oldPrice: 199000,
    sale: true
},

];


// ======================================
// PRODUCT PAGE
// ======================================

if (
    window.location.pathname
        .toLowerCase()
        .includes("product.html")
) {

    const urlParams =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        Number(urlParams.get("id"));


    const currentProduct =
        catalogProducts.find(function(product) {

            return product.id === productId;

        });
console.log("URL ID:", productId);
console.log("CURRENT PRODUCT:", currentProduct);
// UPDATE BREADCRUMB

const breadcrumbProduct =
    document.querySelector(".breadcrumb-product");

const breadcrumbCategory =
    document.querySelector(".breadcrumb-category");



        


        // ------------------------------
        // PRODUCT NAME
        // ------------------------------

        const productName =
            document.querySelector(
                ".product-details h1"
            );

        if (productName) {

            productName.textContent =
                translateProductName(currentProduct.name);

        }


        // ------------------------------
        // CATEGORY
        // ------------------------------

        const productCategory =
            document.querySelector(
                ".product-details .product-category"
            );

        if (productCategory) {

            productCategory.textContent =
                translateCategory(currentProduct.category);

        }


        // ------------------------------
        // PRICE
        // ------------------------------

        const productPrice =
            document.querySelector(
                ".product-details .product-price"
            );

        if (productPrice) {

            productPrice.textContent =
                "₮" +
                currentProduct.price.toLocaleString();

        }


        // ------------------------------
        // DESCRIPTION
        // ------------------------------

        let description =
            document.querySelector(
                ".product-details .product-description"
            );


        if (!description && productName) {

            description =
                document.createElement("p");

            description.className =
                "product-description";

            productName.insertAdjacentElement(
                "afterend",
                description
            );

        }


        if (description) {

            description.textContent =
                currentProduct.description;

        }


        // ------------------------------
// PRODUCT GALLERY
// ------------------------------



const images = productImages[productId];

const mainProductImage =
    document.querySelector(".main-product-image");

const thumbnails =
    document.querySelectorAll(".thumbnail");

if (mainProductImage && images) {

    mainProductImage.style.backgroundImage =
        `url("${images[0]}")`;

    mainProductImage.style.backgroundSize =
        "cover";

    mainProductImage.style.backgroundPosition =
        "center";

    thumbnails.forEach(function(thumbnail, index) {

        if (images[index]) {

            thumbnail.style.backgroundImage =
                `url("${images[index]}")`;

            thumbnail.style.backgroundSize =
                "cover";

            thumbnail.style.backgroundPosition =
                "center";

        }

    });

}

// THUMBNAIL CLICK
thumbnails.forEach(function(thumbnail, index) {

    thumbnail.addEventListener("click", function() {

        if (!images[index]) return;

        mainProductImage.style.backgroundImage =
            `url("${images[index]}")`;

        thumbnails.forEach(function(item) {
            item.classList.remove("active");
        });

        thumbnail.classList.add("active");
    });

});

        // ------------------------------
        // PAGE TITLE
        // ------------------------------

        document.title =
            translateProductName(currentProduct.name) +
            " | ATELIER";

    }

// ================================
// CHECKOUT PAGE
// ================================

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");


if (checkoutItems && checkoutTotal) {

    let checkoutSubtotal = 0;

    let checkoutHTML = "";


    cart.forEach(function(item) {

        checkoutSubtotal +=
            item.price * item.quantity;


        checkoutHTML += `

            <div class="checkout-item">

                <strong>
                    ${translateProductName(item.name)}
                </strong>

                <p>
                    Хэмжээ: ${item.size}
                </p>

                <p>
                    Тоо хэмжээ: ${item.quantity}
                </p>

                <strong>
                    ₮${(
                        item.price * item.quantity
                    ).toLocaleString()}
                </strong>

            </div>

        `;

    });


    checkoutItems.innerHTML =
        checkoutHTML;


    checkoutTotal.textContent =
        "₮" +
        checkoutSubtotal.toLocaleString();

}
// ================================
// PLACE ORDER
// ================================

const placeOrderButton =
    document.getElementById("placeOrder");

if (placeOrderButton) {

    placeOrderButton.addEventListener("click", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const address =
            document.getElementById("customerХаяг").value.trim();


        // Нэр шалгах
        if (!name) {

            alert("Овог, нэрээ оруулна уу.");

            return;
        }


        // Утас шалгах
        if (!phone) {

            alert("Утасны дугаараа оруулна уу.");

            return;
        }


        // Хаяг шалгах
        if (!address) {

            alert("Хүргэлтийн хаягаа оруулна уу.");

            return;
        }


        // Захиалгын дугаар үүсгэх
        const orderNumber =
            "ATL-" +
            Date.now().toString().slice(-6);


        // Захиалгын дугаарыг харуулах
        const successOrderNumber =
            document.getElementById("successOrderNumber");

        if (successOrderNumber) {

            successOrderNumber.textContent =
                orderNumber;
        }


        // Захиалга амжилттай дэлгэцийг харуулах
        const orderSuccess =
            document.getElementById("orderSuccess");

        if (orderSuccess) {

            orderSuccess.style.display = "flex";

        } else {

            alert(
                "Захиалга амжилттай бүртгэгдлээ.\n\n" +
                "Захиалгын дугаар: " +
                orderNumber
            );
        }


        // Сагсыг хоослох
        cart = [];

        saveCart();

    });

}
// ================================
// PRODUCT CATEGORY FILTER
// ================================

const categoryTabs =
    document.querySelectorAll(".product-tabs .tab");

const categoryProducts =
    document.querySelectorAll("#productCarousel .product");


categoryTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        // active tab солих
        categoryTabs.forEach(function(item) {

            item.classList.remove("active");

        });

        this.classList.add("active");


        // сонгосон category
        const category =
            categoryEnFromMn[this.textContent.trim().toUpperCase()] ||
            this.textContent.trim().toUpperCase();


        categoryProducts.forEach(function(product) {

            const productCategory =
                categoryEnFromMn[
                    product
                        .querySelector(".product-category")
                        .textContent
                        .trim()
                        .toUpperCase()
                ] ||
                product
                    .querySelector(".product-category")
                    .textContent
                    .trim()
                    .toUpperCase();


            if (
                category === "ALL" ||
                productCategory === category
            ) {

                product.style.display = "";

            } else {

                product.style.display = "none";

            }

        });

    });

});
const productGender = {
    "Classic Suede Boot": "WOMEN",
    "Everyday Sneaker": "MEN",
    "Essential Oversized Hoodie": "WOMEN",
    "Everyday Mini Bag": "WOMEN",
    "Relaxed Wool Coat": "WOMEN",
    "Soft Leather Bag": "WOMEN",
    "Classic Leather Loafer": "MEN",
    "Minimal Runner": "MEN"
};


function filterCategory(category) {

    const normalizedCategory =
        category.toUpperCase();

    const tabs =
        document.querySelectorAll(".product-tabs .tab");

    const products =
        document.querySelectorAll("#productCarousel .product");


    // SHOES / CLOTHING / ACCESSORIES
    if (
        normalizedCategory === "SHOES" ||
        normalizedCategory === "CLOTHING" ||
        normalizedCategory === "ACCESSORIES"
    ) {

        tabs.forEach(function(tab) {

            tab.classList.remove("active");

            if (
                (categoryEnFromMn[tab.textContent.trim().toUpperCase()] ||
                tab.textContent.trim().toUpperCase()) === normalizedCategory
            ) {
                tab.classList.add("active");
            }

        });


        products.forEach(function(product) {

            const productCategory =
                categoryEnFromMn[
                    product
                        .querySelector(".product-category")
                        .textContent
                        .trim()
                        .toUpperCase()
                ] ||
                product
                    .querySelector(".product-category")
                    .textContent
                    .trim()
                    .toUpperCase();

            if (
                productCategory === normalizedCategory
            ) {
                product.style.display = "";
            } else {
                product.style.display = "none";
            }

        });

        return;
    }

    // SALE
if (normalizedCategory === "SALE") {

    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });

    products.forEach(function(product) {

        const productNameMn =
            product
                .querySelector("h3")
                .textContent
                .trim();

        const productName =
            Object.keys(productNameMap).find(function(key) {
                return productNameMap[key] === productNameMn;
            }) || productNameMn;

        const saleProducts = [
            "Classic Suede Boot",
            "Essential Oversized Hoodie",
            "Relaxed Wool Coat",
            "Minimal Runner"
        ];

        if (saleProducts.includes(productName)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

    return;
}

    // WOMEN / MEN / KIDS
    tabs.forEach(function(tab) {
        tab.classList.remove("active");
    });


    products.forEach(function(product) {

        const productName =
            product
                .querySelector("h3")
                .textContent
                .trim();

        const internalName = Object.keys(productNameMap).find(function(key) { return productNameMap[key] === productName; }) || productName;

        const gender =
            productGender[internalName];


        if (gender === normalizedCategory) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });

}
// ================================
// COLOR SELECTION
// ================================

const colorButtons =
    document.querySelectorAll(".product-color");

colorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        colorButtons.forEach(function(item) {
            item.classList.remove("active-color");
        });

        this.classList.add("active-color");

        if (this.classList.contains("brown")) {
            selectedColor = "Chestnut";
        }

        if (this.classList.contains("black")) {
            selectedColor = "Black";
        }

        if (this.classList.contains("cream")) {
            selectedColor = "Cream";
        }

        const selectedColorLabel =
            document.querySelector(".option-title span");

        if (selectedColorLabel) {
            selectedColorLabel.textContent =
                translateColor(selectedColor);
        }

    });

});
// ================================
// BUY NOW
// ================================

const buyNowButton =
    document.querySelector(".buy-now");

if (buyNowButton) {

    buyNowButton.addEventListener("click", function() {

        if (!selectedSize) {

            alert("Хэмжээгээ сонгоно уу.");

            return;
        }

        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const productId =
            Number(urlParams.get("id"));

        const currentProduct =
            catalogProducts.find(function(product) {
                return product.id === productId;
            });

        if (!currentProduct) {

            alert("Бүтээгдэхүүн олдсонгүй.");

            return;
        }

        const product = {

            name: currentProduct.name,

            price: currentProduct.price,

            category: currentProduct.category,

            size: selectedSize,

            color: selectedColor,

            quantity: 1

        };

        cart = [product];

        saveCart();

        window.location.href = "checkout.html";

    });

}
// ================================
// CHECKOUT BUTTON
// ================================

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("checkout-button")
    ) {

        if (cart.length === 0) {

            alert("Таны сагс хоосон байна.");

            return;
        }

        window.location.href = "checkout.html";

    }

});