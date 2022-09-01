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

//Function to contact the 14 API calls depending on the target call
//the function receives an index ans optional parameters
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

//==================================================================
//===
//HTML FORMATING CODE FUNCTIONS
// con sus botones o divs para onload, onclick etc.
//Si se usan events del addListener se pueden eliminar en segunda fase para que sean identificadas por id del button
//==================================================================
//===
//All xxxxHTML functions get a DIV to realesa the formated HTML and 
//an array of OBjs
//recipes=randomRecipeDIV o el Div que le toca
//un obj con listarecetas y el div
//Short Recipe Listing is called by any response that returns a list of recipes
function recipesShortHTML(recipesDIV,recipes) {
    console.log('Enla funcion recipes:', recipes);
    const recipesGoInDiv = document.getElementById(recipesDIV);
    if (recipesDIV==='results'){
        recipesGoInDiv.innerHTML =`<H3>WE have ${recipes.length} recipes for you:</H3>`;//Number of Results
    }else{
        recipesGoInDiv.innerHTML =``; //Clean element Before Filling number of results not required
    }
    
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
//Format a One Recipe
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
//The 53 Properties that comes on any recipe registry
//Used in the upper function. ERASE before Realesing SW
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

//List of diferent categories, this came from an OBJ categories. 
//Remember the API returns 2 types of OBJs. (meals and categories)
//Only one is categories. 
//The main difference is the Description Property
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

//render a categories information that came in a meals OBJ. 
//You can decide no using the former one and keeping this ones for simplicity purposes.
//This funciton does not work for Categoris OBJ types.
//And does not render description property as it is not returned in its API reponse. Rememeber the API respones for this 2 functions are different.  
function listsAllCategoriesHTML(listsDIV,lists) {
    console.log('Enla funcion lists:', lists);
    //
    //const {strCategory:dataId2List}=lists;
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

//List all the areas or countries related to the recipes in the API
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

//List all the ingredients in the API 574 aprox registries.
//This could be used in a graphical search gut requires a chechbox inside each cardContainer and all the logic to concatenate the values in a String feed into the API call.
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

//==================================================================
//===
//STARTING POINT FUNCTIONS
//Con sus botones o divs para onload, onclick etc.
//Si se usan events del addListener se pueden eliminar en segunda fase para que sean identificadas por id del button
//==================================================================
//===
//All functions call the Universal function to call the API based on an Index of the 
//SearchARRAY. Get a response that is sent to an xxxxxHTML function to parse and format
//the content. Delivering the formatted HTML  at the given entry point in the HTML 
document.getElementById("randomButton").onclick = async function () {
    // const recipe = await getARandomRecipe();//Original called function in early development
    const recipe = await getAPIResponse(0);
    console.log('getARandomRecipe:',recipe);
    console.log('getARandomRecipe:(',recipe.meals.length,'):',recipe.meals);
    recipesShortHTML("randomRecipe",recipe.meals);
};

async function get10Random(){
    // const recipe = await get10RandomRecipes();//Original called function in early development
    const recipe = await getAPIResponse(1);
    console.log("rnd10Recipes:",recipe);
    console.log('Registros de get10RandomRecipes:(',recipe.meals.length,'):\n',recipe.meals);
    recipesShortHTML("rnd10Recipes",recipe.meals);
};

async function getCategories(){
    const response = await getAPIResponse(2);
    console.log("Categories:",response);
    console.log('Registros de getCategories:(',response.categories.length,'):\n',response.categories);
    categoriesHTML("listCategories",response.categories);
    
};

async function getLatest(){
    const recipe = await getAPIResponse(3);
    console.log("latestRecipe:",recipe);
    console.log('Registros de getLatestRecipe:(',recipe.meals.length,'):\n',recipe.meals);
    recipesShortHTML("latestRecipe",recipe.meals);
};

async function getListAllAreaCountry(){
    const recipe = await getAPIResponse(4);
    console.log("ListAllArea:",recipe);
    console.log('Registros de List by Area:(',recipe.meals.length,'):\n',recipe.meals);
    listsAllAreaHTML("listAllArea",recipe.meals);
};

async function getListAllCategories(){
    const allcategories = await getAPIResponse(5);
    console.log("ListAllCategories:",allcategories);
    console.log('Registros de List by Categories:(',allcategories.meals.length,'):\n',allcategories.meals);
    listsAllCategoriesHTML("listAllCategories",allcategories.meals);
};

async function getListAllIngredients(){
    const allIngredients = await getAPIResponse(6);
    console.log("ListAllIngredients:",allIngredients);
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
        console.log("filteredSearch:",filteredResponse);
        console.log('Registros de filteredResponse:(',filteredResponse.meals.length,'):\n',filteredResponse.meals);
        
        // function getDisplayAreaxIndex(index){
        // let listfilteredResponseDIV="listfilteredResponse";//Limpiar el Area de desplegar
        //Esta variable manda resultados al ID de resultados en HTML
        let listfilteredResponseDIV="results";//Direccionando a una sola hoja o seccion de respuestas. Este codigo que sigue puede eliminarse.
        //No borrar hasta probar desarrollo
        // switch (filterIndex) {
        //     case 7:{
        //         listfilteredResponseDIV=
        //             `${listfilteredResponseDIV}Area`
        //         console.log('listfilteredResponseDIVCountry',listfilteredResponseDIV);
        //         // return listfilteredResponseDIV;
        //     }
        //     break;            
        //     case 8:{
        //         listfilteredResponseDIV=
        //             `${listfilteredResponseDIV}Category`
        //         console.log('listfilteredResponseDIVCat',         listfilteredResponseDIV);
        //     }
        //     break;
        //     case 9:{
        //     listfilteredResponseDIV=
        //         `${listfilteredResponseDIV}Ingredient`;  
        //     console.log('listfilteredResponseDIVIng',listfilteredResponseDIV);
        //     }//Falta el caso 10 Multiingrediente
        //     break;
        //     default:
        //     break;
        // }
    console.log('lista de filtradas esta en ID/DIV:',listfilteredResponseDIV);
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
    console.log("Receta",id,": ",recipe);
    console.log("Registros de Receta",id,":(",recipe.meals.length,"):\n",recipe.meals);
    recipesHTML("recipe",recipe.meals);
};

document.getElementById("searchInputTxtBox").oninput =async function(){
// document.getElementById("searchButton").onclick =async function(){
    //Que prefieren usar el Searchbutton o el searchTextBox
    const searchterm=document.getElementById('searchInputTxtBox');
    console.log(searchterm.value);
    const recipe = await getAPIResponse(13,searchterm.value);
    console.log("Buscando receta(",searchterm.value,"): ",recipe);
    console.log("Receta x Terminos: ",searchterm.value,":#(",recipe.meals.length,"):\n",recipe.meals);
    recipesShortHTML("results",recipe.meals);
};//End of funciton getSearchBox();


//==================================================================
//===
//ZOna para prueba de las funciones que reciben parametros
//==================================================================
//===
// 
//console.log('Iniciamos llamada a lista filtrada',getFilteredList(param));
// let param1='Canadian';
// let param2='Seafood';
// let param3='Chicken';
// let id=52772;
// console.log(getRecipe(id));

//==================================================================
//===
// window.onload Toload data on startUP
//==================================================================
//===
// 
//


window.onload=async function(){
    try {
    await Promise.all([
        get10Random(),
        getLatest(),
        //getCategories(), //No se usa. Devuelve a través de otra API los mismos datos que AllCategories sin descripción. Pero en un OBJ diferente de un OBJ.meals, en su lugar usa del tipo Categories.
        getListAllAreaCountry(),
        getListAllCategories(),
        getListAllIngredients(),
        ]);
    }catch(error){
        console.error("Promise.all Error on Wondos.onload",error);
    }
}

//==================================================================
//===
// Faltan las funciones de sesion de Jesus aqui
//==================================================================
//===
//