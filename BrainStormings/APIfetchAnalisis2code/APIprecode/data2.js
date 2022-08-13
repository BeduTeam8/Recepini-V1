let data_json=[];

function callMealDBAPI(url,callType){
    fetch(url, { method: callType })
    .then(function(response) {
        return response.json()  
    })
    .then(function(data) {
        console.log(data);

        // let jsonHTML="";//Elementop que carga el html en el punto indicado
        let jsonHTML=`${'<p>Busqueda empleada: '+url+'</p>'}`;
        //Codigo para ver que llega se puede borrar despues.
        //Esto hace log en consola
        // console.log('Object.keys(data):'+Object.keys(data)+' Object.values(data): '+Object.values(data));
        let index='categories'; //permite elegir el objeto y usar parte del codigo original. Antes se tenian que tener dos copias del mismo programa que se usaba en dos diferentes grupos de resultados: 13 busquedas que regresaban un obj meals y 1 que regresa un obj categories.
        // console.log('Object.keys(data):'+Object.keys(data[index])+' Object.values(data): '+Object.values(data[index]));

        let datajson=Object.values(data);
        let size = Object.values(data).length;
                    
        let vartext='';
             for (let i = 0; i < data[index].length; i++) {
             //El string que getElementbyId despiega en el Id de HTML indicado.            
                vartext+=`${'<div class="cardContainer"><div class="cardImgContainer">'+'data.categories: '+data[index][i].idCategory +'<a class="linkCard" href=https://www.themealdb.com/api/json/v1/1/filter.php?c='+data[index][i].strCategory +'><img class="imgCard" src='+data[index][i].strCategoryThumb+'></a></div><h3>'+data[index][i].strCategory+'</h3><div class="textCartContainer"> <p>'+data[index][i].strCategoryDescription+'</p> </div></div>'}`;

                //Solo hade log en la consola para ver que es cada dato
            // console.log( vartext);
            // console.log('data.categories: ',
            // data[index][i].idCategory,
            // data[index][i].strCategory,
            // data[index][i].strCategoryDescription,
            // data[index][i].strCategoryThumb);
            }
        // document.getElementById('json').innerHTML = jsonHTML;
        document.getElementById('json').innerHTML = jsonHTML+vartext
    })
    .catch(function(error) {
        console.log(error)
    })
}

//variables
let callType='GET';

// let searchxMealName='https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
// let searchxMealName='https://www.themealdb.com/api/json/v2/9973533/search.php?s=Arrabiata';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchxMealName, callType));
// callMealDBAPI(searchxMealName, callType);

// let listAllMealsx1stLetter='https://www.themealdb.com/api/json/v1/1/search.php?f=k';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(listAllMealsx1stLetter,callType));

// ###
// # Lookup full meal details by id
// let searchMealxId='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchMealxId,callType));

// ###
// # Lookup a single random meal
// let searchSingleRandomMeal='https://www.themealdb.com/api/json/v1/1/random.php';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchSingleRandomMeal,callType));

// ###
// # Lookup a selection of 10 random meals (only available to $2+ Paypal supporters)
// let search10RandomMeals='https://www.themealdb.com/api/json/v2/9973533/randomselection.php';

//.meals uncomment. Es un Obj: meals
//No se prueba hasta comprar API
// console.log(callMealDBAPI(search10RandomMeals,callType));

// ###
// # List all meal categories
let searchAllMealCats='https://www.themealdb.com/api/json/v1/1/categories.php';

//.categories uncomment. Es un OBJ: CATEGORIES
console.log(callMealDBAPI(searchAllMealCats,callType));

// // ###
// // # Latest Meals (only available to $2+ Paypal supporters)

// let searchLatestMeal='https://www.themealdb.com/api/json/v2/9973533/latest.php';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchLatestMeal,callType));

// // ###
// // # List all Categories, Area, Ingredients
// let searchAllCats='https://www.themealdb.com/api/json/v1/1/list.php?c=list';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllCats,callType));
// // ###

// let searchAllAreas='https://www.themealdb.com/api/json/v1/1/list.php?a=list';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllAreas,callType));

// // ###
// let searchAllIngredients='https://www.themealdb.com/api/json/v1/1/list.php?i=list';
// //Los ID de ingrediente no son consecutivos algunos se saltan
// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllIngredients,callType));

// // ###
// // # Filter by main ingredient
// let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
// // let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken';
// // let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=garlic';

// //.meals uncomment. Es un Obj: meals
// // callMealDBAPI(searchxMainIngredient,callType);
// // console.log(callMealDBAPI(searchxMainIngredient,callType));


// // ###
// // # Filter by multi-ingredient (only available to $2+ Paypal supporters)
// let searchxMultiIngredient='https://www.themealdb.com/api/json/v2/9973533/filter.php?i=garlic,salt';

// //.meals uncomment. Es un Obj: meals
// //Hasta que se pague la API mientras es un null
// // console.log(callMealDBAPI(searchxMultiIngredient,callType));

// // ###
// // # Filter by Category
// let searchxCat='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchxCat,callType));

// // ###
// // # Filter by Area

// let searchxArea='https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

// //.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchxArea,callType));

// // # Images
// // # Meal Thumbnail Images

// // ###
// // # Add /preview to the end of the meal image URL
// let getUrlPreview='https://www.themealdb.com//images/media/meals/llcbn01574260722.jpg/preview';

// // ###
// // # Ingredient Thumbnail Images
// let getUrlImage='https://www.themealdb.com/images/ingredients/Lime.png';

// // ###getUrlSmallImage
// let getThumbnailImageUrl='https://www.themealdb.com/images/ingredients/Lime-Small.png';

// //============================================================
// //No Funciona lo que sigue a fetched porque es otro tipo de obj
// // Son imagenes
// // console.log(callMealDBAPI(getUrlPreview,callType));

// // console.log('getUrlImage');
// // console.log(callMealDBAPI(getUrlImage,callType));

// // console.log('getUrlSmallImage');
// // console.log(callMealDBAPI(getThumbnailImageUrl,callType));



