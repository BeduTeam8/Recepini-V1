//let data_json=[];
//function callMealDBAPI(url,callType,jsonTipoEsperado)
//recibe 3 argumentos:
//url:'String' con el URL al que llama la API
//callType='String' GET,etc se deja en caso de tener que usar la 
//  funcion para llamadas de otro tipo. 
//  (Por el momento se deja en GET)
//
//jsonTipoEsperado:Entero que sirve para elegir entre dos estructuras. 
//  El Json regresado solo puede ser de dos tipos:
//  1)OBJ tipo meals
//  2)OBJ tipo Categories.
//  El primero se recibe en todas la llamadas al API, 
//  exceptuando la de categories.php
//  
//  jsonTipoEsperado=0; Selecciona el OBJ Cateagorias
//  jsonTipoEsperado=1; Debiera ser el Default que Selecciona
//       el OBJ meals, ademas imprime campos de una busqueda de recetas.
//
const JSONTipo = { 0:'categories', 1:'meals' }; ///Definimos los diferentes tipos de estructuras que puede retornar la API

function Category(category) {
    this.idCategory = category.idCategory;
    this.strCategory = category.strCategory;
    this.strCategoryDescription = category.strCategoryDescription;
    this.strCategoryThumb = category.strCategoryThumb;
}

function Meal(meal) {
    this.idMeal = meal.idMeal;
    this.strMeal = meal.strMeal;
    this.strMealThumb = meal.strMealThumb;
}

function categoryHTML(dataCategory){
    return dataCategory.map(function(data){
        category = new Category(data);
        return `${
            '<div class="cardContainer">'
                +'<div class="cardImgContainer">'
                    +'data.categories: '+category.idCategory 
                    +'<button class="linkCard" onclick="callMealDBAPI(\'https://www.themealdb.com/api/json/v1/1/filter.php?c='+ category.strCategory+'\',callType,1)">'
                        +'<img class="imgCard" src="'+category.strCategoryThumb+'">'
                    +'</button>'
                +'</div>'
                +'<h3>'+category.strCategory+'</h3>'
                +'<div class="textCartContainer">'
                    +'<p>'+category.strCategoryDescription+'</p>'
                    +'</div>'
                +'</div>'}`;
    });
}

function mealHTML(dataMeal){
    return dataMeal.map(function(data){
        meal = new Meal(data);
        return `${
            '<div class="cardContainer">'
                +'<div class="cardImgContainer">'
                    +'data.meals: '
                    +'<p>'+meal.strMeal+'</p>'
                    +'<img class="imgCard" src="'+meal.strMealThumb+'">'
                    +'</div>'
                +'</div>'}`;
    });
}

function callMealDBAPI(url, callType, jsonTipoEsperado = 1){
    fetch(url, { method: callType })
        .then(function(response) {
            return response.json()  
        })
        .then(function(data) {
            console.log(data);

            // let jsonHTML="";//Elementop que carga el html en el punto indicado
            let jsonHTML=`${'<h2>Busqueda empleada: '+url+'</h2>'}`;
            //Codigo para ver que llega se puede borrar despues.
            //Esto hace log Por separado presenta los dos arreglos de jey y values
            // console.log('Object.keys(data):'+Object.keys(data)+' Object.values(data): '+Object.values(data));
            //El Json regresado solo puede ser de dos tipos:OBJ tipo meals u OBJ tipo Categories.
            //El primero se recibe en todas la llamadas al API exceptuando la de Categories.
            
            /*let index='meals'
            if (jsonTipoEsperado===0){
                index='categories'; //permite elegir el objeto y usar parte del codigo original. Antes se tenian que tener dos copias del mismo programa que se usaba en dos diferentes grupos de resultados: 13 busquedas que regresaban un obj meals y 1 que regresa un obj categories.
            }*/

            console.log(JSONTipo[jsonTipoEsperado]);
            console.log('Que tipo de objeto estoy recibiendo: meals o Categories:', jsonTipoEsperado);
            jsonHTML+=`${'<h3>OBJ recibido de tipo:'+jsonTipoEsperado+'</h3>'}`;
            
            // console.log('Object.keys(data):'+Object.keys(data[index])+' Object.values(data): '+Object.values(data[index]));

            let vartextDOM='';//Inicializo la variable para el DOM

            if (jsonTipoEsperado===0){
                vartextDOM += categoryHTML(data[JSONTipo[jsonTipoEsperado]]);
            } else {
                vartextDOM += mealHTML(data[JSONTipo[jsonTipoEsperado]]);
            }
            
            /*for (let i = 0; i < data[JSONTipo[jsonTipoEsperado]].length; i++) {
                //Coloca en el log los datos de este Json 1 despues del otro separado por coma.
                //Pude haber usado object.values para hacerlo, pero en la siguiente linea
                //Asi los agrego al text formateado
                if (jsonTipoEsperado===0){

                    //ESTE CODIGO SOLO sirve para el JSON de: List all meal categories
                    console.log('data.categories: ',
                        data[JSONTipo[jsonTipoEsperado]][i].idCategory,
                        data[JSONTipo[jsonTipoEsperado]][i].strCategory,
                        data[JSONTipo[jsonTipoEsperado]][i].strCategoryDescription,
                        data[JSONTipo[jsonTipoEsperado]][i].strCategoryThumb);   
                    //El string que getElementbyId despiega en el Id de HTML indicado.            
                    // vartextDOM+=`${
                    //     '<div class="cardContainer">'
                    //         +'<div class="cardImgContainer">'
                    //             +'data.categories: '+data[jsonTipoEsperado][i].idCategory 
                    //             +'<a class="linkCard" href=https://www.themealdb.com/api/json/v1/1/filter.php?c='+data[jsonTipoEsperado][i].strCategory +'>'
                    //                 +'<img class="imgCard" src='+data[jsonTipoEsperado][i].strCategoryThumb+'>'
                    //             +'</a>'
                    //         +'</div>'
                    //         +'<h3>'+data[jsonTipoEsperado][i].strCategory+'</h3>'
                    //         +'<div class="textCartContainer">'
                    //             +'<p>'+data[jsonTipoEsperado][i].strCategoryDescription+'</p>'
                    //             +'</div>'
                    //         +'</div>'}`;

                    //Voy a evaluar usar un button en lugar de un anchor href porque no puedo usar hrefs ya que solo tenemos de acceso la api.
                    //
                    //Listo  funciona llamanda la lista categories con un BUTTON, 
                    // JESUS, quiza esto te sirva?
                    // Puedes ver data.js con un boton al final de la busqueda
                    //let urlInAButton="\'https://www.themealdb.com/api/json/v1/1/filter.php?c="+ data[jsonTipoEsperado][i].strCategory+"\'";
                    //let onklick=`${'callMealDBAPI('+urlInAButton+',callType,1)'}`;
                    vartextDOM+=`${
                        '<div class="cardContainer">'
                            +'<div class="cardImgContainer">'
                                +'data.categories: '+data[JSONTipo[jsonTipoEsperado]][i].idCategory 
                                +'<button class="linkCard" onclick="callMealDBAPI(\'https://www.themealdb.com/api/json/v1/1/filter.php?c='+ data[JSONTipo[jsonTipoEsperado]][i].strCategory+'\',callType,1)">'
                                    +'<img class="imgCard" src="'+data[JSONTipo[jsonTipoEsperado]][i].strCategoryThumb+'">'
                                +'</button>'
                            +'</div>'
                            +'<h3>'+data[JSONTipo[jsonTipoEsperado]][i].strCategory+'</h3>'
                            +'<div class="textCartContainer">'
                                +'<p>'+data[JSONTipo[jsonTipoEsperado]][i].strCategoryDescription+'</p>'
                                +'</div>'
                            +'</div>'}`;
                
                    // 
                }else {
                    //Solo hade log en la consola para ver que es cada dato            
                    console.log(vartextDOM);
                    
                    // vartextDOM=vartextDOM+`${data[jsonTipoEsperado][i]}`;
                    vartextDOM+=`${
                        '<div class="cardContainer">'
                            +'<div class="cardImgContainer">'
                                +'data.meals: '
                                +'<p>'+Object.values(data[JSONTipo[jsonTipoEsperado]][i])+'</p>'
                                +'</div>'
                            +'</div>'}`;

                    console.log(data[JSONTipo[jsonTipoEsperado]][i]);
                    console.log(vartextDOM);

                }
            // document.getElementById('json').innerHTML = jsonHTML;
            //Le paso al DOM lo que encontre en la busqueda preformateado para WEB
            }*/
            document.getElementById('json').innerHTML = jsonHTML+vartextDOM;
        })
        .catch(function(error) {
            console.log(error)
        });
}

//variables
let callType='GET';
let jsonTipoEsperado=1;

// let searchxMealName='https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
// let searchxMealName='https://www.themealdb.com/api/json/v2/9973533/search.php?s=Arrabiata';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchxMealName, callType,1));
// callMealDBAPI(searchxMealName, callType,false);

// let listAllMealsx1stLetter='https://www.themealdb.com/api/json/v1/1/search.php?f=k';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(listAllMealsx1stLetter,callType,1));

// ###
// # Lookup full meal details by id
// let searchMealxId='https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchMealxId,callType,1));

// ###
// # Lookup a single random meal
// let searchSingleRandomMeal='https://www.themealdb.com/api/json/v1/1/random.php';

//.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchSingleRandomMeal,callType,1));

// ###
// # Lookup a selection of 10 random meals (only available to $2+ Paypal supporters)
// let search10RandomMeals='https://www.themealdb.com/api/json/v2/9973533/randomselection.php';

//.meals uncomment. Es un Obj: meals
//No se prueba hasta comprar API
// console.log(callMealDBAPI(search10RandomMeals,callType,1));

// ###
// # List all meal categories
let searchAllMealCats='https://www.themealdb.com/api/json/v1/1/categories.php';
//.categories uncomment. Es un OBJ: CATEGORIES
//jsonTipoEsperado debe ser = 0 para categories
console.log(callMealDBAPI(searchAllMealCats,callType,0));

// // ###
// // # Latest Meals (only available to $2+ Paypal supporters)

// let searchLatestMeal='https://www.themealdb.com/api/json/v2/9973533/latest.php';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchLatestMeal,callType,false));

// // ###
// // # List all Categories, Area, Ingredients
// let searchAllCats='https://www.themealdb.com/api/json/v1/1/list.php?c=list';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllCats,callType,false));
// // ###

// let searchAllAreas='https://www.themealdb.com/api/json/v1/1/list.php?a=list';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllAreas,callType,false));

// // ###
// let searchAllIngredients='https://www.themealdb.com/api/json/v1/1/list.php?i=list';
// //Los ID de ingrediente no son consecutivos algunos se saltan
// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchAllIngredients,callType,false));

// // ###
// // # Filter by main ingredient
// let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';
// // let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken';
// // let searchxMainIngredient='https://www.themealdb.com/api/json/v1/1/filter.php?i=garlic';

// //.meals uncomment. Es un Obj: meals
// // callMealDBAPI(searchxMainIngredient,callType,false);
// // console.log(callMealDBAPI(searchxMainIngredient,callType,false));


// // ###
// // # Filter by multi-ingredient (only available to $2+ Paypal supporters)
// let searchxMultiIngredient='https://www.themealdb.com/api/json/v2/9973533/filter.php?i=garlic,salt';

// //.meals uncomment. Es un Obj: meals
// //Hasta que se pague la API mientras es un null
// // console.log(callMealDBAPI(searchxMultiIngredient,callType,false));

// // ###
// // # Filter by Category
// let searchxCat='https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

// //.meals uncomment. Es un Obj: meals
// // console.log(callMealDBAPI(searchxCat,callType,false));

// // ###
// // # Filter by Area

// let searchxArea='https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian';

// //.meals uncomment. Es un Obj: meals
// console.log(callMealDBAPI(searchxArea,callType,false));

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
// // console.log(callMealDBAPI(getUrlPreview,callType,false));

// // console.log('getUrlImage');
// // console.log(callMealDBAPI(getUrlImage,callType,false));

// // console.log('getUrlSmallImage');
// // console.log(callMealDBAPI(getThumbnailImageUrl,callType,false));



