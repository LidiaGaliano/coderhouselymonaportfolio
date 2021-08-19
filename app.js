let lista = true;
addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu");
  if (btn_menu) {
    btn_menu.addEventListener("click", () => {
      console.log(true);
      const menu_items = document.querySelector(".menu_items");
      if (lista) {
        menu_items.style.top = 0;
        lista = false;
      } else {
        menu_items.style.top = "-150vh";
        lista = true;
      }
    });
  }
});
