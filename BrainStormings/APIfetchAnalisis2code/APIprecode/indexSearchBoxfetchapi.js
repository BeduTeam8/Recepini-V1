//function callAPI()
//Es llamada desde el DOM del html al presionar el boton Search
//toma los parametros del DOM y manda una busqueda
function callAPI(){
    let searchterm=document.getElementById('searchInputTxtBox');
    console.log(searchterm.value);
    let url='https://www.themealdb.com/api/json/v1/1/';
    let searchxMealName='search.php?s=';
    let urlString=url+searchxMealName+searchterm.value;
    console.log(urlString);
    callMealDBAPI(urlString,callType,1);
}//End of funciton callAPI();


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
            '<div class="card">'+
                '<div class="cardContainer">'
                    +'<div class="cardImgContainer">'
                        +'data.categories: '+category.idCategory 
                        +'<button class="linkCard" onclick="callMealDBAPI(\'https://www.themealdb.com/api/json/v1/1/filter.php?c='+ category.strCategory+'\',callType,1)">'
                            +'<img class="imgCard" src="'+category.strCategoryThumb+'/preview">'
                        +'</button>'
                    +'</div>'
                    +'<h3>'+category.strCategory+'</h3>'
                    +'<div class="textCartContainer">'
                        +'<p>'+category.strCategoryDescription+'</p>'
                    +'</div>'
                +'</div>'
            +'</div>'}`;
    });
}

function mealHTML(dataMeal){
    return dataMeal.map(function(data){
        meal = new Meal(data);
        return `${
            '<div class="card">'+
                '<div class="cardContainer">'
                    +'<div class="cardImgContainer">'
                        +'data.meals: '
                        +'<p>'+meal.strMeal+'</p>'
                        +'<button class="linkCard" onclick="callMealDBAPI(\'https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ meal.idMeal+'\',callType,1)">'
                        +'<img class="imgCard" src="'+meal.strMealThumb+'/preview">'
                        +'</button>'
                    +'</div>'
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
            document.getElementById('results').innerHTML = jsonHTML+vartextDOM;
        })
        .catch(function(error) {
            console.log(error)
        });
}

//variables
let callType='GET';
let jsonTipoEsperado=1;