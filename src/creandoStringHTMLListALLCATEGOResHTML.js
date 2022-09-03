



//Fusionado 
//listsAllAreaHTML copiado listALLCategories
listsGoInDiv.innerHTML +=
    `<article id="${data.strCategory}" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100">
          <div class="flag-Container | overflow-hidden">
          <img class="imgCard" 
          src="${serverURL}/images/category/${data.strCategory}.png" alt="${data.strCategory}" onclick="getFilteredList(7,'${data.strCategory}')">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;"
            onclick="getFilteredList(8,'${data.strCategory}')">${data.strCategory} </button>
        </a>
        </article>`;
//Originasl DEV-API
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



//ORIGINAL DEsugnSystem
//listsAllAreaHTML

listsGoInDiv.innerHTML +=
    `<article id="${data.strArea}" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100">
          <div class="flag-Container | overflow-hidden">
            <img 
            src="/src/assets/Flags/${data.strArea}.png" 
            alt="The ${data.strArea} Flag" onclick="getFilteredList(7,'${data.strArea}')">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;"
            onclick="getFilteredList(7,'${data.strArea}')">${data.strArea}</button>
        </a>
        </article>`;



recipesGoInDiv.innerHTML +=
`<article id="${data.idMeal}"
    class="card-Recipie-Day | display-flex 
    flex-gap overflow-hidden position-relative border-radius-10px 
    padding-300-vertical padding-600-inline margin-500">
    <div class="redBar"></div>
    <button class="imgContainer | border-radius-12px" 
        onclick="getRecipe(${data.idMeal})">
        <img src="${data.strMealThumb}"
            alt="Picture of ${data.strMeal}">
    </button>
    <div class="display-flex
        flex-column-reverse justify-content-around flex-center">
        <h3 class=" card-Recipie-Day-Text | font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42 text-center">
            ${data.strMeal}
        </h3>
        <button class="bg-primary-tomatogreen 
            text-neutral-lightpink border-radius-45px button-primary text-capitalize font-family-Popp font-weight-600 font-size-16" onclick="getRecipe(${data.idMeal})">
            recipie of the day
        </button>
    </div>
</article>`;
