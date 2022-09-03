//The MealDB API https://themealdb.com
//const base_url='https://www.themealdb.com'
const serverURL = "https://themealdb.com";
const apiSegment = "/api/json/";
const apiBaseKey = "v1/1/";
const apiPayedKey = "v2/9973533/";
const search_URL = `${serverURL}${apiSegment}${apiPayedKey}`;

const apiSelected = [
	{
		//Busquedas sin parametros
		url: "random.php", //0- randomButton regresa 1 receta sorpresa  (registro/objeto) que tiene 53 propiedades.
		tipo: "meals",
		layout: "",
		sesion: false,
	},
	{
		url: "randomselection.php", //1- 10random recipes cada una con 53 props.
		tipo: "meals",
		layout: "rnd10Recipes",
		sesion: true,
	},
	{
		url: "categories.php", //2- Regresa una Lista de categorias en un OBJ Categories.
		//con 14 registros/objetos cada uno con 4 propiedades. "idCategory"
		//"strCategory" "strCategoryThumb" "strCategoryDescription"
		tipo: "categories",
		layout: "listCategories",
		sesion: true,
	},
	{
		url: "latest.php", //3-Regresa una lista con las ultimas 10 recetas ingresada al DB,
		//objetos cada una con 53 props.
		tipo: "meals",
		layout: "latestRecipe",
		sesion: true,
	},
	{
		url: "list.php?a=list", //4-Regresa una Lista de Area=Country/Pais son 27 registros/objetos
		//de un campo/propiedad "strArea"
		tipo: "meals",
		layout: "listAllArea",
		sesion: true,
	},
	{
		url: "list.php?c=list", //5-Regresa la Lista de categorias de 14 registros/objetos
		//de un campo/propiedad "strCategory"
		tipo: "meals",
		layout: "listAllCategories",
		sesion: true,
	},
	{
		url: "list.php?i=list", //6-Regresa la Lista de ingredienes de 574 registros/objetos cada uno de               //4 propiedades. "idIngredient" "strIngredient" "strDescription" "strType"
		tipo: "meals",
		layout: "listAllIngredients",
		sesion: true,
	},
	{
		//Busqquedas que req parametro
		url: "filter.php?a=", //7-${meals.strArea} Busqueda por Area del Mundo, uno de 27 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		url: "filter.php?c=", //8-${meals.strCategory} Busqueda por categoria, una de 14 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		url: "filter.php?i=", //9-${strIngredient} Busqueda por ingrediente uno de 574 registros/objetos, cada uno con 3 propiedades. "strMeal" "strMealThumb" "idMeal"
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		url: "filter.php?i=", //10-${strIngredient,strIngredient,strIngredient}
		//Posiblemente: String.concat(strIngredient,strIngredient,strIngredient)
		//Busqueda por multingredientes. Recibe un string de ingredientes separados por coma.
		//Regresa un arreglo de objetos cada uno con 53 propiedades.
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		url: "lookup.php?i=", //11-${idMeal}Busqueda por Id.
		//Regresa un arreglo con un unico elemento [0] con 53 propiedades
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		url: "search.php?f=", //12-${charA-Z}Busqueda por la primera letra y Regresa un arreglo de objetos cada uno con 53 propiedades o null
		tipo: "meals",
		layout: "",
		sesion: false,
	},
	{
		url: "search.php?s=", //13-${palabra o string}
		//Busqueda por palabra o letras en el campo nombre strMeal.
		//Regresa un arreglo de objetos cada uno con 53 propiedades.
		tipo: "meals",
		layout: "results",
		sesion: false,
	},
	{
		//Receta del día
		url: "random.php", //0- randomButton regresa 1 receta sorpresa  (registro/objeto) que tiene 53 propiedades.
		tipo: "meals",
		layout: "recipeDay",
		sesion: true,
	},
];

//un obj con listarecetas y el div
function randomRecipeHTML(recipesDIV, recipes) {
	console.log("Enla funcion recipes:", recipes);
	const recipesGoInDiv = document.getElementById(recipesDIV);
	recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
	recipes.forEach((data) => {
		//const adding_recipe = document.createElement("article");
		// adding_recipe.innerHTML =
		recipesGoInDiv.innerHTML += `<article id="${data.idMeal}"
                class="card-Recipie-Day | display-flex 
                flex-gap overflow-hidden position-relative border-radius-10px 
                padding-300-vertical padding-600-inline margin-500">
                <div class="redBar"></div>
                <button class="imgContainer | border-radius-12px" 
                    onclick="getRecipe(${data.idMeal})">
                    <img src="${data.strMealThumb}"
                        alt="Picture of ${data.strMeal}">
                </button>
                <div class="display-flex
                    flex-column-reverse justify-content-around flex-center fit-content-width">
                    <h3 class=" card-Recipie-Day-Text | font-family-Popp
                        font-style-normal font-weight-500 font-size-28
                        font-line-height-42 text-center">
                        ${data.strMeal}
                    </h3>
                    <button class="display-flex fit-content-width  bg-primary-tomatogreen 
                        text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-300 font-size-16" onclick="getRecipe(${data.idMeal})">
                        recipie of the day
                    </button>
                </div>
            </article>`;
		//recipesGoInDiv.appendChild(adding_recipe);
	});
}

function recipesHTML(recipesDIV, recipes) {
	console.log("Enla funcion recipesHTML:", recipesDIV, ":", recipes);
	const recipesGoInDiv = document.getElementById(recipesDIV);
	//recipesGoInDiv.innerHTML = ""; //Clean element Before Filling
	recipes.forEach((data) => {
		//const adding_recipe = document.createElement("div");
		//adding_recipe.innerHTML =
		recipesGoInDiv.innerHTML += `
        <article id="${data.idMeal}"
            class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">
            <button class="padding-none overflow-hidden border-radius-10px" 
            onclick="getRecipe(${data.idMeal})">
                <img class="imgCard" src="${data.strMealThumb}">
            </button>
            <h4>${data.strMeal}</h4>
            <button class="card-Btn | bg-primary-tomatogreen 
                width-100 padding-200 position-absolute text-decoration-none 
                .font-family-Popp  font-size-24 text-neutral-lightpink text-center"
                onclick="getRecipe(${data.idMeal})">
            View recipie
            </button>
    </article>`;
		//recipesGoInDiv.appendChild(adding_recipe);
	});
}

function printIngredient(data) {
	let result = "";
	[...Array(21).keys()].forEach(function (valor, indice) {
		if (`strIngredient${indice}` in data) {
			result += `<figure>
                <button class="text-none text-neutral-matteblack"             onclick="getFilteredList(9,'${
									data["strIngredient" + indice]
								}')" >
                    <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${
				data["strIngredient" + indice]
			}.png" alt="${
				data["strIngredient" + indice]
			}" style="width: 81px; height:81px; object-fit: cover"> 
                </button>
                <p>{indice} ${data["strMeasure" + indice]}&nbsp;${
				data["strIngredient" + indice]
			}</p>
            </figure>`;
		}
	});
	return result;
}

//Format a One Recipe
function recipesXLHTML(recipesDIV, therecipe) {
	console.log("Dentro de la funcion una recipeXLHTML:", therecipe);
	const recipeGoesinDIV = document.getElementById(recipesDIV);
	recipeGoesinDIV.innerHTML = ""; //Clean element Before Filling
	therecipe.forEach((data) => {
		const adding_recipe = document.createElement("div");
		adding_recipe.innerHTML =
			`
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
                            <a href="${data.strYoutube}">${data.strMeal}Video</a>` +
			printIngredient(data) +
			`</div>
            </div>
        </div>`;
		recipeGoesinDIV.appendChild(adding_recipe);
	});
}

//render a categories information that came in a meals OBJ.
//You can decide no using the former one and keeping this ones for simplicity purposes.
//This funciton does not work for Categoris OBJ types.
//And does not render description property as it is not returned in its API reponse. Rememeber the API respones for this 2 functions are different.
function listsAllCategoriesHTML(listsDIV, lists) {
	console.log("Enla funcion listsALLCAtegoriesHTML:", listsDIV, ":", lists);

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
}

//List all the areas or countries related to the recipes in the API
// export function listsAllAreasHTML
function listsAllAreaHTML(listsDIV, lists) {
	console.log("Enla funcion listsALLArea:", listsDIV, ":", lists);
	const listsGoInDiv = document.getElementById(listsDIV);
	listsGoInDiv.innerHTML = ""; //Clean element Before Filling
	lists.forEach((data) => {
		const addingList = document.createElement("div");
		listsGoInDiv.innerHTML += `<article id="${data.strArea}" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100" >
          <div class="flag-Container | overflow-hidden">
            <img 
            src="/src/assets/Flags/${data.strArea}.png" 
            alt="The ${data.strArea} Flag" onclick="getFilteredList(7,'${data.strArea}')">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;"
            onclick="getFilteredList(7,'${data.strArea}')">${data.strArea}</button>
        </a>
        </article>`;
		listsGoInDiv.appendChild(addingList);
	});
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

async function getFilteredList(filterIndex, param) {
	try {
		const filteredResponse = await getAPIResponse(filterIndex, param);
		console.log("filteredSearch:", filteredResponse);
		console.log(
			"Registros de filteredResponse:(",
			filteredResponse.meals.length,
			"):\n",
			filteredResponse.meals
		);

		// function getDisplayAreaxIndex(index){
		let listfilteredResponseDIV = "listfilteredResponse"; //Limpiar el Area de desplegar
		switch (filterIndex) {
			case 7:
				{
					listfilteredResponseDIV = `${listfilteredResponseDIV}Area`;
					console.log(
						"listfilteredResponseDIVCountry",
						listfilteredResponseDIV
					);
					// return listfilteredResponseDIV;
				}
				break;
			case 8:
				{
					listfilteredResponseDIV = `${listfilteredResponseDIV}Category`;
					console.log("listfilteredResponseDIVCat", listfilteredResponseDIV);
				}
				break;
			case 9:
				{
					listfilteredResponseDIV = `${listfilteredResponseDIV}Ingredient`;
					console.log("listfilteredResponseDIVIng", listfilteredResponseDIV);
				} //Falta el caso 10 Multiingrediente
				break;
			default:
				break;
		}
		recipesShortHTML(listfilteredResponseDIV, filteredResponse.meals);
	} catch {
		console.error("Llamada a la API fallida", err.msj);
		console.log("DEmosle Otra OPCION nada 404 Dead END");
		console.log("Encadenar uan random o un boton recargar");
	}
}

window.onload = async function () {
	try {
		await Promise.all([
			getGeneral(1),
			getGeneral(3),
			getGeneral(4),
			getGeneral(5),
			getGeneral(14),
		]); //,getGeneral(2),getGeneral(6)
	} catch (error) {
		console.error("Promise.all Error on window.onload", error);
	}
};

async function getAPIResponse(apiIndex, params = "") {
	try {
		// console.log("A ver los params");
		let url = !params
			? `${search_URL}${apiSelected[apiIndex].url}`
			: `${search_URL}${apiSelected[apiIndex].url}${params}`;

		console.log("URL a llamar", url);
		const response = await fetch(url);
		const data = await response.json();

		if (data.meals) {
			console.log("apiIndex:", apiIndex);
			data.meals.map(function (obj) {
				//Borrar indices que están de más
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
			console.log("filterInvalid:", url, " : ", data.meals);
		}

		return data;
	} catch (error) {
		console.log(error);
	}
}

// get recipie by id
async function getRecipe(id) {
	try {
		const response = await getAPIResponse(11, id);
		console.log("getRecipe", response);
		return response;
	} catch (error) {
		console.log(error);
	}
}
window.getRecipe = getRecipe; //Export to global

async function getGeneral(Index, layout = "") {
	const recipe = await getAPIResponse(Index);

	layout = !layout ? apiSelected[Index].layout : layout; ///
	let datos = recipe[apiSelected[Index].tipo];

	if (apiSelected[Index].sesion === true) {
		///En caso de definir que se almacene en sesión
		if (sessionStorage.getItem(apiSelected[Index].layout)) {
			///Obtener datos de sesión
			datos = JSON.parse(sessionStorage.getItem(apiSelected[Index].layout))[
				apiSelected[Index].tipo
			];
		} else {
			sessionStorage.setItem(layout, JSON.stringify(recipe)); ///Guardar en sesión, con nombre del layout para mayor referencia
		}
	}
	//console.log("layout", layout);
	switch (Index) {
		case 1: //case 14:
			recipesHTML(layout, datos);
			break;
		case 2: //Categorías
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
		case 14:
			randomRecipeHTML(layout, datos);
			break;
		default:
			break;
	}
}

document.getElementById("randomButton").onclick = async function () {
	// const recipe = await getARandomRecipe();
	const recipe = await getAPIResponse(0);
	console.log("getARandomRecipe:", recipe);
	console.log("getARandomRecipe:(", recipe.meals.length, "):", recipe.meals);
	recipesXLHTML("randomRecipe", recipe.meals);

	//console.log(recipe);
	///Guardar en sesión
	sessionStorage.setItem("randomRecipe", JSON.stringify(recipe));
	//console.log(sessionStorage.getItem("randomRecipe"));
};

//document.getElementById("SearchBar").oninput =async function(){
document.getElementById("searchButton").onclick = async function () {
	//Que prefieren usar el Searchbutton o el searchTextBox
	const searchterm = document.getElementById("searchInputTxtBox");
	console.log(searchterm.value);
	const recipe = await getAPIResponse(13, searchterm.value);
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
		recipesHTML("results", recipe.meals);
	} else {
		/*const recipesGoInDiv = document.getElementById("results");
       
        while(recipesGoInDiv.firstChild) { ///Limpiar div en lugar de usar innerHTML    
            recipesGoInDiv.removeChild(recipesGoInDiv.firstChild);
        }*/
		document.getElementById("results").innerHTML =
			"<h3>No existen resultados con esos parámetros de búsqueda.</h3>";
	}
}; //End of funciton getSearchBox();
