# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


steps i followed 

setup vite + react 
#npm create vite@latest my-app --template react


2. Tailwindcss setup 
https://tailwindcss.com/docs/installation/using-vite

#npm install tailwindcss @tailwindcss/vite


    // step 2.1 to import tailwindcss in vite.config.js
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  // step 2.2 was added tailwindcss(), in the plugins array
  plugins: [react(),tailwindcss()],
  // step 2.3 to import tailwindcss in index.css
like : @import "tailwindcss";
done 
Now u can use tailwind like 
{ <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>}
  this in app.jsx or whereever u want 



lesson 2 : premade fonts and assests downlaod and setup 
what we did 
1.pasted public from assests to mine , mine was empy onty vite icone now i got all essential icones
2.pasted index.css from him to mine mine was empty as expected 

Lesson 3: making navigation bar 
create folder component inside scr folder 
componenet ke ander 
{
  navbar.jsx and (run rafce) template dedega 
}


in app.jsx remove h1 tage or helloworld thing 
and 
did wrap thing inside (main tag )(just ek chiz hoga sab chiz main tag ke ander hoga )
and added <NavBar/>

now making navbar 

Lesson 4 
nav bar mein 
<!-- {
            //object banya {}
            [
              //aray banya []
              { lable: "Store" },
              { lable: "Mac" },
              { lable: "iPhone" },
              { lable: "Watch" },
              { lable: "Vision" },
              { lable: "AirPods" },
              
            ].map((link) => (
                <li key={link.lable}>
                <a href={link.lable}>{link.lable}</a>
              </li> -->

ye kar sakte ho per eske liye ek dedicated component banaynge called Navlinks and now kabhi bhi kahi bhi use karo 
constand/index.js/navLinks
https://youtu.be/DEeaT6FxEws?t=1167 = constant ke ander index.js banae se kya advantange milta ha 


lesson 5 : github repo setup 
