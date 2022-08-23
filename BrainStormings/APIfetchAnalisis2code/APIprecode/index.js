//The MealDB API https://themealdb.com
//const base_URL='https://www.themealdb.com/api/json/v1/1/'
const base_URL = "https://www.themealdb.com/api/json/";
const api_BaseKey = "v1/1/";
const api_PayedKey = "v2/9973533/";

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


// const url = `${base_URL}${api_PayedKey}${apiSelected[0]}`;
// console.log("URL a llamar", url);

async function getAPIResponse(apiIndex,params = '') {
    // console.log("A ver los params");
    let url='';
    if (apiIndex>=0 && apiIndex<=6){
        console.log("Sin params");
        url = `${base_URL}${api_PayedKey}${apiSelected[apiIndex]}`;
        // console.log("URL a llamar", url);

    } else {
        console.log("Con params");
        // let apiCompoudSelected='apiSelected[apiIndex]'+'params'
        url = `${base_URL}${api_PayedKey}${apiSelected[apiIndex]}${params}`;
        // url = `${base_URL}${api_PayedKey}${apiCompoundSelected}`;
        // console.log("URL a llamar", url);
    }
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }


async function getARandomRecipe() {
  const url = `${base_URL}${api_PayedKey}${apiSelected[0]}`;
  console.log("URL a llamar", url);
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function get10RandomRecipes() {
    const url = `${base_URL}${api_PayedKey}${apiSelected[1]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

async function getLatestRecipe() {
const url = `${base_URL}${api_PayedKey}${apiSelected[3]}`;
console.log("URL a llamar", url);
const response = await fetch(url);
const data = await response.json();
return data;
}
  

// async function getARecipe(id) {
//   const url = `${base_URL}${api_PayedKey}${apiSelected[11]}${id}`;
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
        <div class="card">
            <div class="cardContainer" id="${data.idMeal}">
                <div class="cardImgContainer">
                data.meals:
                    <p>
                        id=${data.strMeal}: 
                    </p>
                    <button class="linkCard" onclick="console.log('Recipe ID: ',${data.idMeal})">
                        <img class="imgCard" src="${data.strMealThumb}">
                    </button>
                </div>
            </div>
        </div>`;
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
                data.meals:
                    <p>
                        id=${data.strCategory}: 
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

// "idCategory" 
//                     //"strCategory" "strCategoryThumb" "strCategoryDescription"

// async function getRandomRecipe() {
//   const recipe = await getARandomRecipe();
//   // const promise=recipe.map(id=>)
// }

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
    //document.getElementById("rnd10Recipes").onload
        // const recipe = await getLatestRecipe();
        const recipe = await getAPIResponse(3);
        // console.log(recipe);
        console.log("latestRecipe:",recipe);
        console.log("latestRecipe:",recipe.meals);
        console.log('Registros de getLatestRecipe:(',recipe.meals.length,'):\n',recipe.meals);
        recipesHTML("latestRecipe",recipe.meals);
        
    };






    // window.onload=
window.onload=async function(){
    try {
    await Promise.all([get10Random(),getLatest(),getCategories()]);
    }catch(error){
        console.error("Promise.all Error on Wondos.onload",error);
    }
}



