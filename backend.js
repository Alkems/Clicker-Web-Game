    // Beginning values, kind of Globalvariables.
    var pointsPerClick = 0.000001;
    localStorage.setItem("pointsPerClick", pointsPerClick.toString());

    var Total = 0;
    localStorage.setItem("Total", Total.toString());

    upgradeCost = 0.00001;
    localStorage.setItem("upgradeCost", upgradeCost.toString());

    document.getElementById("wallet").textContent = generateBitcoinAddress();

    
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

    function generateBitcoinAddress() {
        // Define the possible starting patterns
        const starts = ["1", "3", "bc1"];
        // Select a random start pattern
        const prefix = starts[Math.floor(Math.random() * starts.length)];
        // Determine the length of the rest of the address
        const length = Math.floor(Math.random() * (35 - 26 + 1)) + 26 - prefix.length;
        // Characters to use in the address
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        let address = prefix;
        for (let i = 0; i < length; i++) {
            address += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return address;
    }
    