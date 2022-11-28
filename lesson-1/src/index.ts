import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Julia", "/img/avatar.png", 0);
  const today = new Date();
  const checkinDate = new Date(today);
  checkinDate.setDate(today.getDate() + 1);
  const checkoutDate = new Date(today);
  checkoutDate.setDate(today.getDate() + 3);
  renderSearchFormBlock(checkinDate, checkoutDate);
  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );
});
