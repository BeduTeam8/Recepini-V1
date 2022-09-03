//CODIGO FUSIONADO va en INDEX.HTML
//<!-- inyectar resultado de busqueda en esta secion Start -->
recipesGoInDiv.innerHTML +=
            `<article id="${data.idMeal}"
                class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">
                <button class="overflow-hidden border-radius-10px" 
                onclick="getRecipe(${data.idMeal})">
                    <img class="imgCard" src="${data.strMealThumb}">
                </button>
                <h4>${data.strMeal}</h4>
                <button href="#"
                    class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center"
                    onclick="getRecipe(${data.idMeal})">
                    View recipie </button>
            </article>`;
//CODIGO Original de API-DEVELOPER
recipesGoInDiv.innerHTML +=`
        <article id="${data.idMeal}"
            class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">
            <button class="overflow-hidden border-radius-10px" 
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






//Codigo Original DESIGNSYSTEM
//<!-- inyectar resultado de busqueda en esta secion Start -->
`<article id="recipeCard"
                class="recipieCard | display-flex flex-column flex-gap padding-300 flex-align-center overflow-hidden position-relative text-center">
                <div class="overflow-hidden border-radius-10px ">
                    <img src="https://picsum.photos/300" alt="">
                </div>
                <h4>
                    Cupcake ipsum dolor ipsum dolor
                </h4>
                <button href="#"
                    class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center">View
                    recipie </button>
            </article>`;