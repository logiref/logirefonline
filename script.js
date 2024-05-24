document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur LogiRefOnline !");

    function reductionTheosophique(number) {
        while (number > 22) {
            number = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return number;
    }

    function handleZeroValue(number) {
        return number === 0 ? 22 : number;
    }

    const form = document.getElementById("birthdate-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const day = parseInt(document.getElementById("day").value);
        const month = parseInt(document.getElementById("month").value);
        const year = parseInt(document.getElementById("year").value);
        const calcYear = parseInt(document.getElementById("calc-year").value);

        // Maison 1
        let maison1;
        if (day >= 1 && day <= 22) {
            maison1 = day;
        } else {
            const dayStr = day.toString();
            maison1 = parseInt(dayStr[0]) + parseInt(dayStr[1]);
        }
        maison1 = handleZeroValue(maison1);

        // Maison 2
        let maison2 = month;
        maison2 = handleZeroValue(maison2);

        // Maison 3
        const yearStr = year.toString();
        let maison3 = yearStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        maison3 = reductionTheosophique(maison3);
        maison3 = handleZeroValue(maison3);

        // Maison 4
        let maison4 = day + month + parseInt(yearStr);
        maison4 = maison4.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        maison4 = reductionTheosophique(maison4);
        maison4 = handleZeroValue(maison4);

        // Maison 5
        let maison5 = maison1 + maison2 + maison3 + maison4;
        maison5 = reductionTheosophique(maison5);
        maison5 = handleZeroValue(maison5);

        // Maison 6
        let maison6 = maison1 + maison2;
        maison6 = reductionTheosophique(maison6);
        maison6 = handleZeroValue(maison6);

        // Maison 7
        let maison7 = maison3 - maison2;
        maison7 = reductionTheosophique(Math.abs(maison7));
        maison7 = handleZeroValue(maison7);

        // Maison 8
        const calcYearStr = calcYear.toString();
        let reducedCalcYear = calcYearStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (reducedCalcYear !== 11 && reducedCalcYear !== 22) {
            while (reducedCalcYear > 9) {
                reducedCalcYear = reducedCalcYear.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
            }
        }
        let maison8 = reducedCalcYear + maison6;
        maison8 = reductionTheosophique(maison8);
        maison8 = handleZeroValue(maison8);

        // Maison 9
        let maison9 = maison6 + maison7;
        maison9 = reductionTheosophique(maison9);
        maison9 = handleZeroValue(maison9);

        // Maison 10
        let maison10 = 22 - maison9;
        maison10 = handleZeroValue(maison10);

        // Maison 11
        let maison11 = maison3 + maison7 + maison10;
        maison11 = reductionTheosophique(maison11);
        maison11 = handleZeroValue(maison11);

        // Maison 12
        let maison12 = maison2 + maison4 + maison6;
        maison12 = reductionTheosophique(maison12);
        maison12 = handleZeroValue(maison12);

        // Maison 13
        let maison13 = maison9 + maison2 + maison5 + maison4 + maison11 + maison3 + maison5 + maison1 + maison12;
        maison13 = reductionTheosophique(maison13);
        maison13 = handleZeroValue(maison13);

        // Display results
        document.getElementById("maison1").innerText = maison1;
        document.getElementById("maison2").innerText = maison2;
        document.getElementById("maison3").innerText = maison3;
        document.getElementById("maison4").innerText = maison4;
        document.getElementById("maison5").innerText = maison5;
        document.getElementById("maison6").innerText = maison6;
        document.getElementById("maison7").innerText = maison7;
        document.getElementById("maison8").innerText = maison8;
        document.getElementById("maison9").innerText = maison9;
        document.getElementById("maison10").innerText = maison10;
        document.getElementById("maison11").innerText = maison11;
        document.getElementById("maison12").innerText = maison12;
        document.getElementById("maison13").innerText = maison13;

        // Affichage des images
        const maisonResults = [maison9, maison2, maison5, maison4, maison13];
        const imagesRow = document.getElementById("images-row");
        imagesRow.innerHTML = ""; // Supprimez le contenu précédent
        maisonResults.forEach(result => {
            const img = document.createElement("img");
            img.src = `img/${result}.png`;
            img.alt = `Maison ${result}`;
            img.classList.add("medium-image");
            imagesRow.appendChild(img);
        });

        // Affichage des images pour les résultats des cases 6, 1 et 8
const maison618Results = [maison6, maison1, maison8];
const imagesRowMaison618 = document.getElementById("images-row-maison618");
imagesRowMaison618.innerHTML = ""; // Supprimez le contenu précédent
maison618Results.forEach(result => {
    const img = document.createElement("img");
    img.src = `img/${result}.png`;
    img.alt = `Maison ${result}`;
    img.classList.add("medium-image");
    imagesRowMaison618.appendChild(img);
    if (result === maison6) {
        img.classList.add("maison6"); // Ajout de la classe "maison6"
    }
});

        // Affichage des images pour les résultats des cases 12
        const maison12Results = [maison12];
        const imagesRowMaison12 = document.getElementById("images-row-maison12");
        imagesRowMaison12.innerHTML = ""; // Supprimez le contenu précédent
        maison12Results.forEach(result => {
            const img = document.createElement("img");
            img.src = `img/${result}.png`;
            img.alt = `Maison ${result}`;
            img.classList.add("medium-image");
            imagesRowMaison12.appendChild(img);
        });
        



            // Affichage des images pour les résultats des cases 7, 3 et 10
            const maison7310Results = [maison7, maison3, maison10];
            const imagesRowMaison7310 = document.getElementById("images-row-maison7310");
            imagesRowMaison7310.innerHTML = ""; // Supprimez le contenu précédent
            maison7310Results.forEach(result => {
                const img = document.createElement("img");
                img.src = `img/${result}.png`;
                img.alt = `Maison ${result}`;
                img.classList.add("medium-image");
                imagesRowMaison7310.appendChild(img);
            });
            
                    // Affichage des images pour les résultats des cases 11
                    const maison11Results = [maison11];
                    const imagesRowMaison11 = document.getElementById("images-row-maison11");
                    imagesRowMaison11.innerHTML = ""; // Supprimez le contenu précédent
                    maison12Results.forEach(result => {
                        const img = document.createElement("img");
                        img.src = `img/${result}.png`;
                        img.alt = `Maison ${result}`;
                        img.classList.add("medium-image");
                        imagesRowMaison11.appendChild(img);
                    });
    
            
        });

        const printButton = document.getElementById("print-button");
        printButton.addEventListener("click", function() {
            window.print(); // Déclenche l'action d'impression de la page
        });
                
        
                
            
});
