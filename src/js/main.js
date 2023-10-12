var mainSidebar = document.getElementById("mainSidebar");
var setting = document.getElementById("setting");
var banner = document.getElementById("banner")
var overlay = document.getElementById("overlay")
var searchOrder = document.getElementById("orders-search")
var searchBAr = document.getElementById("searchBar")



function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
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
}

function closeNav() {
    mainSidebar.classList.toggle("closeSidebar");
    setting.classList.toggle("settings");

    var close = document.getElementById("close-navbar");
    close.classList.toggle("close-nav");
    close.classList.toggle("activate");

    var open = document.getElementById("open-navbar");
    open.classList.toggle("open-nav");   
  
    var expand = document.getElementById("expand-menu");
    expand.classList.toggle("menu");  
}
// open sidebar in responsive mode
function openSidebar() {
    mainSidebar.classList.toggle("showSidebar");
    setting.classList.remove("respnsive-settings");
    banner.classList.remove("logo");
    mainSidebar.classList.remove("hideSidebar");
    overlay.style.display = "block";
}
function closeSidebar() {
    mainSidebar.classList.remove("showSidebar");
    setting.classList.toggle("respnsive-settings");
    banner.classList.toggle("logo");
    mainSidebar.classList.toggle("hideSidebar");
    overlay.style.display = "none";
}

function handleResize() {
    mainSidebar.classList.remove("showSidebar");
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
        var element = document.getElementById('close-navbar');
        var sidebar = document.getElementById('mainSidebar');
        var setting = document.getElementById('setting');
    
        if (!element.classList.contains('activate')) {
            sidebar.classList.remove('closeSidebar');
            setting.classList.remove('settings');
        } 
        else {
            setting.classList.add('settings');
            sidebar.classList.add('closeSidebar');
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

function searchorder(){
    searchOrder.classList.toggle('hidden')
    searchBAr.classList.remove('hidden')
}

function switchStatus(status) {
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
  
document.addEventListener('DOMContentLoaded', function () {
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const modal = document.getElementById('modal');

    openModalButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    closeModalButton.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    // Close the modal if the overlay (outside the modal) is clicked
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
