let productosMcDonalds;

export default productosMcDonalds = [
    /* Hamburguesas de carne */
    {
      id: 1,
      categoria: 'hamburguesas-de-carne',
      productos: [
        {
          id: 101,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'Big Mac®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/0f1e7c1e-bf9c-4d71-add8-341f32323981_1080x943_Best-Burger-clasicas-bm.png?auto=compress,format',
          precio: 180,
          descripcion: 'Descubre nuestra icónica Big Mac ahora más caliente, más jugosa y ¡mucho más sabrosa!. Disfruta de sus dos carnes 100% vacuno, crujiente lechuga fresca, delicioso queso Cheddar fundido, pepinillos, cebolla y la famosa salsa Big Mac.',
          opciones: {
            tamanos: ['Regular', 'Grande'],
            personalizacion: ['Sin pepinillos', 'Sin salsa especial', 'Agregar tomate']
          }
        },
        {
          id: 102,
          
          categoria: 'hamburguesas-de-carne',
          novedad: true,
          nombre: 'McRoyal Deluxe®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/c4f57e37-8dbe-4f2b-9dd8-abf8ea1c5fb6_1080x943_Best-Burger-clasicas-McRoyal.png?auto=compress,format',
          precio: 160,
          descripcion: 'McRoyal Deluxe® se destaca por su frescura, ya que es es la única hamburguesa de ternera que lleva tomate. Ven y pruébala ya, ahora más caliente, más jugosa y más sabrosa que nunca.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Sin cebolla', 'Agregar bacon', 'Doble queso']
          }
        },
        {
          id: 103,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'Cuarto de Libra',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/358419ae-5d60-4b34-999b-2c8d744bd4a8_1080x943_Best-Burger-clasicas-cuarto-libra.png?auto=compress,format',
          precio: 170,
          descripcion: 'Disfruta de su doble jugosa carne 100% vacuno, doble de queso cheddar fundido, cebolla fresca, pepinillos, kétchup y mostaza. Disfrútalo junto a su tierno pan de sésamo.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 104,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'Cuarto de Libra Doble',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/0066be17-3542-44e5-b2ca-2d054de8733d_1080x943_CuartoLibra_SY_Logo-BB.png?auto=compress,format',
          precio: 150,
          descripcion: 'El clásico de siempre, ahora doble. Clásica cuarto de libra con doble de su jugosa carne 100% vacuno, queso cheddar, pepinillo, cebolla en tiras, kétchup y mostaza.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 105,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'McExtreme™ Bacon',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/95d545a0-dae1-434e-8148-8f51e40be611_550x440_McExtreme_Bacon.png?auto=compress,format',
          precio: 150,
          descripcion: 'McExtreme con bacon, carne, queso gouda y salsa McBacon. Todo ello con nuestro pan especial!',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 106,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'McExtreme™ Cheesy Risketos',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/1ec6fe53-ef0e-4e42-a831-2dbbbca7a8e7_1080x943_McExtreme_Risketos_Simple.png?auto=compress,format',
          precio: 150,
          descripcion: 'Irresistible salsa con sabor a auténticos Risketos, y su tierno pan tostado con topping de queso. Acompañada de bacon, cebolla crispy y su doble queso cheddar.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 107,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'Doble McExtreme™ Cheesy Risketos',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/217299f2-bac0-4e02-9bd7-f95eb1da0971_1080x943_McExtreme_Risketos_Doble.png?auto=compress,format',
          precio: 150,
          descripcion: 'Y ahora con el doble de carne 100% vacuno, irresistible salsa con sabor a auténticos Risketos, y su tierno pan tostado con topping de queso. Acompañada de bacon, cebolla crispy y su doble queso cheddar.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 108,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'McExtreme™ Bacon Doble',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/9775e0a3-7a2c-46e5-87e1-e52800117dfc_550x440_McExtreme_Bacon_Doble.png?auto=compress,format',
          precio: 150,
          descripcion: 'McExtreme con doble de bacon, carne, queso gouda y salsa McBacon. Todo ello con nuestro pan especial',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 109,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'McExtreme™ BBQ Bourbon Huevo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/c365e4c8-a1a3-4877-b9f6-8a685031bffd_550x440_McExtreme-Bourbon-Simple.png?auto=compress,format',
          precio: 150,
          descripcion: 'McExtreme BBQ Bourbon Huevo, con todo el sabor de nuestra salsa barbacoa aromatizada con Bourbon, cremoso huevo, bacon ahumado, delicioso medallón de queso ahumado, crujiente cebolla crispy y jugosa carne 100% vacuno. Todo ello envuelto en nuestro nuevo pan de patata ¡No podrás resistirte!',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
        {
          id: 110,
          
          categoria: 'hamburguesas-de-carne',
          novedad: false,
          nombre: 'Triple Cheeseburger',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/16009782-4e60-48f5-b5f3-4436217e9323_1080x943_Best-Burger-clasicas-Cheeseburger-Triple.png?auto=compress,format',
          precio: 150,
          descripcion: 'La que nunca falla pero ahora, en versión triple. Disfruta de su jugosa triple carne 100% vacuno, queso cheddar fundido, pepinillos, cebolla fresca y salsa de kétchup y mostaza, en un tierno pan tostado. ',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Agregar cebolla']
          }
        },
      ]
    },

    /* Hamburguesas de pollo */
    {
      id: 2,
      categoria: 'hamburguesas-de-pollo',
      productos: [
        {
          id: 201,
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'McPollo®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/c62990cc-7e57-4403-96f1-f0e50565af48_1080x943_McPollo.png?auto=compress,format',
          precio: 150,
          descripcion: 'Tu clásico de pollo, el que nunca falla. Disfruta de su crujiente pollo empanado acompañado de una cremosa salsa fina y lechuga fresca servido en un tierno pan con semillas de sésamo.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 202,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'CBO®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/db5e39f4-5b8a-4e5f-965a-5c98d54ffcb6_1080x943_CBO-Cheddar.png?auto=compress,format',
          precio: 170,
          descripcion: 'Esta deliciosa hamburguesa es una combinación perfecta de pollo, bacon crujiente, crispy onion, queso Cheddar, lechuga y salsa CBO® todo envuelto en un pan exclusivo que hace que esta hamburguesa sea única.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
        {
          id: 203,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'McCrispy® Original',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/82e5f02e-b20c-4d1f-b69a-38d5060f5fc7_1080x943_McCrispy_Original.png?auto=compress,format',
          precio: 190,
          descripcion: 'Si eres un amante del pollo, ¡esta es tu hamburguesa!. Disfruta de la irresistible McCrispy® con deliciosa salsa Original, cheddar fundido, tomate fresco y lechuga crujiente.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 204,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'McCrispy® BBQ&Bacon',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/86633dc6-5513-45bc-a5b7-bd6c553e318e_1080x943_McCrispy-BBQ-Bacon.png?auto=compress,format',
          precio: 190,
          descripcion: 'Disfruta de nuestra nueva hamburguesa de pollo con deliciosas salsas BBQ y Bacon. Tan crujiente, Tan McCrispy, Tan McDonalds®',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 205,
          
          novedad: false,
          nombre: 'Chicken & Cheese',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/51a9c0ef-f2ff-48bc-90c3-66da99dd85b4_275-sinsellos.png?auto=compress,format',
          precio: 190,
          descripcion: 'Si eres de pollo y de queso fundido, ¡esta es tu hamburguesa! con delicioso pollo crujiente, lechuga fresca, queso fundido y nuestra inconfundible salsa BBQ.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 206,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'Chicken & Cheese',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/51a9c0ef-f2ff-48bc-90c3-66da99dd85b4_275-sinsellos.png?auto=compress,format',
          precio: 190,
          descripcion: 'Si eres de pollo y de queso fundido, ¡esta es tu hamburguesa! con delicioso pollo crujiente, lechuga fresca, queso fundido y nuestra inconfundible salsa BBQ.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 207,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'Chicken Mayo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/962f4381-ab64-4312-a5b8-6f03e5968963_1080x943_Menu%CC%814You_Mc+Pollo+Single.png?auto=compress,format',
          precio: 190,
          descripcion: 'La que nunca falla. Disfruta de su jugoso pollo, salsa fina, todo ello envuelto en un tierno pan tostado.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 208,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'Doble Chicken Mayo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/6335c57a-8fde-4bd6-a441-3aca52d32481_1080x943_Menu%CC%814You_Mc+Pollo+Doble.png?auto=compress,format',
          precio: 190,
          descripcion: 'La que nunca falla. Disfruta de su jugoso pollo, salsa fina, todo ello envuelto en un tierno pan tostado.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
        {
          id: 209,
          
          categoria: 'hamburguesas-de-pollo',
          novedad: false,
          nombre: 'Triple Chicken Mayo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/1376251d-9989-4a66-be2b-68cba114a331_1080x943_Menu%CC%814You_Mc+Pollo+Triple.png?auto=compress,format',
          precio: 190,
          descripcion: 'La que nunca falla. Disfruta de su jugoso pollo, salsa fina, todo ello envuelto en un tierno pan tostado.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar bacon', 'Doble filete de pollo']
          }
        },
      ]
    },

    /* Hamburguesas de pescado */
    {
      id: 4,
      categoria: 'hamburguesas-de-pescado',
      productos: [
        {
          id: 401,
          
          categoria: 'hamburguesas-de-pescado',
          novedad: false,
          nombre: 'Filete de pescado',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/a915a776-67f4-4850-876b-b6f8b45d6d1a_86995fbba9ed3fd251faae044e217e03.png?auto=compress,format',
          precio: 160,
          descripcion: 'Si eres de los que les gusta el pescado ¡esta es tu hamburguesa! Con jugoso filete de pescado, queso cheddar fundido y acompañado de salsa tártara. ',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
        {
          id: 402,
          
          categoria: 'hamburguesas-de-pescado',
          novedad: false,
          nombre: 'McFish®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/c9e409b5-5173-4d72-8a3b-9a9557920304_producto-131.png?auto=compress,format',
          precio: 140,
          descripcion: 'Con Mcfish® podrás disfrutar de su filete de bacalao siendo un producto que cumple con los estándares de sostenibilidad del MSC. Incluye salsa Ketchup.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
      ]
    },

    /* Mc Cafe */
    {
      id: 5,
      categoria: 'mc-cafe',
      productos: [
        {
          id: 501,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Tostada ibérico',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/bc3a4444-30c5-4567-98b5-a511a057feff_producto-84.png?auto=compress,format',
          precio: 120,
          descripcion: 'Date un capricho con nuestro deseo de cebo. Auténtico jamón ibérico con tomate y pan crujiente',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Doble huevo']
          }
        },
        {
          id: 502,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Redondo Lotus Biscoff',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/9baabf44-8b38-4c9f-912c-22931e639d33_1080x943_APP_McCaf%C3%A9_Dot-Lotus.png?auto=compress,format',
          precio: 120,
          descripcion: 'Ya ha llegado el nuevo Redondo de Navidad, con un exquisito relleno de crema Lotus Biscoff y cubierto de galleta Lotus Biscoff!',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Doble huevo']
          }
        },
        {
          id: 503,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Café Expresso',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/0c9d54b9-a031-402b-b411-2f09301ae034_producto-109.png?auto=compress,format',
          precio: 120,
          descripcion: 'El Espresso es una forma de preparar el café. El café espresso se considera el café por antonomasia. Su cuerpo y sabor hacen de este café una verdadera delicia de la que participan todos los sentidos.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Doble huevo']
          }
        },
      ]
    },

    /* Acompañamientos */
    {
      id: 6,
      categoria: 'acompanamentos',
      productos: [
        {
          id: 601,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Top Fries Bacon & Cheese Deluxe',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/66bb9488-9de5-4988-af38-0767fe905515_1080x943_Top-Fries-Deluxe+%281%29.png?auto=compress,format',
          precio: 80,
          descripcion: 'La versión más top de nuestras patatas. Acompañadas de salsa de queso y bacon, ¡no podrás resistirte a ellas! Disponibles con patatas fritas o Deluxe y en formato individual o para compartir.',
          opciones: {
            tamanos: ['Regular', 'Grande'],
            personalizacion: ['Agregar queso', 'Doble salsa']
          }
        },
        {
          id: 602,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Papas fritas',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/f2e320e6-1277-43d3-a575-c4f41a8ac7aa_1080x943-App_0004_Patatas-Grandes.png?auto=compress,format',
          precio: 130,
          descripcion: 'Fritas con aceite vegetal, sabrosas y doradas, se sirven con ketchup o mostaza. Disponibles en tres tamaños: Pequeñas, medianas y grandes.',
          opciones: {
            tamanos: ['Regular', 'Grande'],
            personalizacion: ['Agregar salsa BBQ', 'Doble cantidad']
          }
        },
        {
          id: 603,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'McNuggets® de pollo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/f905450a-f1f6-4b2b-a7e3-4dbc70561d1c_Producto+202+-+_9McN+uggets-+sin+100pollo.png?auto=compress,format',
          precio: 100,
          descripcion: 'Bocaditos de pollo rebozados. Disponible en 4, 6 y 9 piezas. Elige entre estas deliciosas salsas: Barbacoa, Mostaza, Buffalo y Deluxe.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar nueces', 'Doble chocolate']
          }
        },
        {
          id: 604,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'Alitas de pollo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/5fcd5f9f-a2d8-4ed8-9022-c09dba473aeb_producto-38.png?auto=compress,format',
          precio: 90,
          descripcion: '¿Quien puede resistirse a las deliciosas alitas de pollo crujientes, con su inconfundible sabor barbacoa, para tomar solo o para compartir con quien tú quieras?.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar pollo a la parrilla', 'Doble aderezo']
          }
        },
        {
          id: 605,
          
          categoria: 'mc-cafe',
          novedad: false,
          nombre: 'McWrap Chicken',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/6dc6eef7-9aa6-4ad9-8e32-33a1d71818e6_021284086e58743ce4eff3d0f68e023e.png?auto=compress,format',
          precio: 110,
          descripcion: 'Si eres de los que prefieres un McWrap, este no te dejará indeferente. Pollo crujiente, tomate, salsa supreme, queso cheddar fundido y, todo ello envuelto para que puedas disfrutar de cada bocado',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Doble pollo']
          }
        },
      ]
    },

    /* Bebidas */
    {
      id: 7,
      categoria: 'bebidas',
      productos: [
        {
          id: 701,
          
          categoria: 'bebidas',
          novedad: false,
          nombre: 'Coca-Cola®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/5b6931a9-76d3-4f32-a446-e8f26e8d3a69_producto-237.png?auto=compress,format',
          precio: 60,
          descripcion: 'Una Coca-Cola bien fría nos hace disfrutar de cada instante de nuestras vidas de una forma especial.',
          opciones: {
            tamanos: ['Regular', 'Grande'],
            personalizacion: ['Agregar hielo', 'Sin hielo']
          }
        },
        {
          id: 702,
          
          categoria: 'bebidas',
          novedad: false,
          nombre: 'Sprite®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/2abd0621-1eb1-457d-aaa0-22818f9709b9_1080x943_Bebidas_Frias_Sprite.png?auto=compress,format',
          precio: 90,
          descripcion: 'Sprite es una bebida de sabor lima-limón, transparente y chispeante. Es una marca con una personalidad inconfundible, auténtica y un marcado carácter refrescante que te muestra las cosas tal y como son.',
          opciones: {
            tamanos: ['Regular', 'Grande'],
            personalizacion: ['Con leche', 'Con azúcar']
          }
        },
      ]
    },
    
    /* Ensaladas */
    {
      id: 8,
      categoria: 'ensaladas',
      productos: [
        {
          id: 801,
          
          categoria: 'ensaladas',
          novedad: false,
          nombre: 'Ensalada Chicken César',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/143dfac5-d45f-4990-8eb0-950bf32f42c3_1080x943_Ensaladas_Sep23_Cesarsinpollo.png?auto=compress,format',
          precio: 160,
          descripcion: 'Compuesta de una equilibrada mezcla de lechugas, pollo crujiente, tomatitos cherry, queso en láminas y crujientes croutons.Todo ello bañado con el ingrediente estrella, la incomparable salsa César.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
        {
          id: 802,
          
          categoria: 'ensaladas',
          novedad: false,
          nombre: 'Ensalada Chicken Honey Mustard',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/a1c53067-213c-4b02-acfd-1074aece8b32_1080x943_Ensaladas_Sep23_ChickenHoneyMustard.png?auto=compress,format',
          precio: 140,
          descripcion: 'Compuesta a base de mezcla de lechugas, pollo crujiente, lascas de queso parmesano, tomatitos cherry, cebolla frita y sabrosos bacon bites! Bañada en Salsa Honey Mustard... una combinación dulce/salado que solo puede ser: perfecta. Nuestras ensaladas se elaboran diariamente con productos frescos de Florette®.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
        {
          id: 803,
          
          categoria: 'ensaladas',
          novedad: false,
          nombre: 'Ensalada de la Huerta',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/7834b106-b42a-4779-a828-69348e4a97fa_500x500_NGK_Ensaladas_Sep23_DelaHuerta.png?auto=compress,format',
          precio: 140,
          descripcion: 'Compuesta por una equilibrada base de ensalada con mezcla de lechugas, tomates cherry y aliñada con aceite y vinagre. El complemento ideal para acompañar y aportar frescura a tu McMenú®.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
      ]
    },

    /* Para compartir */
    {
      id: 9,
      categoria: 'compartir',
      productos: [
        {
          id: 901,
          
          categoria: 'compartir',
          novedad: false,
          nombre: 'McMenú® Duo',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/8254e2fa-7da9-4e01-935a-96fe3d2d5dc4_243x243_Packs_Para_Compartir_Duo.png?auto=compress,format',
          precio: 160,
          descripcion: 'Nuestra mítica hamburguesa de doble carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional. Con patatas y bebida en tus Packs Dúo, Trío y Familiar.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
        {
          id: 902,
          
          categoria: 'compartir',
          novedad: false,
          nombre: 'McMenú® Trio',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/7499e824-7c05-496f-b000-69e037ddb0b9_477x360_Web_Bundles_0001_Pack-Tri%CC%81o.png?auto=compress,format',
          precio: 140,
          descripcion: 'Nuestra mítica hamburguesa de doble carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional. Con patatas y bebida en tus Packs Dúo, Trío y Familiar.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
        {
          id: 903,
          
          categoria: 'compartir',
          novedad: false,
          nombre: 'McMenú® Familia',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/56be5148-11ca-467b-beef-a3f3a8bf9e55_477x360_Web_Bundles_0002_Pack-Familiar.png?auto=compress,format',
          precio: 140,
          descripcion: 'Nuestra mítica hamburguesa de doble carne 100% vacuno español, lechuga fresca y crujiente, cebolla, pepinillo, queso cheddar fundido y nuestra inimitable salsa secreta. Todo esto envuelto en un nuevo pan de sésamo horneado al estilo tradicional. Con patatas y bebida en tus Packs Dúo, Trío y Familiar.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
      ]
    },

    /* Helados y postres */
    {
      id: 10,
      categoria: 'helados-y-postres',
      productos: [
        {
          id: 1001,
          
          categoria: 'helados-y-postres',
          novedad: false,
          nombre: 'McFlurry® Lotus®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/93ef5d15-a891-4c8c-83b3-3f304ec4bd4d_1080x943_McFlurry_Lotus.png?auto=compress,format',
          precio: 160,
          descripcion: 'Nuestro nuevo McFlurry® ya está aquí. Autentica crujiente galleta Lotus Biscoff® con la mezcla perfecta de nuestro delicioso sirope de caramelo. ¡Te conquistará!',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
        {
          id: 1002,
          
          categoria: 'helados-y-postres',
          novedad: false,
          nombre: 'McFlurry® M&M’s®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/a82f5d34-5584-4a41-804e-2e5c1cbc9fdd_1080x943_McFlurry_Cristal_MMs_Caramelo.png?auto=compress,format',
          precio: 140,
          descripcion: '¡Está de vuelta! Nuevo McFlurry® con M&M’s® rellenos de chocolate con leche y cacahuete tostado. Acompañado de tu sirope favorito, elige entre; chocolate blanco, chocolate negro o caramelo.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
        {
          id: 1003,
          
          categoria: 'helados-y-postres',
          novedad: false,
          nombre: 'McFlurry® KitKat®',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/7da187a0-afdd-42fd-8096-d48c8c47a363_1080x943_McFlurry_Cristal_KitKat_Chocolate.png?auto=compress,format',
          precio: 140,
          descripcion: '¿Se te ocurre alguna forma mejor de desconectar? Añade KitKat® a tu McFlurry® y disfruta de ese delicioso momento. Con sirope de chocolate o caramelo ¡todas son buenas opciones!',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar queso', 'Agregar tomate']
          }
        },
      ]
    },

    /* Menu */
    {
      id: 11,
      categoria: 'menu',
      productos: [
        {
          id: 1101,
          
          categoria: 'menu',
          novedad: false,
          nombre: "McDonald's - McMenú®",
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/dd43faa5-5c36-43fb-8529-e62c05dc416c_menu_icono.png?auto=compress,format',
          precio: 160,
          descripcion: 'Menú también disponible en tamaño grande, con bebidas y patatas grandes.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
      ]
    },

    /* Happy Meal */
    {
      id: 12,
      categoria: 'happy-meal',
      productos: [
        {
          id: 1201,
          
          categoria: 'happy-meal',
          novedad: false,
          nombre: "Hamburguesa Happy Meal",
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/7d982d60-348f-4644-8191-a616f4de7709_1080x943_Hamburguesa.png?auto=compress,format',
          precio: 160,
          descripcion: 'Si eres de los que arriesga poco ¡esta es tu hamburguesa! Con jugosa carne 100% vacuno, acompañada con kétchup, mostaza, cebolla fresca y pepinillo. Todo ello envuelto en tierno pan tostado.',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar lechuga', 'Doble filete de pescado']
          }
        },
      ]
    },

    /* MacWraps */
    {
      id: 13,
      categoria: 'wraps',
      productos: [
        {
          id: 1305,
          
          categoria: 'wraps',
          novedad: false,
          nombre: 'McWrap Chicken',
          img: 'https://mcdonalds.es/api/cms/images/mcdonalds-es/6dc6eef7-9aa6-4ad9-8e32-33a1d71818e6_021284086e58743ce4eff3d0f68e023e.png?auto=compress,format',
          precio: 110,
          descripcion: 'Si eres de los que prefieres un McWrap, este no te dejará indeferente. Pollo crujiente, tomate, salsa supreme, queso cheddar fundido y, todo ello envuelto para que puedas disfrutar de cada bocado',
          opciones: {
            tamanos: ['Regular'],
            personalizacion: ['Agregar tomate', 'Doble pollo']
          }
        },
      ]
    },
  ];