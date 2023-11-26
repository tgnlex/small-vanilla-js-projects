$(document).ready(function(){
    var logs = 0;
    var stones = 0;
    var pickaxes = 0;
    var money = 0; 
    var logPlus = 1;
    var stonePlus = 1;
    var autoLogPlus = 0;
    var autoStonePlus = 0;
    var autoChopperPrice = 100; 
    var pickaxePrice = 50;
    var autoMinerPrice = 500;
    var axeUpgradePrice = 10;
    var axeLevel = 1;
    var logPrice = 1;
    var stonePrice = 5;
    var menu;

    setInterval(function() {
        logs += autoLogPlus;
        changeInventory();
        changeMarket();
    }, 1000);
    setInterval(function() {
        stones += autoStonePlus;
        changeInventory();
        changeMarket();
    }, 1000);

    $("#chop").click(function() {
        logs += logPlus * axeLevel;
        changeInventory();
        changeMarket();
    });

    $("#mineStone").click(function(){
        if(pickaxes == 0) {
            alert("You have nothing to mine stone with.")
        }else{
            stones += stonePlus * pickaxes;
        }}); 
    $("#sell1").click(function(){
        logs --;
        money += logPrice;
        changeInventory();
        changeMarket();
    });

    $("#sell10").click(function(){
        logs -= 10;
        money += logPrice *10;
        changeInventory();
        changeMarket();
    });


    $("#sellAll").click(function(){
        money += logPrice * logs;
        logs = 0;
        changeInventory();
        changeMarket();
    });

    $("#sellStone").click(function(){
        stones --;
        money += stonePrice;
        changeInventory();
        changeMarket();
    });
    $("#sell10Stone").click(function(){
        stones -= 10;
        money += stonePrice *10;
        changeInventory();
        changeMarket();
    });
    $("#sellAllStone").click(function(){
        money += stonePrice * stones;
        stones = 0;
        changeInventory();
        changeMarket();
    });

    $("#autoChopper").click(function(){
        if(money >= autoChopperPrice) {
        money -= autoChopperPrice;
        autoLogPlus += 1;
        autoChopperPrice = autoChopperPrice * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#autoMiner").click(function(){
        if(money >= autoMinerPrice) {
        money -= autoMinerPrice;
        autoStonePlus += 1;
        autoMinerPrice = autoMinerPrice * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#pickaxe").click(function(){
        if (money >= pickaxePrice) {
        money -= pickaxePrice;
        pickaxes += 1; 
        pickaxePrice = pickaxePrice * 2;
        changeInventory();
        changeMarket();
        }
    });
    $("#axeUpgrade").click(function(){
        if(money >= axeUpgradePrice) {
        money -= axeUpgradePrice;
        axeLevel += 1;
        axeUpgradePrice = axeUpgradePrice * 2 ;
        changeInventory();
        changeMarket();
        }
    });
    $("#visit").click(function() {
        menu = switchMenu("marketplace");
        changeMarket();
    });
    $("#return").click(function() {
        menu = switchMenu("main");
    });

    function changeInventory(){
        $("#money").html("Money: $" + money);

        if(logs == 1) {
            $("#logs").html("You now own " + logs + " log.");
        }else{
            $("#logs").html("You now own " + logs + "logs.");
        }

        if(stones > 0){
            $("#stone").html("You now own " + stones + " piece(s) of stone.");
        }else{
            $("#stone").html("");
        }

        if(pickaxe > 0){
            $("#pickaxes").html("You now own " + pickaxes + " pickaxes.");
        }else{
            $("#pickaxes").html("");
        }
    }

    function changeMarket(){
        if(logs > 0) {
            $("#sellAll").css("display", "block")
        }else{
        $("#sellAll").css("display", "none")
        }
        if(logs >= 1) {
            $("#sell1").css("display", "block")
        }else{
        $("#sell1").css("display", "none")
        }
        if(logs >= 10) {
            $("#sell10").css("display", "block")
        }else{
        $("#sell10").css("display", "none")
        }

        if(stones > 0) {
            $("#sellAllStone").css("display", "block")
        }else{
        $("#sellAllStone").css("display", "none")
        }
        if(stones >= 1) {
            $("#sellStone").css("display", "block")
        }else{
        $("#sellStone").css("display", "none")
        }
        if(stones >= 10) {
            $("#sell10Stone").css("display", "block")
        }else{
        $("#sell10Stone").css("display", "none")
        }
    }

    function switchMenu(menu){
        $(".menus").children().css("display", "none");
        $("." + menu).css("display", "block");
        return menu; 
    }
});