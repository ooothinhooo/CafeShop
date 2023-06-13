// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Trà sữa truyền thống",
    price: 22,
    category: "TRASUA",
  }, {
    id: "02",
    title: "Trà sữa MATCHA",
    price: 25,
    category: "TRASUA",
  }, {
    id: "03",
    title: "Trà sữa khoai môn",
    price: 25,
    category: "TRASUA",
  }, {
    id: "04",
    title: "Trà sữa thái xanh",
    price: 25,
    category: "TRASUA",
  }, {
    id: "05",
    title: "Trà sữa thái đỏ",
    price: 25,
    category: "TRASUA",
  },
  {
    id: "06",
    title: "Sữa tươi chân châu đường đen",
    price: 25,
    category: "TRASUA",
  },
// 
{
  id: "suachua01",
  title: "Sữa chua VIỆT quốc",
  price: 25,
  category: "SỮA CHUA",
},
{
  id: "suachua02",
  title: "Sữa chua đá",
  price: 20,
  category: "SỮA CHUA",
},

{
  id: "suachua03",
  title: "Sữa chua phúc bồ tử",
  price: 25,
  category: "SỮA CHUA",
},
{
  id: "suachua04",
  title: "Sữa chua dâu",
  price: 25,
  category: "SỮA CHUA",
},
{
  id: "suachua05",
  title: "Sữa chua kiwi",
  price: 25,
  category: "SỮA CHUA",
},
{
  id: "suachua06",
  title: "Sữa chua đào",
  price: 25,
  category: "SỮA CHUA",
},
// 
{
  id: "tra01",
  title: "Trà dưa lưới",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà chanh",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà đào",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà hạt sen",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà đào cam sả",
  price: 25,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà lipton đá",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà chanh dây",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà dâu",
  price: 20,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà mãng cầu",
  price: 25,
  category: "TRÀ",
},{
  id: "tra01",
  title: "Trà trái cây nhiệt đới",
  price: 25,
  category: "TRÀ",
},
// 
{
  id: "yAourt01",
  title: "yAourt kiwi dầm ",
  price: 30,
  category: "YAOURT",
},
{
  id: "yAourt02",
  title: "yAourt dâu dầm",
  price: 30,
  category: "YAOURT",
},{
  id: "yAourt03",
  title: "yAourt nho dầm",
  price: 30,
  category: "YAOURT",
},{
  id: "yAourt04",
  title: "yAourt chanh dây dầm",
  price: 25,
  category: "YAOURT",
},{
  id: "yAourt05",
  title: "yAourt bơ dầm",
  price: 30,
  category: "YAOURT",
},

// 
{
  id: "sinhto01",
  title: "Sinh tố dâu",
  price: 25,
  category: "SINH TỐ",
},
{
  id: "sinhto02",
  title: "Sinh tố bơ ",
  price: 25,
  category: "SINH TỐ",
},{
  id: "sinhto03",
  title: "Sinh tố sapo",
  price: 25,
  category: "SINH TỐ",
},{
  id: "sinhto04",
  title: "Sinh tố kiwi",
  price: 30,
  category: "SINH TỐ",
},{
  id: "sinhto05",
  title: "Sinh tố chanh tuyết",
  price: 25,
  category: "SINH TỐ",
},{
  id: "sinhto06",
  title: "Sinh tố mãng cầu",
  price: 25,
  category: "SINH TỐ",
},{
  id: "sinhto07",
  title: "Sinh tố dưa lưới",
  price: 30,
  category: "SINH TỐ",
},{
  id: "sinhto08",
  title: "Sinh tố cam",
  price: 25,
  category: "SINH TỐ",
},{
  
  id: "sinhto09",
  title: "Sinh tố dừa",
  price: 25,
  category: "SINH TỐ",
},


//
{
  id: "daxay01",
  title: "Đá Xay việt quất",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay02",
  title: "Đá Xay matcha",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay03",
  title: "Đá Xay kiwi",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay04",
  title: "Đá Xay chanh dây",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay05",
  title: "Đá Xay dâu",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay06",
  title: "Đá Xay hoa hồng",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay07",
  title: "Đá Xay chanh tuyết",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay08",
  title: "Đá Xay biển xanh",
  price: 25,
  category: "ĐÁ XAY",
},{
  id: "daxay09",
  title: "Đá Xay cookie original",
  price: 25,
  category: "ĐÁ XAY",
},
//
{
  id: "nuocep01",
  title: "NƯớc ép khóm",
  price: 25,
  category: "NƯỚC ÉP",
},{
  id: "nuocep02",
  title: "NƯớc ép bưởi",
  price: 25,
  category: "NƯỚC ÉP",
},{
  id: "nuocep03",
  title: "NƯớc ép chanh dây",
  price: 20,
  category: "NƯỚC ÉP",
},{
  id: "nuocep04",
  title: "NƯớc ép táo",
  price: 30,
  category: "NƯỚC ÉP",
},{
  id: "nuocep05",
  title: "NƯớc ép cà rốt",
  price: 25,
  category: "NƯỚC ÉP",
},{
  id: "nuocep06",
  title: "NƯớc ép dưa hấu",
  price: 20,
  category: "NƯỚC ÉP",
},{
  id: "nuocep07",
  title: "NƯớc ép cà chua",
  price: 25,
  category: "NƯỚC ÉP",
},{
  id: "nuocep08",
  title: "NƯớc ép dưa lưới",
  price: 25,
  category: "NƯỚC ÉP",
},{
  id: "nuocep09",
  title: "NƯớc ép cam",
  price: 20,
  category: "NƯỚC ÉP",
},
//
{
  id: "caphe01",
  title: "CÂCO SỮA ĐÁ",
  price: 25,
  category: "CAFE",
},
{
  id: "caphe01",
  title: "CÀ PHÊ SỮA ĐÁ",
  price: 17,
  category: "CAFE",
},
{
  id: "caphe01",
  title: "CÀ PHÊ ĐÁ",
  price: 12,
  category: "CAFE",
},
{
  id: "caphe01",
  title: "BẠC SĨU",
  price: 17,
  category: "CAFE",
},

//
{
  id: "SODA01",
  title: "SODA DÂU",
  price: 20,
  category: "SODA",
},{
  id: "SODA02",
  title: "SODA KIWI",
  price: 20,
  category: "SODA",
},{
  id: "SODA03",
  title: "SODA BẠC HÀ",
  price: 20,
  category: "SODA",
},{
  id: "SODA04",
  title: "SODA BIỂN XANH",
  price: 20,
  category: "SODA",
},{
  id: "SODA05",
  title: "SODA CHANH",
  price: 20,
  category: "SODA",
},{
  id: "SODA06",
  title: "SODA TÌNH YÊU",
  price: 25,
  category: "SODA",
},
];

export default products;
