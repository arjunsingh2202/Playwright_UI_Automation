import { bookitem, homepage} from "../pages/bookitem";
import { test,expect } from "@playwright/test"
import { login } from "../fixtures/login";
import { checkout } from "../fixtures/checkoutinfo";

test('book an item',async({page})=>{
await login(page)
// await waitForTimeout(3000)
const book=new bookitem(page)
await book.purchase()
await checkout(page)
await page.waitForTimeout(3000)
})