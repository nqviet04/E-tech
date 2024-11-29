// document.addEventListener("DOMContentLoaded", function () {
//   const categoriesButton = document.getElementById("categoriesButton");
//   const categoriesMenu = document.getElementById("categoriesMenu");

//   categoriesButton.addEventListener("click", function () {
//     if (categoriesMenu.classList.contains("show")) {
//       categoriesMenu.classList.remove("show");
//       categoriesMenu.style.maxHeight = "0";
//     } else {
//       categoriesMenu.classList.add("show");
//       categoriesMenu.style.maxHeight = "200px";
//     }
//   });

//   document.addEventListener("click", function (event) {
//     if (
//       !categoriesButton.contains(event.target) &&
//       !categoriesMenu.contains(event.target)
//     ) {
//       categoriesMenu.classList.remove("show");
//       categoriesMenu.style.maxHeight = "0";
//     }
//   });
// });

const header_bottom = document.querySelector(".header-bottom");
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header_bottom.classList.add("sticky");
    back_to_top.classList.add("active");
  } else {
    header_bottom.classList.remove("sticky");
    back_to_top.classList.remove("active");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
  return false;
});

// Hiển thị thông báo thêm vào giỏ hàng
function showCartNotification(button) {
  const productCard = button.closest('.product-card');
  if (productCard) {
    const notification = productCard.querySelector('.cart-notification');
    if (notification) {
      notification.style.opacity = '1';
      notification.style.visibility = 'visible';


      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
      }, 2000);
    }
  }

  const productItem = button.closest('.product-item');
  if (productItem) {
    const notification = productItem.querySelector('.cart-notification');
    if (notification) {
      notification.style.opacity = '1'; 
      notification.style.visibility = 'visible';

      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
      }, 2000);
    }
  }

  const productDetail = button.closest('.product-detail-actions');
  if (productDetail) {
    const notification = productDetail.querySelector('.cart-notification');
    if (notification) {
      notification.style.opacity = '1'; 
      notification.style.visibility = 'visible';

      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.visibility = 'hidden';
      }, 2000);
    }
  }
}

// Hàm tăng giảm số lượng sản phẩm 
function increaseQuantity() {
  var quantityInput = document.getElementById('quantity');
  var currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
}

function decreaseQuantity() {
  var quantityInput = document.getElementById('quantity');
  var currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
  }
}

// Chức năng cập nhật giỏ hàng
const cartCountElement = document.querySelector('.cart-count');
function updateCartCount() {
  let currentCount = parseInt(cartCountElement.textContent, 10) || 0; 
  cartCountElement.textContent = currentCount + 1; 
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', updateCartCount);
});

// Hàm cập nhật giá tiền khi tăng sản phẩm
const unitPrice = 1150000; // Giá một sản phẩm
const totalPriceElement = document.getElementById('totalPrice');
const quantityInput = document.getElementById('quantity');

// Hàm cập nhật tổng tiền
function updateTotal() {
  const quantity = parseInt(quantityInput.value) || 0;
  const totalPrice = unitPrice * quantity;
  totalPriceElement.textContent = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(totalPrice);
}

// Hàm tăng số lượng
function increaseQuantity() {
  let quantity = parseInt(quantityInput.value) || 0;
  quantity++;
  quantityInput.value = quantity;
  updateTotal();
}

// Hàm giảm số lượng
function decreaseQuantity() {
  let quantity = parseInt(quantityInput.value) || 0;
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
    updateTotal();
  }
}

// Sự kiện khi người dùng nhập trực tiếp vào ô số lượng
quantityInput.addEventListener('input', () => {
  updateTotal();
});



