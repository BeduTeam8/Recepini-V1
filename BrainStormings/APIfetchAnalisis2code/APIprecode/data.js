let data_json=[];

function callMealDBAPI(url,callType){
    fetch(url, { method: callType })
    .then(function(response) {
        return response.json()  
    })
    .then(function(data) {
        console.log(data);
        //Marcadores usados en la aproximacion al codigo
        //Borrar si ya tenemos una funcion
        // console.log(a=1);
        // console.log(data.meals[0]);
        // console.log(a=1);
        // readData(data);
        // data_json=data;
        // data_json={...data.meals[0]};
        // console.log(a=1);
        let size = Object.keys(data.meals).length;
        console.log('tamaño del Obj data: '+size);
        let jsonHTML="";

        //For el numero de meals en el objeto pasar cada uno y que los imprima en pagina
        console.log('Vamos a entrar al for que pasa el index')
        for (let mealsObjIndex = 0; mealsObjIndex < size; mealsObjIndex++) {
        // Este es el objeto json de un solo arrreglo que si lo paso a la funcion como esta si funciona y se imprime en console log y en  html code
        // data_json=Object.entries(data.meals[0]);

            data_json=Object.entries(data.meals[mealsObjIndex]);
            console.log(mealsObjIndex);//marcador de fase en que indice voy del arreglo
            console.log(data_json);//despliega el contenido pasado
            //Esto se debe borrar en cuanto la funcion jale
            // document.getElementById('json').innerHTML = `${data["meals"][0].idMeal}`;
            // data_json=JSON.stringify(data_json);
            // document.getElementById('json').innerHTML = data_json[0][1][1]["idMeal"];
        
            // for (const iterator of data_json) {
            //     jsonHTML+=iterator+"<br>";
            // }
            
            console.log('Indice:'+mealsObjIndex+' Longitud del arreglo: '+data_json.length);
            jsonHTML+=jsonHTML+`${'<p>Indice:'+ mealsObjIndex+' Longitud del arreglo: '+data_json.length+'</p>'}`;

            for (let i = 0; i < data_json.length; i++) {
                
                console.log(data_json[i])
                jsonHTML=`${jsonHTML+'<b>'+data_json[i][0]+':</b> '+data_json[i][1]+'<br>'}`;

            }
        }   
        document.getElementById('json').innerHTML = jsonHTML;
    })
    .catch(function(error) {
        console.log(error)
    })
}

// readData



//variables
let callType='GET';
let searchxMealName='https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

let listAllMealsx1stLetter='https://www.themealdb.com/api/json/v1/1/search.php?f=a';

// ###
// # Lookup full meal details by id
let searchMealxId='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

// ###
// # Lookup a single random meal
let searchSingleRandomMeal='https://www.themealdb.com/api/json/v1/1/random.php';

// ###
// # Lookup a selection of 10 random meals (only available to $2+ Paypal supporters)
let search10RandomMeals='https://www.themealdb.com/api/json/v1/1/randomselection.php';

// ###
// # List all meal categories
let searchAllMealCats='https://www.themealdb.com/api/json/v1/1/categories.php';

// ###
// # Latest Meals (only available to $2+ Paypal supporters)

let searchLatestMeal='https://www.themealdb.com/api/json/v1/1/latest.php';

// ###
// # List all Categories, Area, Ingredients
let searchAllCats='https://www.themealdb.com/api/json/v1/1/list.php?c=list';

// ###

let searchAllAreas='https://www.themealdb.com/api/json/v1/1/list.php?a=list';

// ###
let searchAllIngredients='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

// ###
// # Filter by main ingredient
// let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken';
// let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=garlic';

// ###
// # Filter by multi-ingredient (only available to $2+ Paypal supporters)
let searchxMultiIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt';

// ###
// # Filter by Category
let searchxCat='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// ###
// # Filter by Area

let searchxArea='https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

// # Images
// # Meal Thumbnail Images

// ###
// # Add /preview to the end of the meal image URL
let getUrlPreview='https://www.themealdb.com//images/media/meals/llcbn01574260722.jpg/preview';

// ###
// # Ingredient Thumbnail Images
let getUrlImage='https://www.themealdb.com/images/ingredients/Lime.png';

// ###getUrlSmallImage
let getThumbnailImageUrl='https://www.themealdb.com/images/ingredients/Lime-Small.png';
// let output='';

// console.log(callMealDBAPI(searchxMealName, callType));
// callMealDBAPI(searchxMealName, callType);
// console.log(meals);

console.log(callMealDBAPI(listAllMealsx1stLetter,callType));

// console.log(callMealDBAPI(searchMealxId,callType));

// console.log(callMealDBAPI(searchSingleRandomMeal,callType));

// console.log(callMealDBAPI(search10RandomMeals,callType));

// console.log(callMealDBAPI(searchAllMealCats,callType));

// console.log(callMealDBAPI(searchLatestMeal,callType));

// console.log(callMealDBAPI(searchAllAreas,callType));

// console.log(callMealDBAPI(searchAllIngredients,callType));

// console.log(callMealDBAPI(searchxMainIngredient,callType));
// callMealDBAPI(searchxMainIngredient,callType);

//document.getElementById('json').innerHTML = output;
// console.log(callMealDBAPI(searchxMultiIngredient,callType));

// console.log(callMealDBAPI(searchxCat,callType));

// console.log(callMealDBAPI(searchxArea,callType));

// console.log(callMealDBAPI(getUrlPreview,callType));

// console.log('getUrlImage');
// console.log(callMealDBAPI(getUrlImage,callType));

// console.log('getUrlSmallImage');
// console.log(callMealDBAPI(getThumbnailImageUrl,callType));
