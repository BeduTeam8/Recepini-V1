//FUSIONADO
//Fusionado 
//listsAllAreaHTML copiado listALLCategories luego aqui a LIST ALL INGREDIENTs
listsGoInDiv.innerHTML +=
    `<article id="${data.idIngredient}" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100">
          <div class="flag-Container | overflow-hidden">
          <img class="imgCard" 
          src="${serverURL}/images/ingredient/${data.idIngredient}.png" alt="${data.idIngredient}" onclick="getFilteredList(9,'${data.idIngredient}')">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;"
            onclick="getFilteredList(9,'${data.idIngredient}')">${data.idIngredient} </button>
        </a>
        </article>`;

//Orig API-DEVELOPER
addingList.innerHTML = `
<div class="card">
    <div class="cardContainer" id="${data.idIngredient}">
        <div class="cardImgContainer">
        data.meals:
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

//DESIGNSYSTEM