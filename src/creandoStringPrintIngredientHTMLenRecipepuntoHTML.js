//Codigo Fusionado
`<a href="ingredient.html" class="text-none text-neutral-matteblack">
<figure>
        <button class="text-none text-neutral-matteblack"             onclick="getFilteredList(9,'${data['strIngredient'+indice]}')" >
            <img class="imgCard" 
            src="${serverURL}/images/ingredients/${data['strIngredient'+indice]}.png" alt="${data['strIngredient'+indice]}" style="width: 81px; height:81px; object-fit: cover">
            <p>{indice} ${data['strMeasure'+indice]}&nbsp;${data['strIngredient'+indice]}</p>
            </figure>
</a>`;



//api-developer
printIngredient(data)+=
result += 
            `<figure>
                <button class="text-none text-neutral-matteblack"             onclick="getFilteredList(9,'${data['strIngredient'+indice]}')" >
                    <img class="imgCard" 
                        src="${serverURL}/images/ingredients/${data['strIngredient'+indice]}.png" alt="${data['strIngredient'+indice]}" style="width: 81px; height:81px; object-fit: cover"> 
                </button>
                <p>{indice} ${data['strMeasure'+indice]}&nbsp;${data['strIngredient'+indice]}</p>
            </figure>`;


//Codigo de Design System
printIngredient(data)+=
     `<a href="ingredient.html" class="text-none text-neutral-matteblack">
             <figure>
                 <img src="/src/assets/enchilada_sauce.png" alt=""
                     style="width: 81px; height:81px; object-fit: cover">
                 <p>Enchilada sauce</p>
             </figure>
         </a>`;