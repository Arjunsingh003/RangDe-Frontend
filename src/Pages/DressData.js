const dressData = [
    {
      id:"1",
      Work:true,
      Wedding:false,
      Party:false,
   
      Outfit1:"https://m.media-amazon.com/images/I/51B1EO5D6GL._SY879._SX._UX._SY._UY_.jpg",
      Outfit2:"https://m.media-amazon.com/images/I/61bFMJ9qcBL._AC_UL600_FMwebp_QL65_.jpg",
      Outfit3:"https://m.media-amazon.com/images/I/61uQg8+H+HL._UY695_.jpg"
    },
    {
      id:"2",
      Work:true,
      Wedding:false,
      Party:false,
     
      Outfit1:"https://m.media-amazon.com/images/I/61SCMJqDXJL._AC_UL600_FMwebp_QL65_.jpg",
      Outfit2:"https://m.media-amazon.com/images/I/51jXgsSM6SL._AC_UL600_FMwebp_QL65_.jpg",
      Outfit3:"https://m.media-amazon.com/images/I/61hLr16Js0L._UL1500_.jpg"
    },
    {
        id:"3",
        Work:true,
        Wedding:false,
        Party:false,
      
        Outfit1:"https://m.media-amazon.com/images/I/61FzM+tTyXL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/51AUhV63dPL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/41Vglwr+93L._UL1440_.jpg"
      },
      {
        id:"4",
        Work:false,
        Wedding:true,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/61wlFY2BdJL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/81gJPc56hYL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/81xJ+EvtwBL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"5",
        Work:false,
        Wedding:true,
        Party:false,
       
        Outfit1:"https://m.media-amazon.com/images/I/41DxftfQWML._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/6110CJb9OBL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/81dHNdDTBrL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"5",
        Work:false,
        Wedding:true,
        Party:false,
        // Occasion:"Wedding",
        Outfit1:"https://m.media-amazon.com/images/I/71MmVpspVEL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/814mMt+tFML._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/71ZhcbRVyCL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"6",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/51EodL-ka4L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61SzE5hBk7L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/31W09sDKEVL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"7",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61k9Sax6JjL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/51uqF7aiFiL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/618Mvy1XRpL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"8",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/713EWcF36KL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/81elLgvQGKL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/61hm553X05L._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"9",
        Work:true,
        Wedding:false,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/41Vv54VfFUL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/611D-i+lEUL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://th.bing.com/th/id/OIP.VbL8abMFozvU_we4trf_1wHaHa?pid=ImgDet&rs=1"
      },
      {
        id:"10",
        Work:true,
        Wedding:false,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/61ybZeYk10L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61b4TvcuGcL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://th.bing.com/th/id/OIP.dQtvqU5UjMZ8S9Z-SE5dowHaHa?pid=ImgDet&w=640&h=640&rs=1"
      },
      {
        id:"11",
        Work:true,
        Wedding:false,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/51VclxD0FLL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61xysD8IYeL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://th.bing.com/th/id/OIP.PIQTpDWOu4WNSC1PuYVyKwHaHa?pid=ImgDet&w=640&h=640&rs=1"
      },
      {
        id:"12",
        Work:true,
        Wedding:false,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/51p2Hfedo9L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/31TKmVZtYOS._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://cheapsalemarket.com/wp-content/uploads/2019/08/Elegant-Party-Club-Bow-Peep-Toe-Platform-Thin-High-Heels-Pumps-Cute-Sweet-Platform-Women-Shoes-2.jpg"
      },
      {
        id:"13",
        Work:false,
        Wedding:true,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/61DvDJj-5yL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61zTVMTWD7L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/914xdapNNlL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"14",
        Work:false,
        Wedding:true,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/81PtbFjdckL._AC_UL600_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/71JI3RoeF0L._AC_UL600_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/612SnRAFO+S._AC_UL600_QL65_.jpg"
      },
      {
        id:"15",
        Work:false,
        Wedding:true,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/81CZRWQxmyL._AC_UL600_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/81az3ofYCVL._AC_UL600_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/51kfVYQ5b-L._AC_UL600_QL65_.jpg"
      },
      {
        id:"16",
        Work:false,
        Wedding:true,
        Party:false,
     
        Outfit1:"https://m.media-amazon.com/images/I/81tCMPqc25L._AC_UL600_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/71ODJmJ-6eL._AC_UL600_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/81gQc2VVh1L._AC_UL600_QL65_.jpg"
      },
      {
        id:"17",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61SPqHyLA0L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/41zEt6W-LLL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/51F8qaDJTbL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"18",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61SoKnvHn2L._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/31wYoO1JFCL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/71kWSY37fKL._AC_UL600_FMwebp_QL65_.jpg"
      },
      {
        id:"19",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/71oEc6yO7GL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/51IO3GgeblL._AC_UL600_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/71uoc7rLPLL._AC_UL600_QL65_.jpg"
      },
      {
        id:"20",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/41kXHfZFkoL._AC_UL600_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/71qs3hHvSEL._AC_UL600_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/71wGeK+VNmL._AC_UL600_QL65_.jpg"
      },
      {
        id:"21",
        Work:true,
        Wedding:false,
        Party:false,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61Zve1GUlTL._AC_UL600_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/71HmAqa9wKL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/61X1C-A+zdS._AC_UL480_FMwebp_QL65_.jpg"
      },
      {
        id:"22",
        Work:true,
        Wedding:false,
        Party:false,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/41FPeAejcrL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61xU4hShPOL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/61gBqHFYD1L._AC_UL480_FMwebp_QL65_.jpg"
      },
      {
        id:"23",
        Work:false,
        Wedding:true,
        Party:false,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61W-woK4fXL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/81lCcpJZXRL._AC_UL480_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/812Mxzn01kS._AC_UL480_QL65_.jpg"
      },
      {
        id:"24",
        Work:false,
        Wedding:true,
        Party:false,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/51UpNslakwL._AC_UL480_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/413XFf75BxL._AC_UL480_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/61EdtBqudNL._AC_UL480_QL65_.jpg"
      },
      {
        id:"25",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/51mbShnkBvL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61IDNXOJEVL._AC_UL480_FMwebp_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/714yCC0O-fL._AC_UL480_QL65_.jpg"
      },
      {
        id:"26",
        Work:false,
        Wedding:false,
        Party:true,
        // Occasion:"Party",
        Outfit1:"https://m.media-amazon.com/images/I/61zC6yy4dUL._AC_UL480_QL65_.jpg",
        Outfit2:"https://m.media-amazon.com/images/I/61I08r2zv2L._AC_UL480_QL65_.jpg",
        Outfit3:"https://m.media-amazon.com/images/I/31vMVtq2MpL._AC_UL480_QL65_.jpg"
      },


];

export default dressData;