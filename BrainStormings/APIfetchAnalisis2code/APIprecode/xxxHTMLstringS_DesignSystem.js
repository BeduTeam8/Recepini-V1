//String Fusionado de ambos equipos xxxShortHTML
stringhtml=`<article id="${data.idMeal}" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
    <div class="overflow-hidden border-radius-10px">
        <button class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getRecipe(${data.idMeal})">
            <img src="${data.strMealThumb}" alt="${data.strMeal}">
        </button>
    </div>
    <h4>
    <strong>${data.strMeal}</strong>
    </h4>
</article>`;

//Original de developer-api-precode_Rama:11-organizar en funciones
//xxxShortHTML
JSstringHTMLOriginal=
`<div class="card">
    <div class="cardContainer" id="${data.idMeal}">
        <div class="cardImgContainer">
            <p>
                <strong>${data.strMeal}</strong>
            </p>
            <button class="linkCard" onclick="getRecipe(
                ${data.idMeal})">
                <img class="imgCard" src="${data.strMealThumb}" alt="${data.strMeal}">>
            </button>
        </div>
    </div>
</div>`;
//ORIGINAL de DesignSystem
DesignSystemOriginal=
`<article id="recipeCard" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
    <div class="overflow-hidden border-radius-10px ">
        <img src="https://picsum.photos/200" alt="">
    </div>
    <h4>
        Cupcake ipsum dolor
    </h4>
    <p>
        Cupcake ipsum dolor sit amet cupcake caramels oat cake.
    </p>
    <a href="" class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center">View
        recipie </a>
</article>`;
//===//=============================================================
//String Fusionado para categoriesHTML
`<article id="${data.idCategory}" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
    <div class="overflow-hidden border-radius-10px ">
        <button class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getFilteredList(8,'${data.strCategory}')">
            <img src="${data.strCategoryThumb}" 
            alt="${data.strCategory}">
        </button>
    </div>
    <h4>${data.strCategory}</h4>
    <p>
        ${data.strCategoryDescription}
    </p>
</article>`;

//===
//categoriesHTML
//String original js
adding_categorie.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.idCategory}">
                <div class="cardImgContainer">
                    <p>
                        <strong>${data.strCategory}: </strong>
                    </p>
                    <button class="linkCard" onclick="getFilteredList(8,'${data.strCategory}')">
                        <img class="imgCard" src="${data.strCategoryThumb}" alt="${data.strCategory}">
                    </button>
                 </div>
                 <div class="cardDescription">${data.strCategoryDescription}</div>
            </div>
        </div>`;
//===//=============================================================
//String Fusionado para listAllCategoriesHTML
`<article id="${data.strCategory}" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
    <div class="overflow-hidden border-radius-10px ">
        <button class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getFilteredList(8,'${data.strCategory}')">
            <img 
            src="${serverURL}/images/category/${data.strCategory}.png" alt="${data.strCategory}">
        </button>
    </div>
    <h4>${data.strCategory}</h4>
</article>`;

//===
//listAllCategoriesHTML String original js
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
//===//=============================================================
//String Fusionado para listAllAreaHTML
`<article id="${data.strArea}" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
    <div class="overflow-hidden border-radius-10px ">
        <button class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getFilteredList(7,'${data.strArea}')">
            <img 
            src=".assets/images/area/${data.strArea}.png" alt="${data.strArea}">
        </button>
    </div>
    <h4>${data.strArea}</h4>
</article>`;
//===
//Original String JS
    addingList.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.strArea}">
                <div class="cardImgContainer">
                    <button class="linkCard" 
                        onclick="getFilteredList(7,'${data.strArea}')">
                        <p>
                            <strong>${data.strArea}: </strong>
                        </p>
                    </button>
        </div>`;
//===/=============================================================
//String Fusionado para listAllIngredientHTML
        `<article id="${data.strIngredient}" class="recipieCard | display-flex flex-column padding-300 flex-align-center overflow-hidden position-relative">
            <div class="overflow-hidden border-radius-10px ">
                <button class="card-Btn | bg-primary-tomatogreen width-100 padding-200 position-absolute text-decoration-none .font-family-Popp  font-size-24 text-neutral-lightpink text-center" onclick="getFilteredList(9,'${data.strIngredient}')">
                <img src="${serverURL}/images/ingredients/${data.strIngredient}.png" alt="${data.strIngredient}">
                </button>
            </div>
            <h4>${data.strIngredient}</h4>
            <p>${data.strDescription}</p>
        </article>`;
//===/Original String listAllIngredientJS
        addingList.innerHTML = `
        <div class="card">
            <div class="cardContainer" id="${data.idIngredient}">
                <div class="cardImgContainer">
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