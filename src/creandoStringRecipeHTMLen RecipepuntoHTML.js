//Codigo fusionado
    a.innerHTML=
    `<section class="display-flex flex-row flex-gap justify-content-center" style="width: 90%; margin: 50px 20px" id="${data.idMeal}">
    aside class="text-center" style="width:45%">
     <h3 class="text-primary-tomatored font-family-Popp
     font-style-normal font-weight-500 font-size-28
     font-line-height-42" style="margin: 20px">Recipe ingredients</h3>
    
     <section class="text-center text-neutral-matteblack  font-family-Popp
     font-style-normal font-weight-275 font-size-20
     font-line-height-30" style="display: grid; grid-template-columns: repeat(4, auto); grid-template-rows: repeat(2, auto); 	
     column-gap: 16.3px; row-gap: 1px; justify-items: center;">`;
     
     //<!-- COPIANDO HASTA -->
     a.innerHTML+=printIngredient(data)+=`</section>
 </aside>
 <!-- Recipe image -->
 <article style="width: 45%">
     <img src="${data.strMealThumb}" alt="Picture of ${data.strMeal}" style="width: 670px; height:400px; object-fit: cover">
 </article>
</section>
<!-- Recipe instructions -->
            <section class="display-flex flex-column align-items-center" style="width: 55%; margin: 20px auto">
                <h3 class="text-primary-tomatored           
                    font-family-Popp      font-style-normal font-weight-600 font-size-32
                    font-line-height-48">Recipe instructions</h3>
                <ol class="text-neutral-matteblack  font-family-Popp
                    font-style-normal font-weight-400 font-size-16
                    font-line-height-24">
                    ${data.strInstructions}
                   
                </ol>
            </section>
//<!-- Share -->
        <section class="display-flex flex-column text-center" style="width: 40%; margin: 20px auto">
            <span class="text-primary-tomatored font-family-Popp
                font-style-normal font-weight-600 font-size-40
                font-line-height-60">Did you make it?</span>
             <span class="text-primary-tomatogreen font-family-Popp
                font-style-normal font-weight-300 font-size-24
                font-line-height-36">We would love for you to share it with us! #Recipini</span>
        </section>
//<!-- Video -->
        <section class="display-flex flex-column 
            align-items-center"    
            style="width: 80%; margin: 60px auto">
        <h3 class="text-primary-tomatored font-family-Popp
            font-style-normal font-weight-500 font-size-28
            font-line-height-42" style="margin: 20px">Video of how it was made!</h3>
            <iframe width="685" height="415" 
            src="${data.strYoutube}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </section>`;




//Codigo Developer-api-precode
adding_recipe.innerHTML = `
    <div class"cardRecipe">
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

//Codigo original DesignSystem
// <!-- Recipe ingredients and recipe image -->
    `<section class="display-flex flex-row flex-gap justify-content-center" style="width: 90%; margin: 50px 20px" id="${data.idMeal}">
    <aside class="text-center" style="width:45%">
     <h3 class="text-primary-tomatored font-family-Popp
     font-style-normal font-weight-500 font-size-28
     font-line-height-42" style="margin: 20px">Recipe ingredients</h3>
    
     <section class="text-center text-neutral-matteblack  font-family-Popp
     font-style-normal font-weight-275 font-size-20
     font-line-height-30" style="display: grid; grid-template-columns: repeat(4, auto); grid-template-rows: repeat(2, auto); 	
     column-gap: 16.3px; row-gap: 1px; justify-items: center;">
     
     <!-- COPIANDO HASTA -->
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/enchilada_sauce.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Enchilada sauce</p>
             </figure>
         </a>
         <!-- HASTA AQUI LO DEMAS es AUTOMATICO -->
         <!-- <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/enchilada_sauce.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Enchilada sauce</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/cheese.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Cheese</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/cheese.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Cheese</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/soft_tortilla.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Soft tortilla</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/soft_tortilla.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Soft tortilla</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/breast_fillets.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Breast fillets</p>
             </figure>
         </a>
         <a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/breast_fillets.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Breast fillets</p>
             </figure>
         </a> -->
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
     <!-- <li>Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through,
         about 20 minutes.</li>
     <li>No water is needed, the chicken will cook in the Enchilada sauce.</li>
     <li>Make sure you stir occasionally so that it doesn't stick to the bottom.</li>
     <li>Remove chicken from the pot and shred with two forks.</li>
     <li>Preheat oven to 375 F degrees.</li>
     <li>Start layering the casserole.</li>
     <li>Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.</li>
     <li>I used a longer baking dish, so that I can put 2 corn tortillas across.</li>
     <li>Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.</li>
     <li>Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce,
         cheese.</li>
     <li>Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.</li>
     <li>Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.
     </li>
     <li>Serve warm.</li> -->
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
</section>`;