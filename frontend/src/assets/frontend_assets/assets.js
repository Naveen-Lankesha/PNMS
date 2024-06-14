import basket_icon from "./basket_icon.png";
import logo from "./logo.svg";
import cloudlogo from "./cloudlogo.png";
import PNMSlogo from "./PNMSlogo.svg";
import background from "./background.png";
import header_img from "./header_img.png";
import search_icon from "./search_icon.png";

import menu_1 from "./Adidas_logo.png";
import menu_2 from "./Nike_logo.png";
import menu_3 from "./Puma_logo.png";
import menu_4 from "./Reebok_logo.png";
// import menu_5 from "./menu_5.png";
// import menu_6 from "./menu_6.png";
// import menu_7 from "./menu_7.png";
// import menu_8 from "./menu_8.png";

//other
import item1 from "./pesticides.png";
import item2 from "./fertilizers.png";
import item3 from "./nursarybags.png";
import item4 from "./burntRiceHusk.png";
import item5 from "./compost.png";

//adidas
import shoe_1 from "./shoe_1_adidas_campus 00s Youth trainers_70.jpg";
import shoe_2 from "./shoe_1_adidas_gazelle_40.jpg";
import shoe_3 from "./shoe_1_adidas_samba og_50.jpg";
import shoe_4 from "./shoe_1_adidas_vl court 3.0_65.jpg";

//nike
import shoe_5 from "./shoe_1_nike_air force 1_75.jpg";
import shoe_6 from "./shoe_1_nike_al8 trainers in white & grey_80.jpg";
import shoe_7 from "./shoe_1_nike_court borough low Girls Junior trainers_38.jpg";
import shoe_8 from "./shoe_1_nike_navy multi court borough low recraft Boys Toddler trainers_35.jpg";

//puma
import shoe_9 from "./shoe_1_puma_caven 2.0_50.jpg";
import shoe_10 from "./shoe_1_puma_palermo trainers in green_75.jpg";
import shoe_11 from "./shoe_1_puma_terrace classic trainers in white & green_75.jpg";
import shoe_12 from "./shoe_1_puma_white & green morphic Junior trainers_52.jpg";

//reebok
import shoe_13 from "./shoe_1_reebok_club c 85 trainers in white_75.jpg";
import shoe_14 from "./shoe_1_reebok_club c bulc trainers in white & black_100.jpg";
import shoe_15 from "./shoe_1_reebok_club c double trainers in white & burgundy_100.jpg";
import shoe_16 from "./shoe_1_reebok_club c revenge trainers in white & green_75.jpg";

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
};

export const menu_list = [
  {
    menu_name: "Adidas",
    menu_image: menu_1,
  },
  {
    menu_name: "Nike",
    menu_image: menu_2,
  },
  {
    menu_name: "Puma",
    menu_image: menu_3,
  },
  {
    menu_name: "Reebok",
    menu_image: menu_4,
  },
];

export const shoe_list = [
  {
    _id: "1",
    name: "Adidas",
    image: item1,
    price: 80.0,
    description: "Campus 00s Youth trainers",
    category: "Adidas",
  },
  {
    _id: "2",
    name: "Adidas",
    image: item2,
    price: 40,
    description: "Adidas Gazelle",
    category: "Adidas",
  },
  {
    _id: "3",
    name: "Adidas",
    image: item3,
    price: 50,
    description: "Samba OG",
    category: "Adidas",
  },
  {
    _id: "4",
    name: "Adidas",
    image: item4,
    price: 65,
    description: "Vl Court 3.0",
    category: "Adidas",
  },
  {
    _id: "5",
    name: "Nike",
    image: item5,
    price: 75,
    description: "Air Force 1",
    category: "Nike",
  },
  // {
  //   _id: "6",
  //   name: "Nike",
  //   image: shoe_6,
  //   price: 80,
  //   description: "Al8 trainers in white & grey",
  //   category: "Nike",
  // },
  // {
  //   _id: "7",
  //   name: "Nike",
  //   image: shoe_7,
  //   price: 38,
  //   description: "Court Borough Low Girls Junior trainers",
  //   category: "Nike",
  // },
  // {
  //   _id: "8",
  //   name: "Nike",
  //   image: shoe_8,
  //   price: 35,
  //   description: "Navy multi court borough low recraft Boys Toddler",
  //   category: "Nike",
  // },
  // {
  //   _id: "9",
  //   name: "Puma",
  //   image: shoe_9,
  //   price: 50,
  //   description: "Caven 2.0",
  //   category: "Puma",
  // },
  // {
  //   _id: "10",
  //   name: "Puma",
  //   image: shoe_10,
  //   price: 75,
  //   description: "Plermo trainers in green",
  //   category: "Puma",
  // },
  // {
  //   _id: "11",
  //   name: "Puma",
  //   image: shoe_11,
  //   price: 75,
  //   description: "Terrace Classic trainers in white & green",
  //   category: "Puma",
  // },
  // {
  //   _id: "12",
  //   name: "Puma",
  //   image: shoe_12,
  //   price: 52,
  //   description: "White & green Morphic Junior trainers",
  //   category: "Puma",
  // },
  // {
  //   _id: "13",
  //   name: "Reebok",
  //   image: shoe_13,
  //   price: 75,
  //   description: "Club C 85 trainers in white",
  //   category: "Reebok",
  // },
  // {
  //   _id: "14",
  //   name: "Reebok",
  //   image: shoe_14,
  //   price: 100,
  //   description: "Club C bulc trainers in white & black",
  //   category: "Reebok",
  // },
  // {
  //   _id: "15",
  //   name: "Reebok",
  //   image: shoe_15,
  //   price: 100,
  //   description: "Club C double trainers in white & burgundy",
  //   category: "Reebok",
  // },
  // {
  //   _id: "75",
  //   name: "Reebok",
  //   image: shoe_16,
  //   price: 24,
  //   description: "Club C Revenge trainers in white & green",
  //   category: "Reebok",
  // },
  // {
  //   _id: "17",
  //   name: "Cup Cake",
  //   image: food_17,
  //   price: 14,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Cake",
  // },
  // {
  //   _id: "18",
  //   name: "Vegan Cake",
  //   image: food_18,
  //   price: 12,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Cake",
  // },
  // {
  //   _id: "19",
  //   name: "Butterscotch Cake",
  //   image: food_19,
  //   price: 20,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Cake",
  // },
  // {
  //   _id: "20",
  //   name: "Sliced Cake",
  //   image: food_20,
  //   price: 15,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Cake",
  // },
  // {
  //   _id: "21",
  //   name: "Garlic Mushroom ",
  //   image: food_21,
  //   price: 14,
  //   description:
  //     "Food provides essential nutrients for overall health and well-being",
  //   category: "Pure Veg",
  // },
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
