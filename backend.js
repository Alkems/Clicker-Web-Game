    // Beginning values, kind of Globalvariables.
    var pointsPerClick = 0.000001;
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());

    var Total = 0;
    localStorage.setItem("Total", Total.toString());

    upgradeCost = 0.00001;
    localStorage.setItem("upgradeCost", upgradeCost.toString());


    // Event listeners
    // Gain points button
    document.getElementById("mine").addEventListener("click", () => {
        addPoints();
    });

    // Upgrade button
    document.getElementById("upgrade").addEventListener("click", () => {
        upgrade();
    });



    // Functions
    // Adds points on each Click me! button hit.
    function addPoints(){
        var pointsPerClick = parseFloat(localStorage.getItem("pointsPerClick")) || 0.000001;

        var Total = parseFloat(localStorage.getItem("Total")) || 0;
        Total += pointsPerClick;
        localStorage.setItem("Total", Total);

        document.getElementById("points").textContent = "BTC: " + Total.toFixed(6);
    };

    // Upgrades the amount of points you get by each click and requires points to upgrade.
    function upgrade() {
        var Total = localStorage.getItem("Total", Total)

        if (Total > upgradeCost) {
            Total = Total - upgradeCost;
            localStorage.setItem("Total", Total.toFixed(6));

            pointsPerClick = pointsPerClick * 1.1;
            localStorage.setItem("pointsPerClick", pointsPerClick.toFixed(6));

            upgradeCost = upgradeCost * 1.05;
            localStorage.setItem("upgradeCost", upgradeCost.toFixed(6));

            document.getElementById("points").textContent = "BTC: " + Total.toFixed(6);
            document.getElementById("upgrade").textContent = "Upgrade: " + upgradeCost.toFixed(6) + "BTC!"
        } else {
            alert("You do not have enough points to upgrade.")
        }
    };