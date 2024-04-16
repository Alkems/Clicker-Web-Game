    // Beginning values, kind of Globalvariables.
    var pointsPerClick = 1;
    localStorage.setItem("pointsPerClick", pointsPerClick)

    var Total = 0;
    localStorage.setItem("Total", Total)




    // Event listeners
    // Gain points button
    document.getElementById("clickMe").addEventListener("click", () => {
        addPoints();
    });

    // Upgrade button
    document.getElementById("upgrade").addEventListener("click", () => {
        upgrade();
    });



    // Functions
    // Adds points on each Click me! button hit.
    function addPoints(){
        var pointsPerClick = parseInt(localStorage.getItem("pointsPerClick", pointsPerClick)) || 1;

        var Total = parseInt(localStorage.getItem("Total", Total)) || 0;
        Total += pointsPerClick;
        localStorage.setItem("Total", Total);

        document.getElementById("points").textContent = "Points: " + Total;
    };

    // Upgrades the amount of points you get by each click and requires points to upgrade.
    function upgrade() {
        var Total = localStorage.getItem("Total", Total)
        upgradeCost = 10;

        if (Total > upgradeCost) {
            Total = Total - upgradeCost;
            localStorage.setItem("Total", Total);

            pointsPerClick = pointsPerClick * 1.5;
            localStorage.setItem("pointsPerClick", pointsPerClick);

            upgradeCost = upgradeCost * 1.1;
            document.getElementById("points").textContent = "Points: " + Total;
        } else {
            alert("You do not have enough points to upgrade.")
        }
    };