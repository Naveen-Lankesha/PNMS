import basket_icon from "./basket_icon.png";
import logo from "./logo.svg";
import cloudlogo from "./cloudlogo.png";
import PNMSlogo from "./PNMSlogo.svg";
import background from "./background.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";

import menu_1 from "./pesticidesicon.png";
import menu_2 from "./seedicon.jpg";
import menu_3 from "./planticon.png";
// import menu_5 from "./menu_5.png";
// import menu_6 from "./menu_6.png";
// import menu_7 from "./menu_7.png";
// import menu_8 from "./menu_8.png";

//Inventory
import item1 from "./abamectin.png";
import item2 from "./coir dust.png";
import item3 from "./nursarybags.png";
import item4 from "./rice_husk.png";
import item5 from "./compost.png";
import item6 from "./actara.png";
//import item6 from "./ready_to_sell.png"
//import item7 from "./seed.png"

//Vegetable
import veg1 from "./green_cabbage.png";
import veg2 from "./purple_cabbage.png";
import veg3 from "./chilli.png";
import veg4 from "./waraniya.png";
import veg5 from "./capsicum.png";
import veg6 from "./karawila.png";
import veg7 from "./tomato.png";
import veg8 from "./carrot.png";
import veg9 from "./beet.png";
import veg10 from "./Brinjal.png";
import veg11 from "./thith_batu.png";
import veg12 from "./chinese_cabbage.png";
import veg13 from "./Salad_Leaves.png";
import veg14 from "./nokol.png";
import veg15 from "./gourd.png";
import veg16 from "./Snake_Gaurd.png";

import add_icon_white from "./add_icon_white.png";
import add_icon_green from "./add_icon_green.png";
import remove_icon_red from "./remove_icon_red.png";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import linkedin_icon from "./linkedin_icon.png";
import facebook_icon from "./facebook_icon.png";
import twitter_icon from "./twitter_icon.png";
import cross_icon from "./cross_icon.png";
import selector_icon from "./selector_icon.png";
import rating_starts from "./rating_starts.png";
import profile_icon from "./profile_icon.png";
import bag_icon from "./bag_icon.png";
import logout_icon from "./logout_icon.png";
import parcel_icon from "./parcel_icon.png";
import notificationback from "./notificationback.png";

export const assets = {
  logo,
  cloudlogo,
  PNMSlogo,
  background,
  basket_icon,
  header_img,
  search_icon,
  rating_starts,
  add_icon_green,
  add_icon_white,
  remove_icon_red,
  app_store,
  play_store,
  linkedin_icon,
  facebook_icon,
  twitter_icon,
  cross_icon,
  selector_icon,
  profile_icon,
  logout_icon,
  bag_icon,
  parcel_icon,
  notificationback,
};

export const menu_list = [
  {
    menu_name: "Material",
    menu_image: menu_1,
  },
  {
    menu_name: "Seeds",
    menu_image: menu_2,
  },
  {
    menu_name: "Plants",
    menu_image: menu_3,
  },
  // {
  //   menu_name: "Reebok",
  //   menu_image: menu_4,
  // },
];
export const veg_list=[{
  _id: "6",
  name: "Green cabbage",
  image: veg1,
  price: 15000,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "7",
  name: "Purple cabbage",
  image: veg2,
  price: 15000,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "8",
  name: "Green Chilli(F1)",
  image: veg3,
  price: 1000,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "9",
  name: "Waraniya",
  image: veg4,
  price: 850,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "10",
  name: "Capsicum",
  image: veg5,
  price: 2500,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "11",
  name: "Karawila",
  image: veg6,
  price: 100,
  description: "10g packet",
  category: "Seeds",
},
{
  _id: "12",
  name: "Tomato",
  image: veg7,
  price: 2300,
  description: "2g packet",
  category: "Seeds",
},
{
  _id: "13",
  name: "Carrot",
  image: veg8,
  price: 80,
  description: "2g packet",
  category: "Seeds",
},
{
  _id: "14",
  name: "Beetroot",
  image: veg9,
  price: 80,
  description: "2g packet",
  category: "Seeds",
},
{
  _id: "15",
  name: "Brinjal",
  image: veg10,
  price: 3500,
  description: "50g packet",
  category: "Seeds",
},
{
  _id: "16",
  name: "Thibbatu",
  image: veg11,
  price: 200,
  description: "5g packet",
  category: "Seeds",
},
{
  _id: "17",
  name: "Chinese Cabbage",
  image: veg12,
  price: 190,
  description: "1g packet",
  category: "Seeds",
},
{
  _id: "18",
  name: "Salad Leaves",
  image: veg13,
  price: 190,
  description: "1g packet",
  category: "Seeds",
},
{
  _id: "19",
  name: "Nokol",
  image: veg14,
  price: 1500,
  description: "10g packet",
  category: "Seeds",
},
{
  _id: "20",
  name: "Watakolu",
  image: veg15,
  price: 80,
  description: "2g packet",
  category: "Seeds",
},
{
  _id: "21",
  name: "Pathola",
  image: veg16,
  price: 80,
  description: "2g packet",
  category: "Seeds",
}];
export const shoe_list = [
  {
    _id: "1",
    name: "Pesticides(Abamectin)",
    image: item1,
    price: 1050,
    description: "50ml Bottle",
    category: "Material",
  },
  {
    _id: "38",
    name: "Pesticides(Actara)",
    image: item6,
    price: 490,
    description: "8g packets",
    category: "Material",
  },
  {
    _id: "2",
    name: "Fertilizers(Coir Dust)",
    image: item2,
    price: 520,
    description: "10kg Package ",
    category: "Material",
  },
  {
    _id: "5",
    name: "Fertilizers(Compost)",
    image: item5,
    price: 725,
    description: "20kg Package",
    category: "Material",
  },

  {
    _id: "3",
    name: "Nursery Bags",
    image: item3,
    price: 135,
    description: " 1kg Polythene bags",
    category: "Material",
  },

  {
    _id: "6",
    name: "Green cabbage",
    image: veg1,
    price: 15000,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "7",
    name: "Purple cabbage",
    image: veg2,
    price: 15000,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "8",
    name: "Green Chilli(F1)",
    image: veg3,
    price: 1000,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "9",
    name: "Waraniya",
    image: veg4,
    price: 850,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "10",
    name: "Capsicum",
    image: veg5,
    price: 2500,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "11",
    name: "Karawila",
    image: veg6,
    price: 100,
    description: "10g packet",
    category: "Seeds",
  },
  {
    _id: "12",
    name: "Tomato",
    image: veg7,
    price: 2300,
    description: "2g packet",
    category: "Seeds",
  },
  {
    _id: "13",
    name: "Carrot",
    image: veg8,
    price: 80,
    description: "2g packet",
    category: "Seeds",
  },
  {
    _id: "14",
    name: "Beetroot",
    image: veg9,
    price: 80,
    description: "2g packet",
    category: "Seeds",
  },
  {
    _id: "15",
    name: "Brinjal",
    image: veg10,
    price: 3500,
    description: "50g packet",
    category: "Seeds",
  },
  {
    _id: "16",
    name: "Thibbatu",
    image: veg11,
    price: 200,
    description: "5g packet",
    category: "Seeds",
  },
  {
    _id: "17",
    name: "Chinese Cabbage",
    image: veg12,
    price: 190,
    description: "1g packet",
    category: "Seeds",
  },
  {
    _id: "18",
    name: "Salad Leaves",
    image: veg13,
    price: 190,
    description: "1g packet",
    category: "Seeds",
  },
  {
    _id: "19",
    name: "Nokol",
    image: veg14,
    price: 1500,
    description: "10g packet",
    category: "Seeds",
  },
  {
    _id: "20",
    name: "Watakolu",
    image: veg15,
    price: 80,
    description: "2g packet",
    category: "Seeds",
  },
  {
    _id: "21",
    name: "Pathola",
    image: veg16,
    price: 80,
    description: "2g packet",
    category: "Seeds",
  },
  {
    _id: "22",
    name: "Green cabbage",
    image: veg1,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "23",
    name: "Purple cabbage",
    image: veg2,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "24",
    name: "Green Chilli",
    image: veg3,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "25",
    name: "Waraniya",
    image: veg4,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "26",
    name: "Capsicum",
    image: veg5,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "27",
    name: "Karawila",
    image: veg6,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "28",
    name: "Tomato",
    image: veg7,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "29",
    name: "Carrot",
    image: veg8,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "30",
    name: "Beetroot",
    image: veg9,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "31",
    name: "Egg plant",
    image: veg10,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "32",
    name: "Thibbatu",
    image: veg11,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "33",
    name: "Chinese Cabbage",
    image: veg12,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "34",
    name: "Salad Leaves",
    image: veg13,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "35",
    name: "Nokol",
    image: veg14,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "36",
    name: "Watakolu",
    image: veg15,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  {
    _id: "37",
    name: "Pathola",
    image: veg16,
    price: 80,
    description: "Plants Ready to sell",
    category: "Plants",
  },
  // {
  //   _id: "22",
  //   name: "Fried Cauliflower",
  //   image: food_22,
  //   price: 22,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pure Veg",
  // },
  // {
  //   _id: "23",
  //   name: "Mix Veg Pulao",
  //   image: food_23,
  //   price: 10,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pure Veg",
  // },
  // {
  //   _id: "24",
  //   name: "Rice Zucchini",
  //   image: food_24,
  //   price: 12,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pure Veg",
  // },
  // {
  //   _id: "25",
  //   name: "Cheese Pasta",
  //   image: food_25,
  //   price: 12,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pasta",
  // },
  // {
  //   _id: "26",
  //   name: "Tomato Pasta",
  //   image: food_26,
  //   price: 18,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pasta",
  // },
  // {
  //   _id: "27",
  //   name: "Creamy Pasta",
  //   image: food_27,
  //   price: 16,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pasta",
  // },
  // {
  //   _id: "28",
  //   name: "Chicken Pasta",
  //   image: food_28,
  //   price: 24,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pasta",
  // },
  // {
  //   _id: "29",
  //   name: "Buttter Noodles",
  //   image: food_29,
  //   price: 14,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Noodles",
  // },
  // {
  //   _id: "30",
  //   name: "Veg Noodles",
  //   image: food_30,
  //   price: 12,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Noodles",
  // },
  // {
  //   _id: "31",
  //   name: "Somen Noodles",
  //   image: food_31,
  //   price: 20,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Noodles",
  // },
  // {
  //   _id: "32",
  //   name: "Cooked Noodles",
  //   image: food_32,
  //   price: 15,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Noodles",
  // },
];
