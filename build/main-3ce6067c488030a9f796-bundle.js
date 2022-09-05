(()=>{const e="https://themealdb.com",t=`${e}/api/json/v2/9973533/`,n=[{url:"random.php",tipo:"meals",layout:"recipeArea",sesion:!1,name:"0. Receta Sorpresa"},{url:"randomselection.php",tipo:"meals",layout:"rnd10Recipes",sesion:!0,nombre:"1. 1-10 random recipes"},{url:"categories.php",tipo:"categories",layout:"listCategories",sesion:!0,nombre:"2. Categorías"},{url:"latest.php",tipo:"meals",layout:"latestRecipe",sesion:!0,nombre:"3. Latest 10"},{url:"list.php?a=list",tipo:"meals",layout:"listAllAreas",sesion:!0,nombre:"4. Áreas"},{url:"list.php?c=list",tipo:"meals",layout:"listAllCategories",sesion:!0,nombre:"5. Categorías"},{url:"list.php?i=list",tipo:"meals",layout:"listAllIngredients",sesion:!0,nombre:"6. Ingredientes"},{url:"filter.php?a=",tipo:"meals",layout:"results",sesion:!1,nombre:"7. Búsqueda por área"},{url:"filter.php?c=",tipo:"meals",layout:"results",sesion:!1,nombre:"8. Búsqueda por categoría"},{url:"filter.php?i=",tipo:"meals",layout:"ingredientsResults",sesion:!1,name:"9. Búsqueda por ingrediente 1"},{url:"filter.php?i=",tipo:"meals",layout:"ingredientsResults",sesion:!1,nombre:"10. Búsqueda multingredientes"},{url:"lookup.php?i=",tipo:"meals",layout:"recipeArea",sesion:!1,name:"11. Búsqueda por Id"},{url:"search.php?f=",tipo:"meals",layout:"alfabetico",sesion:!1,nombre:"12. Búsqueda por primera letra"},{url:"search.php?s=",tipo:"meals",layout:"results",sesion:!1,nombre:"13. Búsqueda por palabra o letras en receta"},{url:"random.php",tipo:"meals",layout:"recipeDay",sesion:!0,nombre:"14. Receta del día"}];function o(e,t){console.log("DENTRO de recipesHTML:id=",e," : ",t);const n=`We found ${t.length} related recipies.`;console.log(n),"ingredientsResults"===e?document.getElementById("RelatedByIngredient").textContent=`We got ${t.length} related dishes`:"latestRecipe"===e||(document.getElementById("numberResults").textContent=`We found ${t.length} results for your search`);const o=document.getElementById(e);o.innerHTML="",t.forEach((t=>{o.innerHTML+=`<article id="${t.idMeal}"\n            class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">\n            <button class="overflow-hidden border-radius-10px   "onclick="getRecipe(${t.idMeal})">\n                <img class="imgCard" src="${t.strMealThumb}">\n            </button>\n            <h4>${t.strMeal}</h4>\n            <button\n                class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getRecipe(${t.idMeal})">\n                View recipie \n            </button>\n        </article>`,console.log("Termina recipesHTML en IdLayout:",e)}))}function s(t,n){console.log("Dentro de la funcion una XLHTMLrecipe:",n);const o=document.getElementById(t);o.innerHTML="",n.forEach((n=>{o.innerHTML=`<section style="margin: 40px;" id="recipe">\n    <div id="${n.idMeal}">\n    \x3c!-- ==========================RECIPE TITLE id AREA =============================================start --\x3e\n    <h1 class="text-primary-tomatogreen font-family-Vida\n\n    font-style-normal font-weight-400 font-size-64\n    font-line-height-78 display-flex justify-content-center text-center" id="recipeTitle">${n.strMeal}</h1>\n    \x3c!-- ==========================RECIPE TITLE id AREA ================================================eND --\x3e\n    </div>\n\n    \x3c!-- Etiquetas suspendidas --\x3e\n    \x3c!--EVALUANDO NO USARLAS TEMPORALMENTE--\x3e\n    \x3c!-- <div class="container display-flex flex-row flex-gap justify-content-center">\n    <button\n    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">\n    Casserole</button>\n\n    <button\n    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">\n    Cheasy</button>  \n    \n    <button\n    class="button-primary-outline border-color-primary-tomatored text-primary-tomatored border-radius-45px">\n    Meat</button>      \n        </div> --\x3e\n\n    </section>\n    \x3c!-- Recipe ingredients and recipe image --\x3e\n    <section class="display-flex flex-column-reverse flex-gap justify-content-center recipe-ingredients">\n    <aside class="text-center">\n    <h3 class="text-primary-tomatored font-family-Popp\n        font-style-normal font-weight-500 font-size-28\n        font-line-height-42" style="margin: 20px">Recipe ingredients</h3>\n        \x3c!--ESTA SECCION DE LA IMAGEN NO IB A AQUI INICIALMENTE. \n        lA CAMBIE PORQUE NO RESPONDIA AL css Y CARGABA LA IMAGEN A LA IZQ--\x3e\n            \x3c!-- Recipe image --\x3e\n        <article>\n            <img src="${n.strMealThumb}" alt="Foto of ${n.strMeal}" class="recipe-image">\n        </article>\n        <br>\x3c!--ESTE BR fRANK LO INSERTO, PORQUE NO HABIA ESPACION ENTRE FOTO E INGREDIENTES--\x3e\n        \x3c!--HASTA AQUI NO ESTABA AQUI DE LA IMAGEN DE LA RECETA  --\x3e\n    <section class="text-center text-neutral-matteblack  font-family-Popp\n    font-style-normal font-weight-275 font-size-20 font-line-height-30" \n    style="display: grid; grid-template-columns: repeat(4, auto); \n    grid-template-rows: repeat(2, auto); column-gap: 16.3px; \n    row-gap: 1px; justify-items: center;" id="recipeIngredients">\n        \x3c!-- ==========================RECIPE INGREDIENTS id AREA ===================================== --\x3e\n        `+function(t){let n="";return[...Array(21).keys()].forEach((function(o,s){`strIngredient${s}`in t&&(n+=`\x3c!--ESTE ERA UN ANCHOR y lo CAMBIE POR UN DIV o Button\n            //  <a href="ingredient.html"--\x3e\n                <div class="text-none text-neutral-matteblack">\n                    <figure>\n                        <img src="${e}/images/ingredients/${t["strIngredient"+s]}.png" alt="${t["strIngredient"+s]}" style="width: 81px; height:81px; object-fit: cover" onclick="getFilteredList(9,'${t["strIngredient"+s]}')">\n                        <p>${s} ${t["strMeasure"+s]}&nbsp;${t["strIngredient"+s]}</p>\n                    </figure>\n                </div>`)})),console.log("Termina printIngredient"),n}(n)+`</section>\n\n</aside>\n\x3c!--Aqui iba el tag Article con la imegen, pero no respondia a las etiquetas y estaba cargado a la izQ--\x3e\n</section>\n\x3c!-- Recipe instructions --\x3e\n<section class="display-flex flex-column align-items-center" style="width: 55%; margin: 20px auto">\n<h3 class="text-primary-tomatored font-family-Popp font-style-normal font-weight-600 font-size-32\nfont-line-height-48 text-center">Recipe instructions</h3>\n<ol class="text-neutral-matteblack  font-family-Popp\nfont-style-normal font-weight-400 font-size-16\nfont-line-height-24">\n  ${n.strInstructions}\n</ol>\n</section>\n\x3c!-- Share --\x3e\n<section class="display-flex flex-column text-center" style="width: 40%; margin: 20px auto">\n<span class="text-primary-tomatored font-family-Popp\nfont-style-normal font-weight-600 font-size-40\nfont-line-height-60">Did you make it?</span>\n<span class="text-primary-tomatogreen font-family-Popp\nfont-style-normal font-weight-300 font-size-24\nfont-line-height-36">We would love for you to share it with us! #Recipini</span>\n</section>\n\x3c!-- Video --\x3e\n\x3c!--YOUTUBE FORZA A VERLO DESDE SU SITIO\n\x3c!--<section class="display-flex flex-column align-items-center video">\n<h3 class="text-primary-tomatored font-family-Popp\nfont-style-normal font-weight-500 font-size-28\nfont-line-height-42" style="margin: 20px">Video of how it was made!</h3>\n<iframe width="685" height="415" src=${n.strYoutube} title="YouTube video player"\n  frameborder="0"\n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen></iframe>--\x3e\n</section>`,console.log("Termina recipesXLHTML en IdLayout:",t)}))}async function i(e,o=""){try{let s=o?`${t}${n[e].url}${o}`:`${t}${n[e].url}`;console.log("URL a llamar",s),console.log("Nombre de Búsqueda: ",n[e].nombre);const i=await fetch(s),r=await i.json();return r.meals&&(console.log("apiIndex:",e),r.meals.map((function(e){[...Array(21).keys()].forEach((function(t,n){!(`strIngredient${n}`in e)||""!=e[`strIngredient${n}`]&&null!=e[`strIngredient${n}`]||(delete e[`strIngredient${n}`],delete e[`strMeasure${n}`])})),"strInstructions"in e&&(e.strInstructions="<ul><li>"+e.strInstructions.split("\r\n").join("</li><li>")+"</li></ul>")})),console.log("filterOBJ from API",":",r.meals)),r}catch(e){console.log(e)}}async function r(t,r=""){const a=await i(t,r);layout=n[t].layout;let l=a[n[t].tipo];switch(!0===n[t].sesion&&(sessionStorage.getItem(n[t].layout)?(l=JSON.parse(sessionStorage.getItem(n[t].layout))[n[t].tipo],console.log("en sesion")):sessionStorage.setItem(layout,JSON.stringify(a))),t){case 1:case 3:case 7:case 8:case 9:o(layout,l);break;case 2:categoriesHTML(layout,l);break;case 4:!function(e,t){console.log("En listAllAreaHTML String Formatting",t);const n=document.getElementById(e);n.innerHTML="",t.forEach((e=>{"Unknown"!=e.strArea&&(n.innerHTML+=`<article id="${e.strArea}" class="area-catagory ">\n                    \x3c!--ESTE ERA UN ANCHOR y lo CAMBIE POR UN DIV\n                    //       <a href="search_results.html"--\x3e\n                    <div class=" display-flex flex-column flex-gap margin-100">\n                        <div class="flag-Container | overflow-hidden">\n                            <img \n                            src="/src/assets/Flags/${e.strArea}.png" \n                            alt="The ${e.strArea} Flag" onclick="getFilteredList(7,'${e.strArea}')">\n                        </div>\n                        <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp\n                            font-style-normal font-weight-600 font-size-20\n                            fit-content-width text-center padding-300-inline text-primary-tomatored"\n                            style="border: 2px solid ;" onclick="getFilteredList(7,'${e.strArea}')">\n                            ${e.strArea}\n                        </button>\n                    </div>\n                </article>`)})),console.log("Ending listAllAreas/CountryFlags in IdLayout:",e)}(layout,l);break;case 5:!function(t,n){console.log("Enla funcion lists:",n);const o=document.getElementById(t);var s;o.innerHTML="",n.forEach((t=>{const n=document.createElement("div");n.innerHTML=`\n            <div class="card">\n                <div class="cardContainer" id="${t.strCategory}">\n                    <div class="cardImgContainer">\n                        <p>\n                            <strong>${t.strCategory} </strong>\n                        </p>\n                        <button class="linkCard" onclick="getFilteredList(8,'${t.strCategory}')">\n                            <img class="imgCard" \n                            src="${e}/images/category/${t.strCategory}.png" alt="${t.strCategory}">\n                        </button>\n            </div>`,o.appendChild(n)})),s=n.length,document.getElementById("results").innerHTML=`${s} resultados`}(layout,l);break;case 6:!function(t,n){console.log("Enla funcion lists:",n);const o=document.getElementById(t);o.innerHTML="",n.forEach((t=>{const n=document.createElement("div");n.innerHTML=`\n        <div class="card">\n            <div class="cardContainer" id="${t.idIngredient}">\n                <div class="cardImgContainer">\n                data.meals:\n                    <p>\n                        <strong>${t.strIngredient}</strong>\n                    </p>\n                    <button class="linkCard" onclick="getFilteredList(9,'${t.strIngredient}')">\n                        <img class="imgCard" src="${e}/images/ingredients/${t.strIngredient}.png" alt="${t.strIngredient}">\n                    </button>\n                    </div>\n            </div>\n            <div class="cardTextContainer">${t.strDescription}</div>\n        </div>`,o.appendChild(n)}))}(layout,l);break;case 11:s(layout,l);break;case 14:!function(e,t){console.log("Formateando String en randomRecipeHTML:",t);const n=document.getElementById(e);n.innerHTML="",t.forEach((t=>{n.innerHTML+=`<article id="${t.idMeal}"\n        class="card-Recipie-Day | display-flex flex-gap overflow-hidden position-relative border-radius-10px padding-300-vertical padding-600-inline margin-500">\n        <div class="redBar"></div>\n        <button class="imgContainer | border-radius-12px" onclick="getRecipe(${t.idMeal})">                \n          <img src="${t.strMealThumb}" alt="Picture of ${t.strMeal}">\n         </button>\n        <div class="display-flex flex-column-reverse    justify-content-around flex-center">\n          <h3 class=" card-Recipie-Day-Text | font-family-Popp\n            font-style-normal font-weight-500 font-size-28\n            font-line-height-42 text-center">\n            ${t.strMeal}\n          </h3>\n          <button\n            class="bg-primary-tomatogreen text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-600 font-size-16" onclick="getRecipe(${t.idMeal})">\n            Recipie of the day\n          </button>\n        </div>\n      </article>`,console.log("Termina randomHTML en idLayout:",e)}))}(layout,l)}}function a(e){document.querySelectorAll(".displayAreas").forEach((function(t){e.includes(t.id)?t.style.display="block":t.style.display="none"}))}function l(){document.getElementById("SearchBar1").style.display="block"}window.onload=async function(){try{await Promise.all([r(3),r(4),r(14)])}catch(e){console.error("Promise.all Error on window.onload",e)}},document.getElementById("randomButton").onclick=async function(){const e=await i(0);s("recipeArea",e.meals),sessionStorage.setItem("randomRecipe",JSON.stringify(e))},document.getElementById("searchBar2").oninput=async function(){const e=document.getElementById("searchBar2");if(console.log("searchterm.length",e.value.length),e.value.length>2){const t=await i(13,e.value);let n=t.meals;sessionStorage.setItem("searchterm",e.value),console.log("searchterm",sessionStorage.getItem("searchterm")),console.log("resultterm",sessionStorage.getItem("resultterm")),sessionStorage.setItem("resultterm",JSON.stringify(t)),"meals"in t&&t.meals?(console.log("Buscando receta(",e.value,"): ",t),console.log("Receta x Terminos: ",e.value,":#(",t.meals.length,"):\n",t.meals),o("results",n)):document.getElementById("results").innerHTML="<h3>No existen resultados con esos parámetros de búsqueda.</h3>"}else sessionStorage.setItem("searchterm",""),sessionStorage.setItem("resultterm","")},document.addEventListener("keypress",(function(e){if(13===e.keyCode||13===e.which)return e.preventDefault(),document.getElementById("searchInputBar2").value="",document.getElementById("results").innerHTML="",sessionStorage.setItem("searchterm",""),sessionStorage.setItem("resultterm",""),!1}));const c=document.querySelector(".preloader-wrapper");function d(e){c.classList.remove("fade-out-animation"),setTimeout((function(){switch(e){case 1:default:a(["indexArea"]),l();break;case 2:a(["resultsArea"]),console.log(document.getElementById("SearchBar1")),document.getElementById("SearchBar1").style.display="none";break;case 3:a(["recipeArea"]),l();break;case 4:a(["ingredientsArea"]),l();break;case 5:a(["aboutUSArea"]),l()}c.classList.add("fade-out-animation")}),300)}d(1),window.addEventListener("load",(function(){c.classList.add("fade-out-animation")})),document.getElementById("indexMenu").addEventListener("click",(()=>{d(1)})),document.getElementById("aboutMenu").addEventListener("click",(()=>{d(5)})),document.getElementById("searchMenu").addEventListener("click",(()=>{d(2)})),document.getElementById("SearchBar1").addEventListener("mousedown",(()=>{d(2)}))})();