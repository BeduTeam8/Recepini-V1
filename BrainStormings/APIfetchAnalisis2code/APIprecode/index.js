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
//   //Llamada a la API*
//   //Posiblemente falte decirle su nodo o div de zona de despliegue
// }
//End of function getRecipes();

//====================================================================
//===
//lista de funciones a conectar en el HTML con sus botones o divs para onload, onclick etc.
//Si se usan events del addListener se pueden eliminar en segunda fase para que sean identificadas por id del button
//====================================================================









//===
//recipes=randomRecipeDIV o el Div que le toca
//un obj con listarecetas y el div
function recipesShortHTML(recipesDIV,recipes) {
    console.log('Enla funcion recipes:', recipes);
    const recipesGoInDiv = document.getElementById(recipesDIV);
    recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
    recipes.forEach(data => {
    const adding_recipe = document.createElement("div");
    adding_recipe.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.idMeal}">
                <div class="cardImgContainer">
                    <p>
                        <strong>${data.strMeal}</strong>
                    </p>
                    <button class="linkCard" onclick="getRecipe(
                        ${data.idMeal})">
                        <img class="imgCard" src="${data.strMealThumb}">
                    </button>
                </div>
            </div>
        </div>`;
    recipesGoInDiv.appendChild(adding_recipe);
  });
}

function recipesHTML(recipesDIV,therecipe) {
    console.log('Dentro de la funcion una recipe:', therecipe);
    const recipeGoesinDIV = document.getElementById(recipesDIV);
    recipeGoesinDIV.innerHTML = ""; //Clean element Before Filling
    therecipe.forEach(data => {
    const adding_recipe = document.createElement("div");
    adding_recipe.innerHTML = `
    <div class"cardRecipe">
        <div class="cardContainer" id="${data.idMeal}">
            <div class="cardImgContainer">
                <p><strong>Id</strong>${data.idMeal}</p>
                <p><strong>Meal</strong>${data.strMeal}</p>
                <p><strong>Category</strong>${data.strCategory}</p>
                <p><strong>Country</strong>${data.strArea}</p>
                <p><strong>Intructions</strong>${data.strInstructions}</p>
                            <img class="imgCard" src="${data.strMealThumb}">
                <p><strong>Tags</strong>${data.strTags}</p>
                            <a href=”${data.strYoutube}">${data.strMeal}Video</a>
                <div class="cardIngredient">
                <p>${data.strMeasure1}&nbsp;${data.strIngredient1}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient1}')">
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient1}.png" alt="${data.strIngredient1}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure2}&nbsp;${data.strIngredient2}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient2}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient2}.png" alt="${data.strIngredient2}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure3}&nbsp;${data.strIngredient3}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient3}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient3}.png" alt="${data.strIngredient3}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure4}&nbsp;${data.strIngredient4}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient4}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient4}.png" alt="${data.strIngredient4}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure5}&nbsp;${data.strIngredient5}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient5}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient5}.png" alt="${data.strIngredient5}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure6}&nbsp;${data.strIngredient6}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient6}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient6}.png" alt="${data.strIngredient6}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure7}&nbsp;${data.strIngredient7}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient7}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient7}.png" alt="${data.strIngredient7}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure8}&nbsp;${data.strIngredient8}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient8}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient8}.png" alt="${data.strIngredient8}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure9}&nbsp;${data.strIngredient9}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient9}')"> 
                        <img class="imgCard" 
                            src="${serverURL}/images/ingredients/${data.strIngredient9}.png" alt="${data.strIngredient9}"> 
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure10}&nbsp;${data.strIngredient10}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient10}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient10}.png" alt="${data.strIngredient10}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure11}&nbsp;${data.strIngredient11}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient11}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient11}.png" alt="${data.strIngredient11}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure12}&nbsp;${data.strIngredient12}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient12}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient12}.png" alt="${data.strIngredient12}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure13}&nbsp;${data.strIngredient13}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient13}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient13}.png" alt="${data.strIngredient13}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure14}&nbsp;${data.strIngredient14}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient14}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient14}.png" alt="${data.strIngredient14}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure15}&nbsp;${data.strIngredient15}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient15}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient15}.png" alt="${data.strIngredient15}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure16}&nbsp;${data.strIngredient16}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient16}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient16}.png" alt="${data.strIngredient16}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure17}&nbsp;${data.strIngredient17}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient17}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient17}.png" alt="${data.strIngredient17}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure18}&nbsp;${data.strIngredient18}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient18}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient18}.png" alt="${data.strIngredient18}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure19}&nbsp;${data.strIngredient19}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient19}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient19}.png" alt="${data.strIngredient19}">
                    </button>
                </p></div>                <div class="cardIngredient">
                <p>${data.strMeasure20}&nbsp;${data.strIngredient20}
                    <button class="linkCard" 
                        onclick="getFilteredList(9,'${data.strIngredient20}')">
                        <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data.strIngredient20}.png" alt="${data.strIngredient20}">
                    </button>
                </p></div>
        
                </div>
            </div>
        </div>`;
    recipeGoesinDIV.appendChild(adding_recipe);
  });
}


//All 53 Properties that comes on any recipe registry
// ${data.idMeal}
// ${data.strMeal}
// ${data.strDrinkAlternate}
// ${data.strCategory}
// ${data.strArea}
// ${data.strInstructions}
// ${data.strMealThumb}
// ${data.strTags}
// ${data.strYoutube}
// ${data.strMeasure1} ${data.strIngredient1}
// ${data.strMeasure2} ${data.strIngredient2}
// ${data.strMeasure3} ${data.strIngredient3}
// ${data.strMeasure4} ${data.strIngredient4}
// ${data.strMeasure5} ${data.strIngredient5}
// ${data.strMeasure6} ${data.strIngredient6}
// ${data.strMeasure7} ${data.strIngredient7}
// ${data.strMeasure8} ${data.strIngredient8}
// ${data.strMeasure9} ${data.strIngredient9}
// ${data.strMeasure10} ${data.strIngredient10}
// ${data.strMeasure11} ${data.strIngredient11}
// ${data.strMeasure12} ${data.strIngredient12}
// ${data.strMeasure13} ${data.strIngredient13}
// ${data.strMeasure14} ${data.strIngredient14}
// ${data.strMeasure15} ${data.strIngredient15}
// ${data.strMeasure16} ${data.strIngredient16}
// ${data.strMeasure17} ${data.strIngredient17}
// ${data.strMeasure18} ${data.strIngredient18}
// ${data.strMeasure19} ${data.strIngredient19}
// ${data.strMeasure20} ${data.strIngredient20}
// ${data.strSource}
// ${data.strImageSource}
// ${data.strCreativeCommonsConfirmed}
// ${data.dateModified}



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
                    <button class="linkCard" onclick="getFilteredList(8,'${data.strCategory}')">
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
                <div class="cardImgContainer">
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

            </div>
            <div class="cardTextContainer">${data.strDescription}</div>
        </div>`;
    listsGoInDiv.appendChild(addingList);
  });
}


document.getElementById("randomButton").onclick = async function () {
    // const recipe = await getARandomRecipe();
    const recipe = await getAPIResponse(0);
    console.log('getARandomRecipe:',recipe);
    console.log('getARandomRecipe:(',recipe.meals.length,'):',recipe.meals);
 recipesShortHTML("randomRecipe",recipe.meals);
};

async function get10Random(){
//document.getElementById("rnd10Recipes").onload
    // const recipe = await get10RandomRecipes();
    const recipe = await getAPIResponse(1);
    // console.log(recipe);
    console.log("rnd10Recipes:",recipe);
    console.log("rnd10Recipes:",recipe.meals);
    console.log('Registros de get10RandomRecipes:(',recipe.meals.length,'):\n',recipe.meals);
 recipesShortHTML("rnd10Recipes",recipe.meals);
    
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
 recipesShortHTML("latestRecipe",recipe.meals);
    
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
            }//Falta el caso 10 Multiingrediente
            break;
            default:
            break;
        }
     recipesShortHTML(listfilteredResponseDIV,filteredResponse.meals);
    }
    catch{
        console.error("Llamada a la API fallida",err.msj);
        console.log("DEmosle Otra OPCION nada 404 Dead END");
        console.log("Encadenar uan random o un boton recargar");
    }
}

async function getRecipe(id){
    const recipe = await getAPIResponse(11,id);
    // console.log(allIngredients);
    console.log("Receta",id,": ",recipe);
    console.log("Receta",id,": ",recipe.meals);
    console.log("Registros de Receta",id,":(",recipe.meals.length,"):\n",recipe.meals);
    recipesHTML("recipe",recipe.meals);
    
};


// };
//console.log('Iniciamos llamada a lista filtrada',getFilteredList(param));
// let param1='Canadian';
// let param2='Seafood';
// let param3='Chicken';
// let id=52772;
// console.log(getRecipe(id));




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