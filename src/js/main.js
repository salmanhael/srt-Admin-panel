var mainSidebar = document.getElementById("mainSidebar");
var setting = document.getElementById("setting");
var banner = document.getElementById("banner")
var overlay = document.getElementById("overlay")
var searchOrder = document.getElementById("orders-search")
var searchBAr = document.getElementById("searchBar")



function Dropdown() {
    document.getElementById("headerDropdown").classList.toggle("show");
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
    // modal section

    // main modal
    const openModalButton = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const outside = document.getElementById('modal-out');
    const closeModalButton = document.getElementById('closeModal');
    const closemodalBtn = document.getElementById('closemodalBtn');
    // nested modal
    const openNestedModalBtn = document.getElementById("openNestedModalBtn");
    const nestedout = document.getElementById('nested-out');
    const nestedModal = document.getElementById("nestedModal");
    const closeNestedModalBtn = document.getElementById("closeNestedModalBtn");
    const closeNestedmodal = document.getElementById("closeNestedmodal");
    // nedted modal 2
    const openNestedModal2Btn = document.getElementById("openNestedModal2Btn");
    const nestedModal2 = document.getElementById("nestedmodal2");
    const nestedout2 = document.getElementById('nested-out2');
    const closenestedModal2 = document.getElementById("closenestedModal2");
    const closeNestedModal2Btn = document.getElementById("closeNestedModal2Btn");


    // open modal

    openModalButton.addEventListener('click', function () {
        modal.classList.add('show');
    });
    openNestedModalBtn.addEventListener('click', function () {
        nestedModal.classList.add('show');
    });
    openNestedModal2Btn.addEventListener('click', function () {
        nestedModal2.classList.add('show');
    });
  
    // close modal

    // close main modal
    function closeModal() {
        modal.classList.add('hide');
        setTimeout(() => {
            modal.classList.remove('show');
            modal.classList.remove('hide');
        }, 900);
    }
    closeModalButton.addEventListener('click', closeModal);
    closemodalBtn.addEventListener('click', closeModal);

    // close order code modal
    function closeNestedModal() {
        nestedModal.classList.add('hide');
        setTimeout(() => {
            nestedModal.classList.remove('show');
            nestedModal.classList.remove('hide');
        }, 900);
    }
    closeNestedModalBtn.addEventListener('click', closeNestedModal);
    closeNestedmodal.addEventListener('click', closeNestedModal);

    // close cancel order modal
    function closeNestedModal2() {
        nestedModal2.classList.add('hide');
        setTimeout(() => {
            nestedModal2.classList.remove('show');
            nestedModal2.classList.remove('hide');
        }, 900);
    }
    closenestedModal2.addEventListener('click', closeNestedModal2);
    closeNestedModal2Btn.addEventListener('click', closeNestedModal2);

    // zoomin & out when click outside of modal

    window.onclick = function(event) {
    if (event.target == outside) {
        outside.querySelector(".modal-content").classList.add("zoomin");
        outside.querySelector(".modal-content").classList.remove("zoomout");
        setTimeout(function() {
            outside.querySelector(".modal-content").classList.add("zoomout");
            outside.querySelector(".modal-content").classList.remove("zoomin");
        }, 500);
    }
    if (event.target == nestedout) {
        nestedout.querySelector(".nested-content").classList.add("zoomin");
        nestedout.querySelector(".nested-content").classList.remove("zoomout");
        setTimeout(function() {
            nestedout.querySelector(".nested-content").classList.add("zoomout");
            nestedout.querySelector(".nested-content").classList.remove("zoomin");
        }, 500);
    }
    // close modal when click outside
    if (event.target == nestedout2) {
        nestedModal2.classList.add('hide');
        setTimeout(() => {
            nestedModal2.classList.remove('show');
            nestedModal2.classList.remove('hide');
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
});


