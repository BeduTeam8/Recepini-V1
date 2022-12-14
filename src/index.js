//The MealDB API https://themealdb.com
//const base_url='https://www.themealdb.com'
const serverURL = "https://themealdb.com";
const apiSegment = "/api/json/";
const apiBaseKey = "v1/1/";
const apiPayedKey = "v2/9973533/";
const search_URL = `${serverURL}${apiSegment}${apiPayedKey}`;
//const urlImg=serverURL;

// let result = "";

/*let apiSelected = [
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
];*/
const apiSelected = [
	{
		//Busquedas sin parametros
		url: "random.php", //0- randomButton regresa 1 receta sorpresa  (registro/objeto) que tiene 53 propiedades.
		tipo: "meals",
		layout: "recipeArea",
		sesion: false,
		name: "0. Receta Sorpresa",
	},
	{
		url: "randomselection.php", //1- 10random recipes cada una con 53 props.
		tipo: "meals",
		layout: "resultsArea",
		sesion: true,
		nombre: "1. 1-10 random recipes",
	},
	{
		url: "categories.php", //2- Regresa una Lista de categorias en un OBJ Categories. DESACTIVAMOS SUS FUNCIONES LA DEEJAMOS PARA NO ALTERAR MAS
		//con 14 registros/objetos cada uno con 4 propiedades. "idCategory"
		//"strCategory" "strCategoryThumb" "strCategoryDescription"
		tipo: "categories",
		layout: "listCategories",
		sesion: true,
		nombre: "2. Categor??as",
	},
	{
		url: "latest.php", //3-Regresa una lista con las ultimas 10 recetas ingresada al DB,
		//objetos cada una con 53 props.
		tipo: "meals",
		layout: "latestRecipe",
		sesion: true,
		nombre: "3. Latest 10",
	},
	{
		url: "list.php?a=list", //4-Regresa una Lista de Area=Country/Pais son 27 registros/objetos
		//de un campo/propiedad "strArea"
		tipo: "meals",
		layout: "listAllAreas",
		sesion: true,
		nombre: "4. ??reas",
	},
	{
		url: "list.php?c=list", //5-Regresa la Lista de categorias de 14 registros/objetos
		//de un campo/propiedad "strCategory"
		tipo: "meals",
		layout: "listAllCategories",
		sesion: true,
		nombre: "5. Categor??as",
	},
	{
		url: "list.php?i=list", //6-Regresa la Lista de ingredienes de 574 registros/objetos cada uno de               //4 propiedades. "idIngredient" "strIngredient" "strDescription" "strType"
		tipo: "meals",
		layout: "listAllIngredients",
		sesion: true,
		nombre: "6. Ingredientes",
	},
	{
		//Busqquedas que req parametro
		url: "filter.php?a=", //7-${meals.strArea} Busqueda por Area del Mundo, uno de 27 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "results",
		sesion: false,
		nombre: "7. B??squeda por ??rea",
	},
	{
		url: "filter.php?c=", //8-${meals.strCategory} Busqueda por categoria, una de 14 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "results",
		sesion: false,
		nombre: "8. B??squeda por categor??a",
	},
	{
		url: "filter.php?i=", //9-${strIngredient} Busqueda por ingrediente uno de 574 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "ingredientsResults",
		sesion: false,
		name: "9. B??squeda por ingrediente 1",
	},
	{
		url: "filter.php?i=", //10-${strIngredient,strIngredient,strIngredient}
		//Posiblemente: String.concat(strIngredient,strIngredient,strIngredient)
		//Busqueda por multingredientes. Recibe un string de ingredientes separados por coma.
		//Regresa un arreglo de objetos cada uno con 53 propiedades.
		tipo: "meals",
		layout: "ingredientsResults",
		sesion: false,
		nombre: "10. B??squeda multingredientes",
	},
	{
		url: "lookup.php?i=", //11-${idMeal}Busqueda por Id.
		//Regresa un arreglo con un unico elemento [0] con 53 propiedades
		tipo: "meals",
		layout: "recipeArea",
		sesion: false,
		name: "11. B??squeda por Id",
	},
	{
		url: "search.php?f=", //12-${charA-Z}Busqueda por la primera letra y Regresa un arreglo de objetos cada uno con 53 propiedades o null
		tipo: "meals",
		layout: "alfabetico",
		sesion: false,
		nombre: "12. B??squeda por primera letra",
	},
	{
		url: "search.php?s=", //13-${palabra o string}
		//Busqueda por palabra o letras en el campo nombre strMeal.
		//Regresa un arreglo de objetos cada uno con 53 propiedades.
		tipo: "meals",
		layout: "results",
		sesion: false,
		nombre: "13. B??squeda por palabra o letras en receta",
	},
	{
		//Receta del d??a
		url: "random.php", //0- randomButton regresa 1 receta sorpresa  (registro/objeto) que tiene 53 propiedades.
		tipo: "meals",
		layout: "recipeDay",
		sesion: true,
		nombre: "14. Receta del d??a",
	},
];

// const url = `${serverURL}${apiPayedKey}${apiSelected[0]}`;
// console.log("URL a llamar", url);

/*
async function getAPIResponse(apiIndex,params = '') {
    // console.log("A ver los params");
    let url='';
    if (apiIndex>=0 && apiIndex<=6){
        console.log("Sin params");
        url = `${serverURL}${apiPayedKey}${apiSelected[apiIndex]}`;
        // console.log("URL a llamar", url);
    } else {
        console.log("Con params");
        // let apiCompoudSelected='apiSelected[apiIndex]'+'params'
        url = `${serverURL}${apiPayedKey}${apiSelected[apiIndex]}${params}`;
        // url = `${serverURL}${apiPayedKey}${apiCompoundSelected}`;
        // console.log("URL a llamar", url);
    }
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getARandomRecipe() {
    const url = `${serverURL}${apiPayedKey}${apiSelected[0]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function get10RandomRecipes() {
    const url = `${serverURL}${apiPayedKey}${apiSelected[1]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function getLatestRecipe() {
    const url = `${serverURL}${apiPayedKey}${apiSelected[3]}`;
    console.log("URL a llamar", url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}*/

// async function getARecipe(id) {
//   const url = `${serverURL}${apiPayedKey}${apiSelected[11]}${id}`;
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
//   let urlString = serverURL + aPISelected[aPIbyIndex];
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

function randomRecipeHTML(recipesDIV, recipes) {
	console.log("Formateando String en randomRecipeHTML:", recipes);
	const recipesGoInDiv = document.getElementById(recipesDIV);
	recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
	recipes.forEach((data) => {
		//const adding_recipe = document.createElement("article");
		//adding_recipe.innerHTML =
		recipesGoInDiv.innerHTML += `<article id="${data.idMeal}"
        class="card-Recipie-Day | display-flex flex-gap overflow-hidden position-relative border-radius-10px padding-300-vertical padding-600-inline margin-500">
        <div class="redBar"></div>
        <button class="imgContainer | border-radius-12px" onclick="getRecipe(${data.idMeal})">                
          <img src="${data.strMealThumb}" alt="Picture of ${data.strMeal}">
         </button>
        <div class="display-flex flex-column-reverse    justify-content-around flex-center">
          <h3 class=" card-Recipie-Day-Text | font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42 text-center">
            ${data.strMeal}
          </h3>
          <button
            class="bg-primary-tomatogreen text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-600 font-size-16" onclick="getRecipe(${data.idMeal})">
            Recipie of the day
          </button>
        </div>
      </article>`;
		//recipesGoInDiv.appendChild(adding_recipe);
		console.log("Termina randomHTML en idLayout:", recipesDIV);
	});
}

function recipesHTML(recipesDIV, recipes) {
	console.log("DENTRO de recipesHTML:id=", recipesDIV, " : ", recipes);
	const numberRelatedRecipes = `We found ${recipes.length} related recipies.`;
	console.log(numberRelatedRecipes);
	if (recipesDIV === "ingredientsResults") {
		const header2In = document.getElementById("RelatedByIngredient");
		header2In.textContent = `We got ${recipes.length} related dishes`;
	} else if (recipesDIV === "latestRecipe") {
	} else {
		const header2In = document.getElementById("numberResults");
		header2In.textContent = `We found ${recipes.length} results for your search`;
	}
	const recipesGoInDiv = document.getElementById(recipesDIV);
	recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
	recipes.forEach((data) => {
		//const adding_recipe = document.createElement("article");
		//adding_recipe.innerHTML =
		recipesGoInDiv.innerHTML += `<article id="${data.idMeal}"
            class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">
            <button class="overflow-hidden border-radius-10px   "onclick="getRecipe(${data.idMeal})">
                <img class="imgCard" src="${data.strMealThumb}">
            </button>
            <h4>${data.strMeal}</h4>
            <button
                class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getRecipe(${data.idMeal})">
                View recipie 
            </button>
        </article>`;
		// recipesGoInDiv.appendChild(adding_recipe);
		console.log("Termina recipesHTML en IdLayout:", recipesDIV);
	});
}

function printIngredient(data) {
	let result = "";
	// console.log("Inicia printIngredient con data:",data);
	[...Array(21).keys()].forEach(function (valor, indice) {
		if (`strIngredient${indice}` in data) {
			result += `<!--ESTE ERA UN ANCHOR y lo CAMBIE POR UN DIV o Button
            //  <a href="ingredient.html"-->
                <div class="text-none text-neutral-matteblack">
                    <figure>
                        <img src="${serverURL}/images/ingredients/${
				data["strIngredient" + indice]
			}.png" alt="${
				data["strIngredient" + indice]
			}" style="width: 81px; height:81px; object-fit: cover" onclick="getFilteredList(9,'${
				data["strIngredient" + indice]
			}')">
                        <p>${indice} ${data["strMeasure" + indice]}&nbsp;${
				data["strIngredient" + indice]
			}</p>
                    </figure>
                </div>`;
		}
	});
	console.log("Termina printIngredient");
	return result;
}

//Format a One Recipe
function recipesXLHTML(recipesDIV, therecipe) {
	console.log("Dentro de la funcion una XLHTMLrecipe:", therecipe);
	const recipeGoesinDIV = document.getElementById(recipesDIV);
	recipeGoesinDIV.innerHTML = ""; //Clean element Before Filling
	therecipe.forEach((data) => {
		//const adding_recipe = document.createElement("div");
		//adding_recipe.innerHTML =
		recipeGoesinDIV.innerHTML =
			`<section style="margin: 40px;" id="recipe">
    <div id="${data.idMeal}">
    <!-- ==========================RECIPE TITLE id AREA =============================================start -->
    <h1 class="text-primary-tomatogreen font-family-Vida

    font-style-normal font-weight-400 font-size-64
    font-line-height-78 display-flex justify-content-center text-center" id="recipeTitle">${data.strMeal}</h1>
    <!-- ==========================RECIPE TITLE id AREA ================================================eND -->
    </div>

    <!-- Etiquetas suspendidas -->
    <!--EVALUANDO NO USARLAS TEMPORALMENTE-->
    <!-- <div class="container display-flex flex-row flex-gap justify-content-center">
    <button
    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">
    Casserole</button>

    <button
    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">
    Cheasy</button>  
    
    <button
    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">
    Meat</button>      
        </div> -->

    </section>
    <!-- Recipe ingredients and recipe image -->
    <section class="display-flex flex-column-reverse flex-gap justify-content-center recipe-ingredients">
    <aside class="text-center">
    <h3 class="text-primary-tomatored font-family-Popp
        font-style-normal font-weight-500 font-size-28
        font-line-height-42" style="margin: 20px">Recipe ingredients</h3>
        <!--ESTA SECCION DE LA IMAGEN NO IB A AQUI INICIALMENTE. 
        lA CAMBIE PORQUE NO RESPONDIA AL css Y CARGABA LA IMAGEN A LA IZQ-->
            <!-- Recipe image -->
        <article>
            <img src="${data.strMealThumb}" alt="Foto of ${data.strMeal}" class="recipe-image">
        </article>
        <br><!--ESTE BR fRANK LO INSERTO, PORQUE NO HABIA ESPACION ENTRE FOTO E INGREDIENTES-->
        <!--HASTA AQUI NO ESTABA AQUI DE LA IMAGEN DE LA RECETA  -->
    <section class="text-center text-neutral-matteblack  font-family-Popp
    font-style-normal font-weight-275 font-size-20 font-line-height-30" 
    style="display: grid; grid-template-columns: repeat(4, auto); 
    grid-template-rows: repeat(2, auto); column-gap: 16.3px; 
    row-gap: 1px; justify-items: center;" id="recipeIngredients">
        <!-- ==========================RECIPE INGREDIENTS id AREA ===================================== -->
        ` +
			printIngredient(data) +
			`</section>

</aside>
<!--Aqui iba el tag Article con la imegen, pero no respondia a las etiquetas y estaba cargado a la izQ-->
</section>
<!-- Recipe instructions -->
<section class="display-flex flex-column align-items-center" style="width: 55%; margin: 20px auto">
<h3 class="text-primary-tomatored font-family-Popp font-style-normal font-weight-600 font-size-32
font-line-height-48 text-center">Recipe instructions</h3>
<ol class="text-neutral-matteblack  font-family-Popp
font-style-normal font-weight-400 font-size-16
font-line-height-24">
  ${data.strInstructions}
</ol>
</section>
<!-- Share -->
<section class="display-flex flex-column text-center" style="width: 40%; margin: 20px auto">
<span class="text-primary-tomatored font-family-Popp
font-style-normal font-weight-600 font-size-40
font-line-height-60">Did you make it?</span>
<span class="text-primary-tomatogreen font-family-Popp
font-style-normal font-weight-300 font-size-24
font-line-height-36">We would love for you to share it with us! #Recipini</span>
</section>
<!-- Video -->
<!--YOUTUBE FORZA A VERLO DESDE SU SITIO
<!--<section class="display-flex flex-column align-items-center video">
<h3 class="text-primary-tomatored font-family-Popp
font-style-normal font-weight-500 font-size-28
font-line-height-42" style="margin: 20px">Video of how it was made!</h3>
<iframe width="685" height="415" src=${data.strYoutube} title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>-->
</section>`;

		//recipeGoesinDIV.appendChild(adding_recipe);
		console.log("Termina recipesXLHTML en IdLayout:", recipesDIV);
	});
	activeSection(3);
	scroll(0, 0);
}

/*
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
*/

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
/*function categoriesHTML(categoriesDIV,categories) {
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
}*/

//render a categories information that came in a meals OBJ.
//You can decide no using the former one and keeping this ones for simplicity purposes.
//This funciton does not work for Categoris OBJ types.
//And does not render description property as it is not returned in its API reponse. Rememeber the API respones for this 2 functions are different.
function listsAllCategoriesHTML(listsDIV, lists) {
	console.log("Enla funcion lists:", lists);
	//
	//const {strCategory:dataId2List}=lists;
	//console.log('DEstructuring:',dataId2List);
	const listsGoInDiv = document.getElementById(listsDIV);
	listsGoInDiv.innerHTML = ""; //Clean element Before Filling
	lists.forEach((data) => {
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
	printTotal("results", lists.length);
}

//List all the areas or countries related to the recipes in the API
function listsAllAreaHTML(listsDIV, lists) {
	console.log("En listAllAreaHTML String Formatting", lists);
	const listsGoInDiv = document.getElementById(listsDIV);
	listsGoInDiv.innerHTML = ""; //Clean element Before Filling
	lists.forEach((data) => {
		//const addingList = document.createElement("article");
		if (data.strArea != "Unknown") {
			//addingList.innerHTML =
			listsGoInDiv.innerHTML += `<article id="${data.strArea}" class="area-catagory ">
                    <!--ESTE ERA UN ANCHOR y lo CAMBIE POR UN DIV
                    //       <a href="search_results.html"-->
                    <div class=" display-flex flex-column flex-gap margin-100">
                        <div class="flag-Container | overflow-hidden">
                            <img 
                            src="./assets/Flags/${data.strArea}.png" 
                            alt="The ${data.strArea} Flag" onclick="getFilteredList(7,'${data.strArea}')">
                        </div>
                        <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
                            font-style-normal font-weight-600 font-size-20
                            fit-content-width text-center padding-300-inline text-primary-tomatored"
                            style="border: 2px solid ;" onclick="getFilteredList(7,'${data.strArea}')">
                            ${data.strArea}
                        </button>
                    </div>
                </article>`;
			//listsGoInDiv.appendChild(addingList);
		}
	});
	console.log("Ending listAllAreas/CountryFlags in IdLayout:", listsDIV);
}

//List all the ingredients in the API 574 aprox registries.
//This could be used in a graphical search gut requires a chechbox inside each cardContainer and all the logic to concatenate the values in a String feed into the API call.
function listsAllIngredientsHTML(listIngredientsDIV, lists) {
	console.log("Enla funcion lists:", lists);
	const listsGoInDiv = document.getElementById(listIngredientsDIV);
	listsGoInDiv.innerHTML = ""; //Clean element Before Filling
	lists.forEach((data) => {
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

/*document.getElementById("randomButton").onclick = async function () {
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
    
    sessionStorage.setItem("infoCategories", JSON.stringify(response)); ///Guardar en sesi??n
};*/

/*async function getLatest(){
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
    
};*/

/*async function getListAllIngredients(){
    const allIngredients = await getAPIResponse(6);
    // console.log(allIngredients);
    console.log("ListAllIngredients:",allIngredients);
    console.log("ListAllIngredients:",allIngredients.meals);
    console.log('Registros de Lista  ALLIngredientes:(',allIngredients.meals.length,'):\n',allIngredients.meals);
    listsAllIngredientsHTML("listAllIngredients",allIngredients.meals);
    
};*/

//Al parecer podemos utilizar esta funci???n 3 a 4 veces,
//Es decir para filtrar por area,categoria e ingrediet(e)
//Recibe un parametro y lo pega al URL para que la llamada al API responda.
//primera vez llamamo a filter.php?a=gentilicio
async function getFilteredList(filterIndex, param) {
	//try{
	//const filteredResponse = await getAPIResponse(filterIndex,param);
	//const filteredResponse = await getGeneral(filterIndex,param);
	getGeneral(filterIndex, param);
	// console.log("filteredSearch:",filteredResponse);
	// console.log('Registros de filteredResponse:(',filteredResponse.meals.length,'):\n',filteredResponse.meals);

	// function getDisplayAreaxIndex(index){
	//let listfilteredResponseDIV="listfilteredResponse";//Limpiar el Area de desplegar
	//     switch (filterIndex) {
	//         case 7:{
	//             listfilteredResponseDIV=
	//                 `${listfilteredResponseDIV}Area`
	//             console.log('listfilteredResponseDIVCountry:',listfilteredResponseDIV);
	//             // return listfilteredResponseDIV;
	//         }
	//         break;
	//         case 8:{
	//             listfilteredResponseDIV=
	//                 `${listfilteredResponseDIV}Category`
	//             console.log('listfilteredResponseDIVCat:',         listfilteredResponseDIV);
	//         }
	//         break;
	//         case 9:{
	//         listfilteredResponseDIV=
	//             `${listfilteredResponseDIV}Ingredient`;
	//         console.log('listfilteredResponseDIVIng:',listfilteredResponseDIV);
	//         }//Falta el caso 10 Multiingrediente
	//         break;
	//         default:
	//         break;
	//     }
	//  recipesHTML(listfilteredResponseDIV,filteredResponse.meals);
	/*}
    catch (err){
        console.error("Llamada a la API fallida",err.msj);
        console.log("DEmosle Otra OPCION nada 404 Dead END");
        console.log("Encadenar uan random o un boton recargar");
    }*/
}

async function getRecipe(id) {
	//const recipe = await getGeneral(11,id);
	getGeneral(11, id);
	//const recipe = await getAPIResponse(11,id);
	// console.log("Receta",id,": ",recipe);
	// console.log("Registros de Receta",id,":(",recipe.meals.length,"):\n",recipe.meals);
	//recipesXLHTML("recipeArea",recipe.meals);
	//recipesHTML(,recipe.meals);
}

/*if (sessionStorage.getItem("listCategories")) {
    const inicial = document.getElementById("listCategories");
    console.log('objeto en sesion',JSON.parse(sessionStorage.getItem("listCategories")).categories);
    categoriesHTML("listCategories", JSON.parse(sessionStorage.getItem("listCategories")).categories);
}
if (sessionStorage.getItem("listAllArea")) {
    const inicial = document.getElementById("listAllArea");
    console.log('objeto en sesion',JSON.parse(sessionStorage.getItem("listAllArea")).meals);
    listsAllAreaHTML("listAllArea", JSON.parse(sessionStorage.getItem("listAllArea")).meals);
}
if (sessionStorage.getItem("listAllIngredients")) {
    const inicial = document.getElementById("listAllIngredients");
    console.log('objeto en sesion',JSON.parse(sessionStorage.getItem("listAllIngredients")).meals);
    listsAllIngredientsHTML("listAllIngredients", JSON.parse(sessionStorage.getItem("listAllIngredients")).meals);
}*/
window.onload = async function () {
	try {
		await Promise.all([getGeneral(3), getGeneral(4), getGeneral(14)]); //getGeneral(1),getGeneral(2),getGeneral(5),getGeneral(6)
	} catch (error) {
		console.error("Promise.all Error on window.onload", error);
	}
};

/////////// LGisus
/*function saveStorage(Index) {
    if (sessionStorage.getItem(apiSelected[Index].layout)) {
        //const inicial = document.getElementById(apiSelected[Index].layout);
        console.log('objeto en sesion',JSON.parse(sessionStorage.getItem(apiSelected[Index].layout))[apiSelected[Index].tipo]);
        categoriesHTML(apiSelected[Index].layout, JSON.parse(sessionStorage.getItem(apiSelected[Index].layout))[apiSelected[Index].tipo]);
    }
}
function retrieveStorage(Index) {
    if (sessionStorage.getItem(apiSelected[Index].layout)) {
        // Restore the contents of the text field
        const inicial = document.getElementById("randomRecipe");
        console.log('objeto en sesion',JSON.parse(sessionStorage.getItem("randomRecipe")).meals);
        recipesHTML("randomRecipe", JSON.parse(sessionStorage.getItem("randomRecipe")).meals);
    }
}
[2,3,4,6].map(function (x) { ///Almacenar datos en sesion
    saveStorage(x);
});*/

async function getAPIResponse(apiIndex, params = "") {
	try {
		// console.log("A ver los params");
		let url = !params
			? `${search_URL}${apiSelected[apiIndex].url}`
			: `${search_URL}${apiSelected[apiIndex].url}${params}`;

		console.log("URL a llamar", url);
		console.log("Nombre de B??squeda: ", apiSelected[apiIndex].nombre);
		const response = await fetch(url);
		const data = await response.json();

		if (data.meals) {
			console.log("apiIndex:", apiIndex);
			data.meals.map(function (obj) {
				//Borrar indices que est??n de m??s
				[...Array(21).keys()].forEach(function (valor, indice) {
					if (
						`strIngredient${indice}` in obj &&
						(obj[`strIngredient${indice}`] == "" ||
							obj[`strIngredient${indice}`] == null)
					) {
						delete obj[`strIngredient${indice}`];
						delete obj[`strMeasure${indice}`];
					}
				});
				if ("strInstructions" in obj) {
					//Dar formato a las instrucciones
					obj.strInstructions =
						"<ul><li>" +
						obj.strInstructions.split("\r\n").join("</li><li>") +
						"</li></ul>";
				}
			});
			console.log("filterOBJ from API", ":", data.meals);
		}
		//data['total'] = data[apiSelected[apiIndex].tipo].length;
		//console.log('total:',data);
		return data;
	} catch (error) {
		console.log(error);
	}
}

/*function filterInvalid(obj) {
    if ('strIngredient1' in obj && obj.strIngredient1 != '' && obj.strIngredient1 != null) {
        return true;
    } else {
        //entradasInvalidas++;
        return false;
    }
}*/

function printTotal(div, total) {
	const addingList = document.getElementById(div);
	addingList.innerHTML = `${total} resultados`;
}

async function getGeneral(Index, params = "") {
	const recipe = await getAPIResponse(Index, params);
	// console.log(recipe);
	/*console.log("Recipes:",recipe);
    console.log("Recipes[apiSelected[Index].tipo]:",recipe[apiSelected[Index].tipo]);
    console.log('# registros de getRecipes:(',recipe[apiSelected[Index].tipo].length,')');*/
	layout = apiSelected[Index].layout;
	//layout = (!layout) ? apiSelected[Index].layout : layout; ///
	let datos = recipe[apiSelected[Index].tipo];

	if (apiSelected[Index].sesion === true) {
		///En caso de definir que se almacene en sesi??n
		if (sessionStorage.getItem(apiSelected[Index].layout)) {
			///Obtener datos de sesi??n
			datos = JSON.parse(sessionStorage.getItem(apiSelected[Index].layout))[
				apiSelected[Index].tipo
			];
			console.log("en sesion");
		} else {
			sessionStorage.setItem(layout, JSON.stringify(recipe)); ///Guardar en sesi??n, con nombre del layout para mayor referencia
		}
	}
	//console.log("layout", layout);
	switch (Index) {
		case 1:
			recipesHTML(layout, datos);
			break;
		case 2: //Categor??as
			categoriesHTML(layout, datos);
			break;
		case 3: //Latest
			recipesHTML(layout, datos);
			break;
		case 4: //Area
			listsAllAreaHTML(layout, datos);
			break;
		case 5:
			listsAllCategoriesHTML(layout, datos);
			break;
		case 6: //Ingredientes
			listsAllIngredientsHTML(layout, datos);
			break;
		case 7:
			{
				//Lista por pais
				// listfilteredResponseDIV=
				//     `${listfilteredResponseDIV}Area`
				// console.log('listfilteredResponseDIVCountry:',listfilteredResponseDIV);
				// return listfilteredResponseDIV;
			}
			recipesHTML(layout, datos);
			activeSection(2);
			scroll(0, 0);
			document.getElementById("searchBar2").value = "";
			break;
		case 8:
			{
				//Lista por Categoria de Comida
				// listfilteredResponseDIV=
				//     `${listfilteredResponseDIV}Category`
				// console.log('listfilteredResponseDIVCat:',         listfilteredResponseDIV);
			}
			// recipesHTML(listfilteredResponseDIV,filteredResponse.meals);
			recipesHTML(layout, datos);
			break;
		case 9:
			{
				//lista de Ingredientes
				// listfilteredResponseDIV=
				//     `${listfilteredResponseDIV}Ingredient`;
				// console.log('listfilteredResponseDIVIng:',listfilteredResponseDIV);
			} //Falta el caso 10 Multiingrediente
			// recipesHTML(listfilteredResponseDIV,filteredResponse.meals);
			recipesHTML(layout, datos);
			const titleIngredient = document.getElementById("titleIngredient");
			titleIngredient.textContent = params;
			const imgIngredient = document.getElementById("imgIngredient");
			imgIngredient.src =
				"https://themealdb.com/images/ingredients/" + params + ".png";
			activeSection(4);
			scroll(0, 0);
			break;
		case 11:
			recipesXLHTML(layout, datos);
			break;
		case 14:
			randomRecipeHTML(layout, datos);
			break;
		/*switch (filterIndex) {
                
                default:
                break;
            }*/
		//recipesHTML(listfilteredResponseDIV,filteredResponse.meals);

		default:
			break;
	}
}

///Quitar area none(25)
///Checar ingredients pasar a lista (li).
///almacenar ultima busqueda
///Almacenar searchbox
///Almacenar filter
///Almacenar latest
///A??adir search

/*async function get10Random(Index){
    //document.getElementById("rnd10Recipes").onload
    // const recipe = await get10RandomRecipes();
    //const Index = 1;
    const recipe = await getAPIResponse(Index);
    // console.log(recipe);
    console.log("rnd10Recipes:",recipe);
    console.log("rnd10Recipes:",recipe[apiSelected[Index].tipo]);
    console.log('Registros de get10RandomRecipes:(',recipe[apiSelected[Index].tipo].length,'):\n',recipe[apiSelected[Index].tipo]);
    recipesHTML("rnd10Recipes",recipe[apiSelected[Index].tipo]);
};*/

/*async function getCategories(Index){
    const response = await getAPIResponse(Index);
    // console.log(response);
    console.log("Categories:",response);
    console.log("Categories:",response.categories);
    console.log('Registros de getCategories:(',response.categories.length,'):\n',response.categories);
    categoriesHTML("listCategories",response.categories);
    
    sessionStorage.setItem("infoCategories", JSON.stringify(response)); ///Guardar en sesi??n
};*/

document.getElementById("randomButton").onclick = async function () {
	// const recipe = await getARandomRecipe();
	const recipe = await getAPIResponse(0);
	// console.log('getARandomRecipe:',recipe);
	// console.log('getARandomRecipe:(',recipe.meals.length,'):',recipe.meals);
	recipesXLHTML("recipeArea", recipe.meals);
	//recipesXLHTML("randomRecipe",recipe.meals);
	//recipesHTML("recipeArea",recipe.meals);
	//console.log(recipe);
	///Guardar en sesi??n
	sessionStorage.setItem("randomRecipe", JSON.stringify(recipe));
	//console.log(sessionStorage.getItem("randomRecipe"));
};

document.getElementById("searchBar2").oninput = async function () {
	//  document.getElementById("searchButton").onclick=async function(){
	//Que prefieren usar el Searchbutton o el searchTextBox
	const searchterm = document.getElementById("searchBar2");
	console.log("searchterm.length", searchterm.value.length);

	//if(searchterm.value.length>0){ ///Debe de al menos teclear 3 caracteres para ejecutar la b??squeda
	const recipe = await getAPIResponse(13, searchterm.value);
	///--------------------------
	let datos = recipe.meals;
	sessionStorage.setItem("searchterm", searchterm.value); ///Guardar en sesi??n, con nombre del layout para mayor referencia
	console.log("searchterm", sessionStorage.getItem("searchterm"));
	console.log("resultterm", sessionStorage.getItem("resultterm"));
	/*if (sessionStorage.getItem('resultterm')) {
            datos = JSON.parse(sessionStorage.getItem('resultterm'))['meals'];
        } else {*/
	sessionStorage.setItem("resultterm", JSON.stringify(recipe)); ///Guardar en sesi??n, con nombre del layout para mayor referencia
	//}
	///--------------------------
	if ("meals" in recipe && recipe.meals) {
		console.log("Buscando receta(", searchterm.value, "): ", recipe);
		console.log(
			"Receta x Terminos: ",
			searchterm.value,
			":#(",
			recipe.meals.length,
			"):\n",
			recipe.meals
		);
		recipesHTML("results", datos);
	} else {
		document.getElementById("results").innerHTML = "";
		const header2In = document.getElementById("numberResults");
		header2In.textContent =
			"We got nothing tu fullfil your search, why not gives us a chance. Try one of our suggestions...";
		getRecipe(1);
	}
	/*} else {
        sessionStorage.setItem('searchterm', "");
        sessionStorage.setItem('resultterm', "");
    }*/
}; //End of funciton getSearchBox();

document.addEventListener("keypress", function (e) {
	//console.log("keycode",e.keycode,"wich",e.which);
	if (e.keyCode === 13 || e.which === 13) {
		e.preventDefault();
		document.getElementById("searchInputBar2").value = ""; ///Se limpian valor de caja de b??squeda
		document.getElementById("results").innerHTML = ""; //Se limpian valores de capa que muestra resutados
		sessionStorage.setItem("searchterm", ""); //Se limpian valores de b??squeda de sesi??n
		sessionStorage.setItem("resultterm", "");
		return false;
	}
});

function changeVisibility(active) {
	///
	const displayAreas = document.querySelectorAll(".displayAreas");
	displayAreas.forEach(function (element) {
		if (active.includes(element.id)) {
			element.style.display = "block";
		} else {
			element.style.display = "none";
		}
	});
}
function invisiblesearchBox() {
	document.getElementById("SearchBar1").style.display = "none";
}

function visiblesearchBox() {
	document.getElementById("SearchBar1").style.display = "block";
}
const preloader = document.querySelector(".preloader-wrapper");

function activeSection(index) {
	preloader.classList.remove("fade-out-animation");
	setTimeout(function () {
		switch (index) {
			case 1:
				changeVisibility(["indexArea"]);
				visiblesearchBox();
				break;
			case 2:
				changeVisibility(["resultsArea"]);
				console.log(document.getElementById("SearchBar1"));
				invisiblesearchBox();
				break;
			case 3:
				changeVisibility(["recipeArea"]);
				visiblesearchBox();
				break;
			case 4:
				changeVisibility(["ingredientsArea"]);
				visiblesearchBox();
				break;
			case 5:
				changeVisibility(["aboutUSArea"]);
				visiblesearchBox();
				break;
			default:
				changeVisibility(["indexArea"]);
				visiblesearchBox();
				break;
		}
		preloader.classList.add("fade-out-animation");
	}, 300);
}
activeSection(1);

window.addEventListener("load", function () {
	preloader.classList.add("fade-out-animation");
});

document.getElementById("logoRecipini").addEventListener("click", () => {
	activeSection(1);
});
document.getElementById("indexMenu").addEventListener("click", () => {
	activeSection(1);
});
document.getElementById("aboutMenu").addEventListener("click", () => {
	activeSection(5);
});
document.getElementById("searchMenu").addEventListener("click", () => {
	activeSection(2);
});
document.getElementById("SearchBar1").addEventListener("mousedown", () => {
	const header2In = document.getElementById("numberResults");
	header2In.textContent = "";
	activeSection(2);
});

// function recipesHTML(recipesDIV,recipes) {
//     console.log('Enla funcion recipes:**', recipes);
//     const recipesGoInDiv = document.getElementById(recipesDIV);

//     while(recipesGoInDiv.firstChild) { ///Limpiar div en lugar de usar innerHTML
//         recipesGoInDiv.removeChild(recipesGoInDiv.firstChild);
//     }//recipesGoInDiv.innerHTML = ""; //Clean element Before Filling

//     recipes.forEach(data => {
//         const adding_recipe = document.createElement("div");

//         const card = document.createElement("div");
//         card.className = 'card';
//         adding_recipe.appendChild(card);

//         const cardContainer = document.createElement("div");
//         cardContainer.className = 'cardContainer';
//         cardContainer.id = data.idMeal;
//         card.appendChild(cardContainer);

//         const cardImgContainer = document.createElement("div");
//         cardImgContainer.className = 'cardImgContainer';
//         cardContainer.appendChild(cardImgContainer);

//         var newContent = document.createTextNode("data.meals");
//         cardImgContainer.appendChild(newContent);

//         const p = document.createElement("p");
//         cardImgContainer.appendChild(p);

//         var newContent1 = document.createTextNode("id="+data.strMeal);
//         p.appendChild(newContent1);

//         const button = document.createElement("button");
//         button.className = 'linkCard';
//         cardImgContainer.appendChild(button);

//         const imgCard = document.createElement("img");
//         imgCard.className = 'imgCard';
//         imgCard.src = data.strMealThumb;
//         button.appendChild(imgCard);

//         recipesGoInDiv.appendChild(adding_recipe);
//     });
// }

///En caso de que se haya guardado informaci??n en sesi??n, se obtiene de ella
/*if (sessionStorage.getItem("randomRecipe")) {
    // Restore the contents of the text field
    const inicial = document.getElementById("randomRecipe");
    console.log('objeto en sesion',JSON.parse(sessionStorage.getItem("randomRecipe")).meals);
    recipesHTML("randomRecipe", JSON.parse(sessionStorage.getItem("randomRecipe")).meals);
}
*/

// Listen for changes in the text field
/*button.addEventListener("click", () => {
    console.log("+++++");
    // And save the results into the session storage object
    sessionStorage.setItem("randomRecipe", field.innerHTML);
});*/
