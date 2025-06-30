import { loginpage } from "./loginpage"
import { xpath } from "../utils/xpath"

export class bookitem extends loginpage{

async purchase(){
  await this.page.keyboard.press("PageDown")
  await this.page.click(xpath.selectitem)
  await this.page.waitForTimeout(3000)
  await this.page.click("#add-to-cart")
  await this.page.click(".shopping_cart_link")
  await this.page.click("#checkout")
}
}