var tomb = ["Guvat", "Jégmadár", "Kárókatona"]
var kepek = ["guvat.png", "jegmadar.png", "karokatona.png"]
var leiras = ["A guvat (Rallus aquaticus) a madarak osztályának darualakúak (Gruiformes) rendjébe, és a guvatfélék (Rallidae) családjába tartozó faj.", "A jégmadár (Alcedo atthis) a madarak osztályának szalakótaalakúak (Coraciiformes) rendjébe és a jégmadárfélék (Alcedinidae) családjába tartozó faj.", "A nagy kárókatona (Phalacrocorax carbo) a madarak (Aves) osztályának a szulaalakúak (Suliformes) rendjébe, ezen belül a kárókatonafélék (Phalacrocoracidae) családjába tartozó faj."]
function kattintas(number){
    //alert(tomb[number])
    document.getElementById("modal_head").innerHTML = tomb[number]
    document.getElementById("modal_body").innerHTML = `<img src="/kepek/${kepek[number]}" class="img-fluid">${leiras[number]}`
}