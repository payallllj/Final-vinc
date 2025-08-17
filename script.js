
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showMainSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showMainSlider();
}

function showMainSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showMainSlider();
    })
})

// models

let next1Button = document.getElementById('next1');
let prev1Button = document.getElementById('prev1');
let models = document.querySelector('.models');
let listHTML = document.querySelector('.models .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

next1Button.onclick = function(){
    showModelsSlider('next1');
}
prev1Button.onclick = function(){
    showModelsSlider('prev1');
}
let unAcceppClick;
const showModelsSlider = (type) => {
    next1Button.style.pointerEvents = 'none';
    prev1Button.style.pointerEvents = 'none';

    models.classList.remove('next1', 'prev1');
    let items = document.querySelectorAll('.models .list .item');
    if(type === 'next1'){
        listHTML.appendChild(items[0]);
        models.classList.add('next1');
    }else{
        listHTML.prepend(items[items.length - 1]);
        models.classList.add('prev1');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        next1Button.style.pointerEvents = 'auto';
        prev1Button.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        models.classList.remove('next1', 'prev1');
        models.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    models.classList.remove('showDetail');
}

// navbar
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});


/*cart function*/

/*const cartModal = document.getElementById('cart-modal');
        const openCartBtn = document.getElementById('open-cart');
        const closeCartBtn = document.getElementById('close-cart');
        const cartItemsList = document.getElementById('cart-items');
        const cartCountSpan = document.querySelector('.cart-count');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
        const itemAddedMessage = document.getElementById('item-added-message');
        let cart = [];

        // Open cart modal
        openCartBtn.addEventListener('click', () => {
            cartModal.classList.add('active');
        });

// Close cart modal
        closeCartBtn.addEventListener('click', () => {
            cartModal.classList.remove('active');
        });

        // Handle Add to Cart button clicks
        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const item = {
                    name: e.target.dataset.name,
                    price: e.target.dataset.price,
                    image: e.target.dataset.img
                };
                addToCart(item);
            });
        });

//Add item to cart
        function addToCart(item) {
            cart.push(item);
            updateCartDisplay();
            showItemAddedMessage();
        }

        // Update the cart modal display
        function updateCartDisplay() {
            cartItemsList.innerHTML = ''; // Clear existing items
            if (cart.length === 0) {
                emptyCartMessage.style.display = 'block';
                cartCountSpan.style.display = 'none';
            } else{
                emptyCartMessage.style.display = 'none';
                cart.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-details">
                            <h4>${item.name}</h4>
                            <p>$${item.price}</p>
                        </div>
                    `;
                    cartItemsList.appendChild(li);
                });
                cartCountSpan.style.display = 'block';
                cartCountSpan.textContent = cart.length;
            }
        }
// Show "Item added" message
        function showItemAddedMessage() {
            itemAddedMessage.classList.add('show');
            setTimeout(() => {
                itemAddedMessage.classList.remove('show');
            }, 2000); // Message disappears after 2 seconds
        }

        // Initial cart display update
        updateCartDisplay();*/



// --- New JavaScript for the contact form ---
    // Get the form and the thank you message elements
    
const contactForm = document.getElementById('contact-form');
        const thankYouMessage = document.getElementById('thank-you-message');

        // Add a submit event listener to the form
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior (page refresh)
            event.preventDefault();

            // Hide the form by changing its display style
            contactForm.style.display = 'none';

            // Show the thank you message by changing its display style
            thankYouMessage.style.display = 'block';

            // Optional: You could add a timeout here to re-show the form after a few seconds
            // setTimeout(() => {
            //     contactForm.style.display = 'block';
            //     thankYouMessage.style.display = 'none';
            // }, 5000); // 5000 milliseconds = 5 seconds
        });


//buy now//

/*const cartModal = document.getElementById('cart-modal');
        const openCartBtn = document.getElementById('open-cart');
        const closeCartBtn = document.getElementById('close-cart');
        const cartItemsList = document.getElementById('cart-items');
        const cartCountSpan = document.querySelector('.cart-count');
        const emptyCartMessage = document.querySelector('.empty-cart-message');
        const itemAddedMessage = document.getElementById('item-added-message');
        let cart = [];
    

    // New element references for the cart summary and buy button
const cartSummary = document.querySelector('.cart-summary');
    const cartTotalSpan = document.getElementById('cart-total');
    const buyNowBtn = document.getElementById('buy-now-btn');

    openCartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const item = {
                name: e.target.dataset.name,
                price: parseFloat(e.target.dataset.price),
                image: e.target.dataset.img
            };
            addToCart(item);
        });
    });

    // New click event listener for the buy button
    buyNowBtn.addEventListener('click', () => {
        // Here you would normally handle a checkout process.
        showPurchaseConfirmation();
        
        // Clear the cart after "purchase"
        cart = [];
        updateCartDisplay();
    });

    function addToCart(item) {
        cart.push(item);
        updateCartDisplay();
        showItemAddedMessage();
    }

    // The updateCartDisplay function was modified to handle the total and the new summary section.
    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0; // Initialize total price

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartCountSpan.style.display = 'none';
            cartSummary.style.display = 'none'; // Hide the summary and button
        } else {
            emptyCartMessage.style.display = 'none';
            cart.forEach(item => {
                total += item.price; // Add item price to the total
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                `;
                cartItemsList.appendChild(li);
            });
            cartCountSpan.style.display = 'block';
            cartCountSpan.textContent = cart.length;
            
            cartSummary.style.display = 'block'; // Show the summary and button
            cartTotalSpan.textContent = total.toFixed(2); // Update the total price display
        }
    }

    function showItemAddedMessage() {
        itemAddedMessage.classList.add('show');
        setTimeout(() => {
            itemAddedMessage.classList.remove('show');
        }, 2000);
    }
    
    // New function to show a temporary purchase confirmation message
    function showPurchaseConfirmation() {
        const messageBox = document.createElement('div');
        messageBox.style.position = 'fixed';
        messageBox.style.bottom = '30px';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translateX(-50%)';
        messageBox.style.backgroundColor = '#f9004d';
        messageBox.style.color = 'white';
        messageBox.style.padding = '20px 30px';
        messageBox.style.borderRadius = '10px';
        messageBox.style.zIndex = '1001';
        messageBox.textContent = 'Thank you for your purchase!';
        document.body.appendChild(messageBox);
        
        setTimeout(() => {
            messageBox.remove();
        }, 3000);
    }*/


    // Existing cart element references...
    const cartModal = document.getElementById('cart-modal');
    const openCartBtn = document.getElementById('open-cart');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartCountSpan = document.querySelector('.cart-count');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const itemAddedMessage = document.getElementById('item-added-message');
    let cart = [];

    // New element references for the cart summary and buy button
    const cartSummary = document.querySelector('.cart-summary');
    const cartTotalSpan = document.getElementById('cart-total');
    const buyNowBtn = document.getElementById('buy-now-btn');

    openCartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const item = {
                name: e.target.dataset.name,
                price: parseFloat(e.target.dataset.price),
                image: e.target.dataset.img
            };
            addToCart(item);
        });
    });

    // New click event listener for the buy button
    buyNowBtn.addEventListener('click', () => {
        // This function displays a temporary confirmation message
        showPurchaseConfirmation();

        // After "purchase", the cart is cleared
        cart = [];
        updateCartDisplay();
    });

    function addToCart(item) {
        cart.push(item);
        updateCartDisplay();
        showItemAddedMessage();
    }

    // The updateCartDisplay function was modified to handle the total and the new summary section.
    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0; // Initialize total price

        if (cart.length === 0) {
            emptyCartMessage.style.display = 'block';
            cartCountSpan.style.display = 'none';
            cartSummary.style.display = 'none'; // Hide the summary and button
        } else {
            emptyCartMessage.style.display = 'none';
            cart.forEach(item => {
                total += item.price; // Add item price to the total
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                `;
                cartItemsList.appendChild(li);
            });
            cartCountSpan.style.display = 'block';
            cartCountSpan.textContent = cart.length;

            cartSummary.style.display = 'block'; // Show the summary and button
            cartTotalSpan.textContent = total.toFixed(2); // Update the total price display
        }
    }

    function showItemAddedMessage() {
        itemAddedMessage.classList.add('show');
        setTimeout(() => {
            itemAddedMessage.classList.remove('show');
        }, 2000);
    }

    // New function to show a temporary purchase confirmation message
    function showPurchaseConfirmation() {
        const messageBox = document.createElement('div');
        messageBox.style.position = 'fixed';
        messageBox.style.bottom = '30px';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translateX(-50%)';
        messageBox.style.backgroundColor = '#f9004d';
        messageBox.style.color = 'white';
        messageBox.style.padding = '20px 30px';
        messageBox.style.borderRadius = '10px';
        messageBox.style.zIndex = '1001';
        messageBox.textContent = 'Thank you for your purchase!';
        document.body.appendChild(messageBox);

        setTimeout(() => {
            messageBox.remove();
        }, 3000);
}

var video = document.getElementById("myVideo");
