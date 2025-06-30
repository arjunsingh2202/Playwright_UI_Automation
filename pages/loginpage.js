import { xpath } from "../utils/xpath";
import { testdata } from "../utils/testdata";
import { baseclass } from "../utils/baseclass";

export class loginpage extends baseclass{

async login(){
   
    const username=this.page.locator(xpath.username)
    const password=this.page.locator(xpath.password)
    await this.page.goto("/")
    await username.fill(testdata.username)
    await password.fill(testdata.password)
    await this.page.click(xpath.loginbutton)
    await this.page.waitForTimeout(3000)
}
}