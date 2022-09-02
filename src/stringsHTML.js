                    `<figure>
                        <button class="text-none text-neutral-matteblack"             onclick="getFilteredList(9,'${data['strIngredient'+indice]}')" >
                            <img class="imgCard" 
                                src="${serverURL}/images/ingredients/${data['strIngredient'+indice]}.png" alt="${data['strIngredient'+indice]}" style="width: 81px; height:81px; object-fit: cover"> 
                        </button>
                        <p>{indice} ${data['strMeasure'+indice]}&nbsp;${data['strIngredient'+indice]}</p>
                    </figure>`;

//mealcode.js =>printIngredient
result += `<div class="cardIngredient">
            <p>${indice} ${data['strMeasure'+indice]}&nbsp;${data['strIngredient'+indice]}
                <button class="linkCard" 
                    onclick="getFilteredList(9,'${data['strIngredient'+indice]}')">
                    <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data['strIngredient'+indice]}.png" alt="${data['strIngredient'+indice]}"> 
                </button>
            </p></div>
            `;

//CODIGO ORIGINAL DESYGN SYSTEM
                    <a href="ingredient.html" class="text-none text-neutral-matteblack">
                        <figure>
                            <img src="/src/assets/enchilada_sauce.png" alt=""
                                style="width: 81px; height:81px; object-fit: cover">
                            <p>Enchilada sauce</p>
                        </figure>
                    </a>
//==================================================
//===recipesXLHTML
//==================================================
//Codigo Fusionado
`<section class="display-flex flex-row flex-gap justify-content-center" style="width: 90%; margin: 50px 20px" id="${data.idMeal}">
            <aside class="text-center" style="width:45%">
                <h3 class="text-primary-tomatored font-family-Popp
                font-style-normal font-weight-500 font-size-28
                font-line-height-42" style="margin: 20px">Recipe ingredients</h3>
                <section class="text-center text-neutral-matteblack  font-family-Popp
                font-style-normal font-weight-275 font-size-20
                font-line-height-30" style="display: grid; grid-template-columns: repeat(4, auto); grid-template-rows: repeat(2, auto); 	
                column-gap: 16.3px; row-gap: 1px; justify-items: center;">
                printIngredient(data)+
                </section>
            </aside>
            <!-- Recipe image -->
            <article style="width: 45%">
                <img src="${data.strMealThumb}" alt="Picture of ${data.strMeal}" style="width: 670px; height:400px; object-fit: cover">
            </article>
        </section>
        <!-- Recipe instructions -->
        <section class="display-flex flex-column align-items-center" style="width: 55%; margin: 20px auto">
            <h3 class="text-primary-tomatored font-family-Popp font-style-normal font-weight-600 font-size-32
            font-line-height-48">Recipe instructions</h3>
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
        <section class="display-flex flex-column align-items-center" style="width: 80%; margin: 60px auto">
            <h3 class="text-primary-tomatored font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42" style="margin: 20px">Video of how it was made!</h3>
            <iframe width="685" height="415" src="${data.strYoutube}"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </section>
        `;

//CODIGO de mealscode.js recipesXLHTML
    `<div class"cardRecipe">
        <div class="cardContainer" id="${data.idMeal}">
            <div class="cardImgContainer">
                <p><strong>Id</strong>${data.idMeal}</p>
                <p><strong>Meal</strong>${data.strMeal}</p>
                <p><strong>Category</strong>${data.strCategory}</p>
                <p><strong>Country</strong>${data.strArea}</p>
                <p><strong>Intructions</strong>${data.strInstructions}</p>
                            <img class="imgCard" src="${data.strMealThumb}">
                <p><strong>Tags</strong>${data.strTags}</p>
                            <a href="${data.strYoutube}">${data.strMeal}Video</a>`+
                printIngredient(data)+
                `</div>
            </div>
        </div>`;

//ORIGINAL RECIPEHTML
`<section class="display-flex flex-row flex-gap justify-content-center" style="width: 90%; margin: 50px 20px">
            <aside class="text-center" style="width:45%">
                <h3 class="text-primary-tomatored font-family-Popp
                font-style-normal font-weight-500 font-size-28
                font-line-height-42" style="margin: 20px">Recipe ingredients</h3>
                <section class="text-center text-neutral-matteblack  font-family-Popp
                font-style-normal font-weight-275 font-size-20
                font-line-height-30" style="display: grid; grid-template-columns: repeat(4, auto); grid-template-rows: repeat(2, auto); 	
                column-gap: 16.3px; row-gap: 1px; justify-items: center;">
                <!--LLAMADA A INGREDIENTES-->
                </section>
            </aside>
            <!-- Recipe image -->
            <article style="width: 45%">
                <img src="/src/assets/recipe_example.png" alt="" style="width: 670px; height:400px; object-fit: cover">
            </article>
        </section>
        <!-- Recipe instructions -->
        <section class="display-flex flex-column align-items-center" style="width: 55%; margin: 20px auto">
            <h3 class="text-primary-tomatored font-family-Popp font-style-normal font-weight-600 font-size-32
            font-line-height-48">Recipe instructions</h3>
            <ol class="text-neutral-matteblack  font-family-Popp
            font-style-normal font-weight-400 font-size-16
            font-line-height-24">
                <li>Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.</li>
                
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
        <section class="display-flex flex-column align-items-center" style="width: 80%; margin: 60px auto">
            <h3 class="text-primary-tomatored font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42" style="margin: 20px">Video of how it was made!</h3>
            <iframe width="685" height="415" src="https://www.youtube.com/embed/wNQx34RQZtI"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </section>
        `;