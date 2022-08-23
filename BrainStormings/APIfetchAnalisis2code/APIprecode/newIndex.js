//The MealDB API https://themealdb.com
//const base_URL='https://www.themealdb.com/api/json/v1/1/'
const base_URL = "https://www.themealdb.com/api/json/";
const api_BaseKey = "v1/1/";
const api_PayedKey = "v2/9973533/";

let result = "";

let apiSelected = [
  "random.php", //randomButton 1 receta sorpresa
  "randomselection.php", //10random recipes
  "categories.php", //List ade categorias en un OBJ Categories
  "latest.php", //La ultima receta ingresada al DB
  "list.php?a=list", //Lista de Areagit  =Country/Pais son 27registros
  "list.php?c=list", //Lista de categorias 14 registros
  "list.php?i=list", //Lista de ingredienes son 574
  //Busqquedas que req parametro
  "filter.php?a=", //Busqueda por Area del Mundo, uno de 27 registros
  "filter.php?c=", //Busqueda por categoria, una de 14 registros
  "filter.php?i=", //Busqueda por ingrediente uno de 574
  "filter.php?i=", //Busqueda por multingredientes. Recibe un string ce ingredientes separados por coma.
  "lookup.php?i=", //Busqueda por Id
  "search.php?f=", //Busqueda por la primera letra
  "search.php?s=", //Busqueda por palabra o letras en el campo nombre
];

// const url = `${base_URL}${api_PayedKey}${apiSelected[0]}`;
// console.log("URL a llamar", url);

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
function recipesHTML(recipesDIV,recipes, ) {
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
                        <img class="imgCard" src="${data.strMealThumb}/preview">
                    </button>
                </div>
            </div>
        </div>`;
    recipesGoInDiv.appendChild(adding_recipe);
  });
}


// async function getRandomRecipe() {
//   const recipe = await getARandomRecipe();
//   // const promise=recipe.map(id=>)
// }

document.getElementById("randomButton").onclick = async function () {
    const recipe = await getARandomRecipe();
    console.log('getARandomRecipe:',recipe);
    console.log('getARandomRecipe:(',recipe.meals.length,'):',recipe.meals);
    recipesHTML("randomRecipe",recipe.meals);
};




async function get10Random(){
//document.getElementById("rnd10Recipes").onload
    const recipe = await get10RandomRecipes();
    // console.log(recipe);
    console.log("rnd10Recipes:",recipe);
    console.log("rnd10Recipes:",recipe.meals);
    console.log('Registros de get10RandomRecipes:(',recipe.meals.length,'):\n',recipe.meals);
    recipesHTML("rnd10Recipes",recipe.meals);
    
};

async function getLatest(){
    //document.getElementById("rnd10Recipes").onload
        const recipe = await getLatestRecipe();
        // console.log(recipe);
        console.log("latestRecipe:",recipe);
        console.log("latestRecipe:",recipe.meals);
        console.log('Registros de getLatestRecipe:(',recipe.meals.length,'):\n',recipe.meals);
        recipesHTML("latestRecipe",recipe.meals);
        
    };

    // window.onload=
window.onload=async function(){
    try {
    await Promise.all([get10Random(),getLatest()]);
    }catch(error){
        console.error("Promise.all Error on Wondos.onload",error);
    }
}



