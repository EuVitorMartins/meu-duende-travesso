const checkoutUrl = "https://pay.wiapy.com/QIcIA92JzjzV";
const checkout = document.querySelector("#checkout");
const checkoutStatus = document.querySelector("#checkout-status");

checkout.addEventListener("click", () => {
  if (checkoutUrl) {
    window.location.assign(checkoutUrl);
    return;
  }
  checkoutStatus.showModal();
});
