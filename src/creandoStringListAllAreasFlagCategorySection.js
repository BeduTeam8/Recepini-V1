//CODIGO FUSIONADO va en INDEX.HTML
//<!-- flag catagory section starts here -->
        `<article id="${data.strArea}" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100">
          <div class="flag-Container | overflow-hidden">
            <img src="/src/assets/Flags/${data.strArea}.png" alt="The ${data.strArea} Flag" onclick="getFilteredList(7,'${data.strArea}')">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;"
            onclick="getFilteredList(7,'${data.strArea}')">${data.strArea}</button>
        </a>
        </article>`;
//CODIGO Original de API-DEVELOPER
addingList.innerHTML = 
        `<div class="card">
            <div class="cardContainer" id="${data.strArea}">
                <div class="cardImgContainer">
                    <button class="linkCard" 
                        onclick="getFilteredList(7,'${data.strArea}')">
                        <p>
                            <strong>${data.strArea}: </strong>
                        </p>
                    </button>
        </div>`;
//Codigo Original DESIGNSYSTEM
//<!-- flag catagory section starts here -->
`<article id="area" class="area-catagory ">
        <a href="search_results.html" class=" display-flex flex-column flex-gap margin-100">
          <div class="flag-Container | overflow-hidden">
            <img src="/src/assets/Flags/Algeria.png" alt="">
          </div>
          <button class="flag-Btn | button-primary-outline border-color-primary-tomatored  border-radius-45px font-family-Popp
            font-style-normal font-weight-600 font-size-20
             fit-content-width text-center padding-300-inline text-primary-tomatored"
            style="border: 2px solid ;">Algerian </button>
        </a>
</article>`;