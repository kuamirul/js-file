
    function catalogue() {

        var cm = "https://sierra-encore.utp.edu.my/iii/encore/plus/C__S";
		var ct = document.getElementById("cataloguetext").value;
		var cs = "__Orightresult__U?lang=eng&suite=def";

        if ( ct == "") {
            alert("Fill in all required data.");
        } else {
            var clink = cm + ct + cs;
            window.open(clink);
        }
    }

    function database() {

        var dl = document.getElementById("databaselist").value;
        var dt = document.getElementById("databasetext").value;

        if (dl == "Database List") {
            alert("Choose any of our database");
        } else if (dl == "ProQuest Dissertations & Theses: The Sciences and Engineering Collection") {
            window.open(dl);
        } else {
            var dlink = dl + dt;
            window.open(dlink);
        }
    }

    function gateway() {

        var gm ="https://gateway.utp.edu.my/home/Search/Results?lookfor=";
		var gl = document.getElementById("gatewaylist").value;
        var gt = document.getElementById("gatewaytext").value;

        if (gt == "") {
            alert("Fill in all required data.");
        } else {
            var glink = gm + gt + gl;
            window.open(glink);
        }
    }

    function epaper() {

        var el = document.getElementById("epaperlist").value;

        if (el == "E-Paper List") {
            alert("Fill in all required data.");
        } else {
            window.open(el);
        }
    }


    function generateLink() {

        var web = "http://ulibrary.utp.edu.my/qr/index.php?shelvenum=";
        var amp = "&";
        var mr = "mainrange="
        var rur = "rangeur="
        var rdr = "rangedr="
        var rul = "rangeul="
        var rdl = "rangedl="
        var lvl = "level="
        var shlv = "shelve="
        var sde = "side="
        var mrt = document.getElementById("MR").value;
        var rtlt = document.getElementById("RTL").value;
        var rblt = document.getElementById("RBL").value;
        var rtrt = document.getElementById("RTR").value;
        var rbrt = document.getElementById("RBR").value;
        var lvlt = document.getElementById("level").value;
        var shlvt = document.getElementById("shelve").value;
        var sdet = document.getElementById("side").value;


        if (mrt == "" || rtlt == "" || rblt == "" || rtrt == "" || rbrt == "" || lvlt == "" || shlvt == "" || sdet == "") {
            alert("Fill in all required data.");
        } else {
            var link = web + "L" + lvlt + "-" + shlvt + amp + mr + mrt + amp + rur + rtrt + amp + rdr + rbrt + amp + rul + rtlt + amp + rdl + rblt + amp + lvl + lvlt + amp + shlv + shlvt + amp + sde + sdet;
            window.open(link);
        }


    }

    function ResetButton() {
        MR.value = "";
        RTL.value = "";
        RBL.value = "";
        RTR.value = "";
        RBR.value = "";
        level.value = ""
        shelve.value = "";
        side.value = "";
        generate.value = "";
    }

    function ctc(id) {
        var gnrt = document.getElementById("generate").value;

        if (gnrt == "") {
            alert("No generated link. \nFill in all required data.");
        } else {
            document.getElementById('generate').select();
            document.execCommand('copy');
            alert("Link copied to clipboard!");
        }
    }


    function openCity(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
