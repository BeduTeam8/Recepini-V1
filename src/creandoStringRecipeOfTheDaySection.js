//CODIGO FUSIONADO va en INDEX.HTML
//<!-- 03.02 Random recipie fija start La idea esq esta se cambie por dia -->
//<!-- 03.02 Section recipie of the day -->
//      <div class="card-position">

//        <!-- 03.02 Random recipie fija start La idea esq esta se cambie por dia -->
        `<article id="${data.idMeal}"
          class="card-Recipie-Day | display-flex flex-gap overflow-hidden position-relative border-radius-10px padding-300-vertical padding-600-inline margin-500">
          <div class="redBar"></div>
          <button class="imgContainer | border-radius-12px " onclick="getRecipe(${data.idMeal})">
            <img
            src="${data.strMealThumb}"
              class="imgCard" alt="Picture ${data.strMeal}">
          </button>
          <div class="display-flex flex-column-reverse justify-content-around flex-center">
            <h3 class=" card-Recipie-Day-Text | font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42 text-center">${data.strMeal}</h3>
            <button
              class="bg-primary-tomatogreen text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-600 font-size-16" 
              onclick="getRecipe(${data.idMeal})">
                recipie of the
              day</button>
          </div>
        </article>`;
//        <!-- 03.02 Random recipie fija End  -->
//      </div>
//CODIGO Original de API-DEVELOPER
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
                            <img class="imgCard" src="${data.strMealThumb}">
                        </button>
                    </div>
                </div>
            </div>`;
    recipesGoInDiv.appendChild(adding_recipe);

//Codigo Original DESIGNSYSTEM
//      <!-- 03.02 Section recipie of the day -->
//      <div class="card-position">

//        <!-- 03.02 Random recipie fija start La idea esq esta se cambie por dia -->
        `<article
          class="card-Recipie-Day | display-flex flex-gap overflow-hidden position-relative border-radius-10px padding-300-vertical padding-600-inline margin-500">
          <div class="redBar"></div>
          <div class="imgContainer | border-radius-12px ">
            <img
              src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              class="" alt="">
          </div>
          <div class="display-flex flex-column-reverse justify-content-around flex-center">
            <h3 class=" card-Recipie-Day-Text | font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42 text-center">Cupcake ipsum dolor</h3>
            <button
              class="bg-primary-tomatogreen text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-600 font-size-16">recipie
              of the
              day</button>
          </div>
        </article>`;
//        <!-- 03.02 Random recipie fija End  -->
//      </div>