(function () {

    // Startar när sidan har laddats
    onload = function () {
        var movieoutput = document.getElementById("output");

        // variabel med varje film med sträng som visar titel, kategori och speltid
        var movie1 = new Movie('Star Wars', 'Sience fiction', 104);
        var movie2 = new Movie('Sonic', 'Action', 100);
        var movie3 = new Movie('A whisker away', 'Anime/Fantasy', 105);
        var movie4 = new Movie('My neighbor Totoro', 'Anime/Fantasy', 98);

        // hämta information från variabel, var för sig till webbläsaren
        movieoutput.innerHTML += movie1.getInformation();
        movieoutput.innerHTML += movie2.getInformation();
        movieoutput.innerHTML += movie3.getInformation();
        movieoutput.innerHTML += movie4.getInformation();
    }

    // hämtar varje object och placera ut i ordning, titel, kategori, speltid 
    function Movie(title, category, playtime) {
        this.title = title; // this menas med denna funktion
        this.category = category;
        this.playtime = playtime;
        this.getInformation = function() { // hämtar funktion med this som anger objekten
            return this.title + ", " + this.category + ", " + this.playtime + " minuter\n";
        }
    }

})();