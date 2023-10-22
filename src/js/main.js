var mainSidebar = document.getElementById("mainSidebar");
var setting = document.getElementById("setting");
var banner = document.getElementById("banner")
var overlay = document.getElementById("overlay")
var searchOrder = document.getElementById("orders-search")
var searchBAr = document.getElementById("searchBar")
var dropdown = document.getElementById('DropdownMenu');
var product = document.getElementById('product');


function Dropdown() {
    document.getElementById("headerDropdown").classList.toggle("show");
}

function closeNav() {
    mainSidebar.classList.toggle("closeSidebar");
    setting.classList.toggle("settings");
    product?.classList.toggle("pointer-events-none");
    dropdown?.classList.add("hidden");

    var close = document.getElementById("close-navbar-btn");
    close.classList.toggle("close-nav");
    close.classList.toggle("activate");

    var open = document.getElementById("open-navbar-btn");
    open.classList.toggle("open-nav");


    var expand = document.getElementById("expand-menu");
    expand.classList.toggle("menu");
}
// open sidebar in responsive mode
function openSidebar() {
    mainSidebar.classList.toggle("showSidebar");
    product?.classList.remove("pointer-events-none");
    setting.classList.remove("respnsive-settings");
    banner.classList.remove("logo");
    mainSidebar.classList.remove("hideSidebar");
    overlay.style.display = "block";
}
function closeSidebar() {
    mainSidebar.classList.remove("showSidebar");
    product?.classList.add("pointer-events-none");
    setting.classList.toggle("respnsive-settings");
    banner.classList.toggle("logo");
    mainSidebar.classList.toggle("hideSidebar");
    overlay.style.display = "none";
}

function handleResize() {
    mainSidebar.classList.remove("showSidebar");
    product?.classList.add("pointer-events-none");
    dropdown?.classList.add("hidden")
    setting.classList.toggle("respnsive-settings");
    banner.classList.toggle("logo");
    mainSidebar.classList.toggle("hideSidebar");
    overlay.style.display = "none";
}

window.addEventListener('resize', handleResize);

window.addEventListener('resize', function () {
    if (window.innerWidth <= 1280) {
        document.getElementById('mainSidebar').classList.remove('closeSidebar');

    }
    else {
        document.getElementById('mainSidebar').classList.add('closeSidebar');
    }
});
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1280) {
        var element = document.getElementById('close-navbar-btn');
        var sidebar = document.getElementById('mainSidebar');
        var setting = document.getElementById('setting');

        if (!element.classList.contains('activate')) {
            sidebar.classList.remove('closeSidebar');
            setting.classList.remove('settings');
            product?.classList.remove("pointer-events-none");
        }
        else {
            setting.classList.add('settings');
            sidebar.classList.add('closeSidebar');
            product?.classList.add("pointer-events-none");
        }
    }
});



function checkWindowSize() {
    var sidebar = document.getElementById('mainSidebar');
    var setting = document.getElementById('setting');
    var banner = document.getElementById('banner');
    var hideSidebar = "hideSidebar";
    var responsiveSetting = "respnsive-settings";
    var logo = "logo";
    var windowWidth = window.innerWidth;
    var thresholdWidth = 1280;

    if (windowWidth < thresholdWidth) {
        sidebar.classList.add(hideSidebar);
        setting.classList.add(responsiveSetting);
        banner.classList.add(logo);
        setting.classList.remove("settings")

    } else {
        sidebar.classList.remove(hideSidebar);
        setting.classList.remove(responsiveSetting);
        banner.classList.remove(logo);

    }
}
checkWindowSize();
window.addEventListener("resize", checkWindowSize);

function searchorder() {
    searchOrder.classList.toggle('hidden')
    searchBAr.classList.remove('hidden')
}

function switchStatus(status) {
    const divs = document.querySelectorAll('.status-all');
    divs.forEach(div => {
        if (div.classList.contains(`status-${status}`)) {
            if (div.classList.contains('hidden')) {
                div.classList.remove('hidden');
                div.classList.add('fade-in');
            }
        } else {
            if (!div.classList.contains('hidden')) {
                div.classList.remove('fade-in');
                div.classList.add('fade-out');
                setTimeout(() => {
                    div.classList.add('hidden');
                    div.classList.remove('fade-out');
                }, 500);
            }
        }
    });
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('table-active');
    });

    document.getElementById(`${status}-button`).classList.add('table-active');
}

// change table content button product page
function sellType(status) {
    const rows = document.querySelectorAll('#statusTable tbody tr');
    rows.forEach(row => {
        if (row.classList.contains(`status-${status}`)) {
            if (row.classList.contains('hidden')) {
                row.classList.remove('hidden');
                row.classList.add('fade-in');
            }
        } else {
            if (!row.classList.contains('hidden')) {
                row.classList.remove('fade-in');
                row.classList.add('fade-out');
                setTimeout(() => {
                    row.classList.add('hidden');
                    row.classList.remove('fade-out');
                }, 500);
            }
        }
    });
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('table-active');
    });


    document.getElementById(`${status}-button`).classList.add('table-active');
}

function productStatus(status) {
    const rows = document.querySelectorAll('#statusTable tbody tr');
    rows.forEach(row => {
        if (row.classList.contains(`status-${status}`)) {
            if (row.classList.contains('hidden')) {
                row.classList.remove('hidden');
                row.classList.add('fade-in');
            }
        } else {
            if (!row.classList.contains('hidden')) {
                row.classList.remove('fade-in');
                row.classList.add('fade-out');
                setTimeout(() => {
                    row.classList.add('hidden');
                    row.classList.remove('fade-out');
                }, 500);
            }
        }
    });
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('button-active');
    });


    document.getElementById(`${status}-button`).classList.add('button-active');
}




window.onclick = function (event) {
    // nedted modal 2
    const nestedModal2 = document.getElementById("nestedmodal2");
    const nestedout2 = document.getElementById('nested-out2');
    // user status
    const userstatus = document.getElementById('userstatus-modal');
    const userstatusout = document.getElementById('userstatus-out');
    // close modal when click outside
    if (event.target == nestedout2) {
        nestedModal2.classList.add('hide');
        setTimeout(() => {
            nestedModal2.classList.remove('show');
            nestedModal2.classList.remove('hide');
        }, 900);
    }
    if (event.target == userstatusout) {
        userstatus.classList.add('hide');
        setTimeout(() => {
            userstatus.classList.remove('show');
            userstatus.classList.remove('hide');
        }, 900);
    }
    // close header dropdown
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};



// toggle off-on 
function deactivate() {
    var close = document.getElementById("off");
    close.classList.toggle("hidden");

    var open = document.getElementById("on");
    open.classList.toggle("open-nav");

}

function deactivate1() {
    var close = document.getElementById("off1");
    close.classList.toggle("hidden");

    var open = document.getElementById("on1");
    open.classList.toggle("open-nav");

}
// -----------------------------------------------------------------------------

// product dorpdown
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('SideDropdown');
    button.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

});
// add detail for newseller page
document.addEventListener("DOMContentLoaded", function () {
    const addDetail = document.getElementById("addDetail");
    const container = document.getElementById("details-container");
    let detailCount = 1;
    
    addDetail?.addEventListener("click", function () {
        if (detailCount < 4) { 
            const newDiv = document.createElement("div");
            newDiv.className = "flex flex-row max-sm:flex-col items-center mb-4";
            const newInput1 = document.createElement("input");
            newInput1.type = "text";
            newInput1.className = "border w-full bg-gray-200 text-gray-500 h-10 py-2 px-3 text-center rounded focus:bg-white focus:outline-blue-500";
            newInput1.placeholder = "عنوان";
            const Div2 = document.createElement("div");
            Div2.className = "mx-3 max-sm:my-2";
            const newInput2 = document.createElement("input");
            newInput2.type = "text";
            newInput2.className = "border w-full outline-1 outline-blue-500 h-10 py-2 px-3 text-center rounded";
            newDiv.appendChild(newInput1);
            newDiv.appendChild(Div2);
            newDiv.appendChild(newInput2);
            container.appendChild(newDiv);
           
            detailCount++;
            
            if (detailCount === 4) {
                addDetail.style.display = "none";
            }
        }
    });
});