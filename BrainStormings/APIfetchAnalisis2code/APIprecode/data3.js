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
        

        // console.log('Object.keys(data):'+Object.keys(data['categories'])+' Object.values(data): '+Object.values(data['categories']));
        console.log('Object.keys(data):'+Object.keys(data)+' Object.values(data): '+Object.values(data));
        index='categories';
        console.log('Object.keys(data):'+Object.keys(data[index])+' Object.values(data): '+Object.values(data[index]));

        let datajson=Object.values(data);
        let size = Object.values(data).length;
        


        
        // console.log('datajson.Array: ',datajson[0][0]);//[0].idCategory,datajson.categories);
        
              
            // let size = Object.keys(data.categories).length;
        
        
        // let msj=`${'<b>Número de elementos en el OBJ(tamaño del Obj data): '+size+'</b>'}`;

        // console.log(msj);
        // jsonHTML+=msj;
        // //For el numero de meals en el objeto pasar cada uno y que los imprima en pagina
        // console.log('Antes de entrar al for que recibe el index igual al tamaño del OBJ')
        // for (let mealsObjIndex = 0; mealsObjIndex < size; mealsObjIndex++) {
        // // Este es el objeto json de un solo arrreglo que si lo paso a la funcion como esta si funciona y se imprime en console log y en  html code
        // // data_json=Object.entries(data.meals[0]);
        //     //Convierte el registro Que es un OBJ meals.[indice] a un arreglo. 
        //     // Porque Object.entries regresa un arreglo minimo bidimensional tipo [key][value]
        //     //No supe si fue la mejor opcion en el momento, pero me fui explotando asi el JSON
        //     //Probando la seleccion automatica del json sea este meals o categories con Index
        //     data_json=Object.entries(datajson[mealsObjIndex]);
        //     // data_json=Object.entries(data.categories[mealsObjIndex]);

        //     // console.log(mealsObjIndex);//marcador de fase en que indice voy del arreglo
        //     console.log('Convertido en Arreglo el OBJ:', data_json);//despliega el contenido pasado
        //     //Esto se debe borrar en cuanto la funcion jale
        //     // document.getElementById('json').innerHTML = `${data["meals"][0].idMeal}`;
        //     // data_json=JSON.stringify(data_json);
        //     // document.getElementById('json').innerHTML = data_json[0][1][1]["idMeal"];
        
        //     // for (const iterator of data_json) {
        //     //     jsonHTML+=iterator+"<br>";
        //     // }
            
        //     msj=`${'<p>El elemento['+mealsObjIndex+'] tiene una longitud de subarreglo: '+datajson.length+'</p>'}`;
        //     console.log(msj);
        //     jsonHTML+=msj;
            

            
        let vartext='';
             for (let i = 0; i < data[index].length; i++) {
                
            
                vartext+=`${'<div class="cardContainer"><div class="cardImgContainer">'+'data.categories: '+data[index][i].idCategory +'<a class="linkCard" href=https://www.themealdb.com/api/json/v1/1/filter.php?c='+data[index][i].strCategory +'><img class="imgCard" src='+data[index][i].strCategoryThumb+'></a></div><h3>'+data[index][i].strCategory+'</h3><div class="textCartContainer"> <p>'+data[index][i].strCategoryDescription+'</p> </div></div>'}`;

            console.log( vartext);
    
    
    
            console.log('data.categories: ',
            data[index][i].idCategory,
            data[index][i].strCategory,
            data[index][i].strCategoryDescription,
            data[index][i].strCategoryThumb);
            }
        // document.getElementById('json').innerHTML = jsonHTML;
        document.getElementById('json').innerHTML = jsonHTML+vartext
    })
    .catch(function(error) {
        console.log(error)
    })
}

// readData



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



