import { loginpage } from "../pages/loginpage";


export async function login(page){
        const loginpageobj=new loginpage(page);
        await loginpageobj.login()
}