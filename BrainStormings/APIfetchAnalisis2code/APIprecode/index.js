//Initiation Sequence....
//Setting Startup Values...

//Const and variables
//Como se hace el URL de conexion a la API
//const base_URL='https://www.themealdb.com/api/json/v1/1/'//With basic API_key
//const base_URL = "https://www.themealdb.com/api/json/";
//base_URL=server_URL+api_gment

const serverURL="https://themealdb.com"
const apiSegment="/api/json/"
const apiBaseKey = "v1/1/";
const apiPayedKey = "v2/9973533/";
const search_URL=`${serverURL}${apiSegment}${apiPayedKey}`;
//Notas en contruccion del URL de las imagenes.
//REcordar que los directorios pueden /images/categories e /images/ingredients 
//img URl=serverURL + media/meals/imgname.jpg DElivered by OBJ prop in in JSNDB: strMealThumb
//const imgURL=`${serverURL}/media/meals/`
//img Ingredient URL viene en el OBJ JSON  en 20 props strIngredient#
// imgIntUrl=
//  `${serverURL}/images/ingredients/${strIngredient#}.png`;
//small imgs
// imgIntUrl=
//  `${serverURL}/images/ingredients/${strIngredient#}-Small.png`;

// const imgIngURL=`${serverURL}/images/ingredients/${strIngredient`${a}`}.png`;
// console.log('imgIngrediente', imgIngURL);

//Maybe develeped one day
//const payment=true;//If apikey is being payed, else use other values all over. 

// let result = "";

let apiSelected = [
    //Busquedas sin parametros    
  "random.php", //0- randomButton regresa 1 receta sorpresa  (registro/objeto) que tiene 53 propiedades.
  "randomselection.php", //1- 10random recipes cada una con 53 props.
  "categories.php", //2- Regresa una Lista de categorias en un OBJ Categories. 
                    //con 14 registros/objetos cada uno con 4 propiedades. "idCategory" 
                    //"strCategory" "strCategoryThumb" "strCategoryDescription"
  "latest.php", //3-Regresa una lista con las ultimas 10 recetas ingresada al DB, 
                //objetos cada una con 53 props.
  "list.php?a=list", //4-Regresa una Lista de Area=Country/Pais son 27 registros/objetos 
                     //de un campo/propiedad "strArea" 
  "list.php?c=list", //5-Regresa la Lista de categorias de 14 registros/objetos 
                     //de un campo/propiedad "strCategory"
  "list.php?i=list", //6-Regresa la Lista de ingredienes de 574 registros/objetos cada uno de               //4 propiedades. "idIngredient" "strIngredient" "strDescription" "strType"

    //Busqquedas que req parametro
  "filter.php?a=", //7-${meals.strArea} Busqueda por Area del Mundo, uno de 27 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
  "filter.php?c=", //8-${meals.strCategory} Busqueda por categoria, una de 14 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
  "filter.php?i=", //9-${strIngredient} Busqueda por ingrediente uno de 574 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"    
  "filter.php?i=", //10-${strIngredient,strIngredient,strIngredient}
                   //Posiblemente: String.concat(strIngredient,strIngredient,strIngredient)
                   //Busqueda por multingredientes. Recibe un string de ingredientes separados por coma. 
                   //Regresa un arreglo de objetos cada uno con 53 propiedades.
  "lookup.php?i=", //11-${idMeal}Busqueda por Id.
                   //Regresa un arreglo con un unico elemento [0] con 53 propiedades
  "search.php?f=", //12-${charA-Z}Busqueda por la primera letra y Regresa un arreglo de objetos cada uno con 53 propiedades o null
  "search.php?s=", //13-${palabra o string} 
                   //Busqueda por palabra o letras en el campo nombre strMeal. 
                   //Regresa un arreglo de objetos cada uno con 53 propiedades.
];


// const url = `${search_URL}${apiSelected[0]}`;
// console.log("URL a llamar", url);

async function getAPIResponse(apiIndex,params = '') {
    // console.log("A ver los params");
    let url='';
    if (apiIndex>=0 && apiIndex<=6){
        console.log("Sin params");
        url = `${search_URL}${apiSelected[apiIndex]}`;
        // console.log("URL a llamar", url);

    } else {
        console.log("Con params");
        // let apiCompoudSelected='apiSelected[apiIndex]'+'params'
        url = `${search_URL}${apiSelected[apiIndex]}${params}`;
        // url = `${search_URL}${apiCompoundSelected}`;
        // console.log("URL a llamar", url);
    }
    console.log("URL a llamar", url);
    try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }
    catch{
        console.error("Llamada a la API fallida:",apiIndex,'\n URL: ',url);
        console.log("DEmosle Otra OPCION nada 404 Dead END");
        console.log("Encadenar uan random o un boton recargar");
    
    }
}


async function getARandomRecipe() {
    const url = `${search_URL}${apiSelected[0]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function get10RandomRecipes() {
    const url = `${search_URL}${apiSelected[1]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getLatestRecipe() {
    const url = `${search_URL}${apiSelected[3]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// async function getARecipe(id) {
//   const url = `${search_URL}${apiSelected[11]}${id}`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function getRecipes(aPIbyIndex, optField = " ") {

//   let result = "";
//   let aPISelected = [
//     "random.php", //randomButton 1 receta sorpresa
//     "randomselection.php", //10random recipes
//     "categories.php", //List ade categorias en un OBJ Categories
//     "latest.php", //La ultima receta ingresada al DB
//     "list.php?a=list", //Lista de Area =Country/Pais son 27registros
//     "list.php?c=list", //Lista de categorias 14 registros
//     "list.php?i=list", //Lista de ingredienes son 574
//     //Busqquedas que req parametro
//     "filter.php?a=", //Busqueda por Area del Mundo, uno de 27 registros
//     "filter.php?c=", //Busqueda por categoria, una de 14 registros
//     "filter.php?i=", //Busqueda por ingrediente uno de 574
//     'filter.php?i=',//Busqueda por multingredientes. Recibe un string ce ingredientes separados por coma.
//     "lookup.php?i=",//Busqueda por Id
//     "search.php?f=", //Busqueda por la primera letra
//     "search.php?s=", //Busqueda por palabra o letras en el campo nombre
//   ];
//   console.log("Abajo del arreglo getRecipes:", aPIbyIndex);
//   console.log("API2makeCall:", aPISelected[aPIbyIndex]);
//   let urlString = base_URL + aPISelected[aPIbyIndex];
//   console.log("strinf URL formado: " + urlString); //A que URL llamare

//   if (aPIbyIndex > 6) {
//     //Para todas las llamadas al API que requieren params extra
//     if (aPIbyIndex === 11) {
//       //Si es busqueda de terminos usa 'search.php?s=' y revisa el valor del input de su searchBox
//       console.log("Dentro del if 11:", aPIbyIndex);
//       let searchterm = document.getElementById("searchInputTxtBox");
//       console.log(searchterm.value); //Que dice el Input del SearchBox
//       urlString += searchterm.value;
//     } else {
//       urlString += optionalField; //Para las otras usa un campo extraido y validado de un JSOn anterior
//     }
//   }
//   console.log(urlString); //A que URL llamare
//   if (aPIbyIndex === 2) {
//     result = callMealDBAPI(urlString, callType, 0);
//   } else {
//     result = callMealDBAPI(urlString, callType, 1);
//   }
//   // await callMealDBAPI();
//   console.log("CALLDBAPI:", result);
//   return result;
//   //Llamada a la API
//   //Posiblemente falte decirle su nodo o div de zona de despliegue
// }
//End of function getRecipes();

//=======================================================================
//===
//lista de funciones a conectar en el HTML con sus botones o divs para onload, onclick etc.
//Si se usan events del addListener se pueden eliminar en segunda fase para que sean identificadas por id del button
//=======================================================================
//recipes=randomRecipeDIV o el Div que le toca
//un obj con listarecetas y el div
function recipesHTML(recipesDIV,recipes) {
    console.log('Enla funcion recipes:', recipes);
    const recipesGoInDiv = document.getElementById(recipesDIV);
    recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
    recipes.forEach(data => {
    const adding_recipe = document.createElement("div");
    adding_recipe.innerHTML = `
        
            <div class="cardContainer" id="${data.idMeal}">
                <div class="cardImgContainer">
                    <p>
                        <strong>${data.strMeal}</strong>
                    </p>
                    <button class="linkCard" onclick="console.log('Recipe ID: ',${data.idMeal})">
                        <img class="imgCard" src="${data.strMealThumb}">
                    </button>
                </div>
            </div>
            `;
    recipesGoInDiv.appendChild(adding_recipe);
  });
}



function categoriesHTML(categoriesDIV,categories) {
    console.log('Enla funcion categories:', categories);
  const categoriesGoInDiv = document.getElementById(categoriesDIV);
  categoriesGoInDiv.innerHTML = ""; //Clean element Before Filling
  categories.forEach(data => {
    const adding_categorie = document.createElement("div");
    adding_categorie.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.idCategory}">
                <div class="cardImgContainer">
                    <p>
                        <strong>${data.strCategory}: </strong>
                    </p>
                    <button class="linkCard" onclick="console.log('Recipe ID: ',${data.idCategory})">
                        <img class="imgCard" src="${data.strCategoryThumb}">
                    </button>
                 </div>
                 <div class="cardDescription">${data.strCategoryDescription}</div>
            </div>
        </div>`;
    categoriesGoInDiv.appendChild(adding_categorie);
  });
}


function listsAllCategoriesHTML(listsDIV,lists) {
    console.log('Enla funcion lists:', lists);

    //let {strCategory:dataId2List}=lists;
    //console.log('DEstructuring:',dataId2List);
  const listsGoInDiv = document.getElementById(listsDIV);
  listsGoInDiv.innerHTML = ""; //Clean element Before Filling
  lists.forEach(data => {
    const addingList = document.createElement("div");
    addingList.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.strCategory}">
                <div class="cardImgContainer">
                    <p>
                        <strong>${data.strCategory} </strong>
                    </p>
                    <button class="linkCard" onclick="getFilteredList(8,'${data.strCategory}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/category/${data.strCategory}.png" alt="${data.strCategory}">
                    </button>
        </div>`;
    listsGoInDiv.appendChild(addingList);
  });
}

//Se cambia el console.log del onclock por getFilteredList a la 8 y strArea.
function listsAllAreaHTML(listsDIV,lists) {
    console.log('Enla funcion lists:', lists);
  const listsGoInDiv = document.getElementById(listsDIV);
  listsGoInDiv.innerHTML = ""; //Clean element Before Filling
  lists.forEach(data => {
    const addingList = document.createElement("div");
    addingList.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.strArea}">
                <div class="cardAreaContainer">
                    <button class="linkCard" 
                        onclick="getFilteredList(7,'${data.strArea}')">
                        <p>
                            <strong>${data.strArea}: </strong>
                        </p>
                    </button>
        </div>`;
    listsGoInDiv.appendChild(addingList);
  });
}


//Viernes 26 se cambio el onclick de console.log a la funcion filtrar por ingrediente
function listsAllIngredientsHTML(listIngredientsDIV,lists) {
    console.log('Enla funcion lists:', lists);
  const listsGoInDiv = document.getElementById(listIngredientsDIV);
  listsGoInDiv.innerHTML = ""; //Clean element Before Filling
  lists.forEach(data => {
    const addingList = document.createElement("div");
    addingList.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.idIngredient}">
                <div class="cardImgContainer">
                data.meals:
                    <p>
                        <strong>${data.strIngredient}</strong>
                    </p>
                    <button class="linkCard" onclick="getFilteredList(9,'${data.strIngredient}')">
                        <img class="imgCard" src="${serverURL}/images/ingredients/${data.strIngredient}.png" alt="${data.strIngredient}">
                    </button>
                    </div>
                 <div class="cardDescription">${data.strDescription}</div>
            </div>
        </div>`;
    listsGoInDiv.appendChild(addingList);
  });
}


document.getElementById("randomButton").onclick = async function () {
    // const recipe = await getARandomRecipe();
    const recipe = await getAPIResponse(0);
    console.log('getARandomRecipe:',recipe);
    console.log('getARandomRecipe:(',recipe.meals.length,'):',recipe.meals);
    recipesHTML("randomRecipe",recipe.meals);
};

async function get10Random(){
//document.getElementById("rnd10Recipes").onload
    // const recipe = await get10RandomRecipes();
    const recipe = await getAPIResponse(1);
    // console.log(recipe);
    console.log("rnd10Recipes:",recipe);
    console.log("rnd10Recipes:",recipe.meals);
    console.log('Registros de get10RandomRecipes:(',recipe.meals.length,'):\n',recipe.meals);
    recipesHTML("rnd10Recipes",recipe.meals);
    
};

async function getCategories(){
        const response = await getAPIResponse(2);
        // console.log(response);
        console.log("Categories:",response);
        console.log("Categories:",response.categories);
        console.log('Registros de getCategories:(',response.categories.length,'):\n',response.categories);
        categoriesHTML("listCategories",response.categories);
        
    };

    


async function getLatest(){
    const recipe = await getAPIResponse(3);
    // console.log(recipe);
    console.log("latestRecipe:",recipe);
    console.log("latestRecipe:",recipe.meals);
    console.log('Registros de getLatestRecipe:(',recipe.meals.length,'):\n',recipe.meals);
    recipesHTML("latestRecipe",recipe.meals);
    
};
async function getListAllAreaCountry(){
    const recipe = await getAPIResponse(4);
    // console.log(recipe);
    console.log("ListAllArea:",recipe);
    console.log("ListAllArea:",recipe.meals);
    console.log('Registros de List by Area:(',recipe.meals.length,'):\n',recipe.meals);
    listsAllAreaHTML("listAllArea",recipe.meals);
    
};



async function getListAllCategories(){
    const allcategories = await getAPIResponse(5);
    // console.log(allcategories);
    console.log("ListAllCategories:",allcategories);
    console.log("ListAllCategories:",allcategories.meals);
    console.log('Registros de List by Categories:(',allcategories.meals.length,'):\n',allcategories.meals);
    listsAllCategoriesHTML("listAllCategories",allcategories.meals);
    
};

async function getListAllIngredients(){
    const allIngredients = await getAPIResponse(6);
    // console.log(allIngredients);
    console.log("ListAllIngredients:",allIngredients);
    console.log("ListAllIngredients:",allIngredients.meals);
    console.log('Registros de Lista  ALLIngredientes:(',allIngredients.meals.length,'):\n',allIngredients.meals);
    listsAllIngredientsHTML("listAllIngredients",allIngredients.meals);
    
};

//Al parecer podemos utilizar esta función 3 a 4 veces,
//Es decir para filtrar por area,categoria e ingrediet(e)
//Recibe un parametro y lo pega al URL para que la llamada al API responda.
//primera vez llamamo a filter.php?a=gentilicio
async function getFilteredList(filterIndex,param){
    try{
        const filteredResponse = await getAPIResponse(filterIndex,param);
        // console.log(allIngredients);
        console.log("filteredSearch:",filteredResponse);
        console.log("List filteredResponse:",filteredResponse.meals);
        console.log('Registros de filteredResponse:(',filteredResponse.meals.length,'):\n',filteredResponse.meals);
        

        // function getDisplayAreaxIndex(index){
        let=listfilteredResponseDIV="listfilteredResponse";//Limpiar el Area de desplegar
        switch (filterIndex) {
            case 7:{
                listfilteredResponseDIV=
                    `${listfilteredResponseDIV}Area`
                console.log('listfilteredResponseDIVCountry',listfilteredResponseDIV);
                // return listfilteredResponseDIV;
            }
            break;
            
            case 8:{
                listfilteredResponseDIV=
                    `${listfilteredResponseDIV}Category`
                console.log('listfilteredResponseDIVCat',         listfilteredResponseDIV);
            }
            break;
            case 9:{
            listfilteredResponseDIV=
                `${listfilteredResponseDIV}Ingredient`;  
            console.log('listfilteredResponseDIVIng',listfilteredResponseDIV);
            }
            break;
            default:
            break;
        }
        recipesHTML(listfilteredResponseDIV,filteredResponse.meals);
    }
    catch{
        console.error("Llamada a la API fallida",filteredResponse);
        console.log("DEmosle Otra OPCION nada 404 Dead END");
        console.log("Encadenar uan random o un boton recargar");
    }
}
    
// };
//console.log('Iniciamos llamada a lista filtrada',getFilteredList(param));
// let param1='Canadian';
// let param2='Seafood';
// let param3='Chicken';



    // window.onload=
window.onload=async function(){
    try {
    await Promise.all([
        get10Random(),
        getLatest(),
        getCategories(),
        getListAllAreaCountry(),
        getListAllCategories(),
        getListAllIngredients(),
        // getFilteredList(7,param1),//Area Filter text
        // getFilteredList(8,param2),//Category filter text
        // getFilteredList(9,param3),//Ingredient filter text
        ]);
    }catch(error){
        console.error("Promise.all Error on Wondos.onload",error);
    }
}

//Faltan las funciones de sesion de Jesus aqui