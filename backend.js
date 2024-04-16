    // Beginning values, kind of Globalvariables.
    var pointsPerClick = 0.0001;
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());

    var Total = 0;
    localStorage.setItem("Total", Total.toString());

    upgradeCost = 0.001;
    localStorage.setItem("upgradeCost", upgradeCost.toString());


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
        var pointsPerClick = parseFloat(localStorage.getItem("pointsPerClick")) || 0.0001;

        var Total = parseFloat(localStorage.getItem("Total")) || 0;
        Total += pointsPerClick;
        localStorage.setItem("Total", Total);

        document.getElementById("points").textContent = "Points: " + Total.toFixed(4);
    };

    // Upgrades the amount of points you get by each click and requires points to upgrade.
    function upgrade() {
        var Total = localStorage.getItem("Total", Total)

        if (Total > upgradeCost) {
            Total = Total - upgradeCost;
            localStorage.setItem("Total", Total.toFixed(4));

            pointsPerClick = pointsPerClick * 1.5;
            localStorage.setItem("pointsPerClick", pointsPerClick.toFixed(4));

            upgradeCost = upgradeCost * 1.3;
            localStorage.setItem("upgradeCost", upgradeCost.toFixed(4));

            document.getElementById("points").textContent = "Points: " + Total.toFixed(4);
            document.getElementById("upgrade").textContent = "Upgrade: " + upgradeCost.toFixed(4) + "BTC!"
        } else {
            alert("You do not have enough points to upgrade.")
        }
    };