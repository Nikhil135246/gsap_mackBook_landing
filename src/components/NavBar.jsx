import React from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {
            //object banya {}
            // [
            //   //aray banya []
            //   { lable: "Store" },
            //   { lable: "Mac" },
            //   { lable: "iPhone" },
            //   { lable: "Watch" },
            //   { lable: "Vision" },
            //   { lable: "AirPods" },
              
            // ]https://youtu.be/DEeaT6FxEws?t=1188
            // upper jo phachank tha uske liye ek constant bana ke navLinks mein rakhd diye taki kabhi bhi utha ke use karo 
            navLinks.map((link) => (
                <li key={link.lable}>
                <a href={link.lable}>{link.lable}</a>
              </li>
                    //https://chatgpt.com/share/692efda0-af84-8000-bf8f-54db9b21fa9d
                    // .map() har object ko ek-ek karke lega.
                    // ye ()= return kya krna ha bin line 20
                    // link sirf variable ka naam hai.(arr ke ander wale oject ko represent  krne ke liye )
                    //Ye code basically bol raha hai:
                    //“Array me jitne items hain, utne <li> bana do.”
                    //Bas.
                    //React me .map() isi kaam ke liye use hota hai.
                    //! tip u can de structre the lable just do .map(({lable}) => (
            ))
          }
        </ul>
            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />

                </button>
            </div>
      </nav>
    </header>
  );
};

export default NavBar;
