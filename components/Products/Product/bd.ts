import { IProduct } from "./Product";
import img1 from './img/products_1.png'
import img2 from './img/products_2.png'
import img3 from './img/products_3.png'
import img4 from './img/products_4.png'
import img5 from './img/products_5.png'
import img6 from './img/products_6.png'
import img7 from './img/products_7.png'
import img8 from './img/products_8.png'
import img9 from './img/products_9.png'

export const bd: IProduct[] = [
    {
      title: "Чехлы",
      elements: [
        {
          title: "Стеклянные",
          img: img1,
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: "1",
          logo_visible: false,

        },
        {
          title: "Силиконовые",
          img: img2,
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: "2",
          logo_visible: false,

        },
        {
          title: "Кожаные",
          img: img3,
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: "3",
          logo_visible: false,

        }
      ]
    },
    {
      title: "Наушники",
      elements: [
        {
          title: "Apple EarPods",
          img: img4,
          like: false,
          manufacturer: "apple",
          price: "1 999",
          like_visible: true,
          id: "4",
          logo_visible: false,

        },
        {
          title: "Apple EarPods",
          img: img5,
          like: true,
          manufacturer: "apple",
          price: "1 999",
          like_visible: true,
          id: "5",
          logo_visible: false,

        },
        {
          title: "Apple EarPods",
          img: img6,
          like: false,
          manufacturer: "apple",
          price: "2 999",
          like_visible: true,
          id: "6",
          logo_visible: false,

        }
      ]
    },
    {
      title: "Беспроводные наушники",
      elements: [
        {
          title: "Apple AirPods",
          img: img7,
          like: false,
          manufacturer: "apple",
          price: "12 990",
          like_visible: true,
          id: "7",
          logo_visible: true,

          },
        {
          title: "Apple AirPods Pro",
          img: img8,
          like: false,
          manufacturer: "apple",
          price: "22 999",
          like_visible: true,
          id: "8",
          logo_visible: false,

        },
        {
          title: "Beats",
          img: img9,
          like: false,
          manufacturer: "apple",
          price: "10 000",
          like_visible: true,
          id: "9",
          logo_visible: false,

        }
      ]
    }
  ]