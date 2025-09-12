import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import { toast } from 'react-toastify';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
const [products, setProducts] = useState([
  // Mobiles
  { id: 1, name: "Apple iPhone 15 Pro", price: 79999, image: "/assets/Electronics/Iphone.png", ratings: "⭐⭐⭐⭐⭐", category: "mobiles" },
  { id: 2, name: "Samsung Galaxy S23", price: 69999, image: "/assets/Electronics/Samsung Galaxy S23.png", ratings: "⭐⭐⭐⭐⭐", category: "mobiles" },
  { id: 3, name: "OnePlus 11", price: 49999, image: "/assets/mobiles/OnePlus11.png", ratings: "⭐⭐⭐⭐", category: "mobiles" },
  { id: 4, name: "Google Pixel 7", price: 59999, image: "/assets/mobiles/google-pixel7-2.jpg", ratings: "⭐⭐⭐⭐", category: "mobiles" },

  // Electronics
  { id: 5, name: "MacBook Air M2", price: 119999, image: "/assets/Electronics/MacBook Air M2.jpg", ratings: "⭐⭐⭐⭐", category: "electronics" },
  { id: 6, name: "Apple Watch Series 8", price: 34999, image: "/assets/Electronics/AppleWatchSeries8.png", ratings: "⭐⭐⭐⭐⭐", category: "electronics" },
  { id: 7, name: "Canon EOS M50 Camera", price: 44999, image: "/assets/Electronics/CanonEOSM50.png", ratings: "⭐⭐⭐⭐", category: "electronics" },
  { id: 8, name: "Sony PlayStation 5", price: 49999, image: "/assets/Electronics/PlayStation5.png", ratings: "⭐⭐⭐⭐⭐", category: "electronics" },

  // Accessories
  { id: 100, name: "Gold Plated Cute Stars Choker Necklace", price: 2999, image: "/assets/accessories/GoldPlatedChoker.png", ratings: "⭐⭐⭐⭐⭐", category: "accessories" },
  { id: 10, name: "Ray-Ban Aviator Sunglasses", price: 7999, image: "/assets/accessories/RayBanAviator.png", ratings: "⭐⭐⭐⭐⭐", category: "accessories" },
  { id: 11, name: "Fossil Men's Watch", price: 9999, image: "/assets/accessories/FossilMensWatch.png", ratings: "⭐⭐⭐⭐", category: "accessories" },
  { id: 12, name: "Gucci Belt", price: 19999, image: "/assets/accessories/GucciBelt.png", ratings: "⭐⭐⭐⭐⭐", category: "accessories" },


  // Home Accessories
  { id: 13, name: "iRobot Roomba 692", price: 29999, image: "/assets/home accessories/IRobotRoomba.png", ratings: "⭐⭐⭐⭐", category: "home accessories" },
  { id: 14, name: "Instant Pot Duo 7-in-1", price: 7999, image: "/assets/home accessories/InstantPotDuo.jpg", ratings: "⭐⭐⭐⭐⭐", category: "home accessories" },
  { id: 15, name: "KitchenAid Stand Mixer", price: 29999, image: "/assets/home accessories/KitchenAidMixer.png", ratings: "⭐⭐⭐⭐⭐", category: "home accessories" },
  { id: 16, name: "Samsung Refrigerator", price: 59999, image: "/assets/home accessories/SamsungRefrigerator.png", ratings: "⭐⭐⭐⭐", category: "home accessories" },

  // Sports
  { id: 17, name: "Adidas Running Shoes", price: 4999, image: "/assets/Sports/AdidasRunningShoes.png", ratings: "⭐⭐⭐⭐⭐", category: "sports" },
  { id: 18, name: "Nike Football", price: 1999, image: "/assets/Sports/NikeFootball.png", ratings: "⭐⭐⭐⭐", category: "sports" },
  { id: 19, name: "Puma Gym Bag", price: 1599, image: "/assets/Sports/PumaGymBag.png", ratings: "⭐⭐⭐⭐", category: "sports" },
  { id: 20, name: "Trek Mountain Bike", price: 79999, image: "/assets/Sports/TrekMountainBike.png", ratings: "⭐⭐⭐⭐⭐", category: "sports" },

  // Men's Fashion
  { id: 21, name: "Levi's Men's Denim Jacket", price: 3999, image: "/assets/Fashion/Mens/LevisDenimJacket.png", ratings: "⭐⭐⭐⭐⭐", category: "men's fashion" },
  { id: 22, name: "Wrangler Men's Jeans", price: 2999, image: "/assets/Fashion/Mens/WranglerJeans.png", ratings: "⭐⭐⭐⭐", category: "men's fashion" },
  { id: 23, name: "H&M Men's Shirt", price: 1299, image: "/assets/Fashion/Mens/HMShirt.png", ratings: "⭐⭐⭐⭐", category: "men's fashion" },
  { id: 24, name: "Gillette Razor", price: 499, image: "/assets/Fashion/Mens/GilletteRazor.png", ratings: "⭐⭐⭐⭐", category: "men's fashion" },

  // Women's Fashion
  { id: 25, name: "Women's Summer Dress", price: 1999, image: "/assets/Fashion/Women/WomensSummerDress.png", ratings: "⭐⭐⭐⭐", category: "women's fashion" },
  { id: 26, name: "Women's Handbag", price: 2999, image: "/assets/Fashion/Women/WomensHandbag.png", ratings: "⭐⭐⭐⭐⭐", category: "women's fashion" },
  { id: 27, name: "Zara Women's Jacket", price: 3999, image: "/assets/Fashion/Women/ZaraJacket.png", ratings: "⭐⭐⭐⭐", category: "women's fashion" },
  { id: 28, name: "Maybelline Lipstick", price: 499, image: "/assets/Fashion/Women/MaybellineLipstick.png", ratings: "⭐⭐⭐⭐", category: "women's fashion" },

  // Skin Care
  { id: 29, name: "Nivea Body Lotion", price: 499, image: "/assets/skinCare/NiveaBodyLotion.png", ratings: "⭐⭐⭐⭐", category: "skin care" },
  { id: 30, name: "The Ordinary Hyaluronic Acid", price: 999, image: "/assets/skinCare/HyaluronicAcid.png", ratings: "⭐⭐⭐⭐⭐", category: "skin care" },
  { id: 31, name: "The Body Shop Body Butter", price: 799, image: "/assets/skinCare/BodyButter.png", ratings: "⭐⭐⭐⭐⭐", category: "skin care" },
  { id: 32, name: "Maybelline Mascara", price: 699, image: "/assets/skinCare/MaybellineMascara.png", ratings: "⭐⭐⭐⭐", category: "skin care" },
]);



  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${user}`)) || [];
      setCart(storedCart);
    } else {
      setCart([]);
    }
  }, [user]);

  const addToCart = (product) => {
    if (!user) {
      toast.error('Please Login First')
      return;
    }

    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(`cart_${user}`, JSON.stringify(updatedCart));
    toast.success(`Item Added to Cart`)
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
