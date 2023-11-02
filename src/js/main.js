var mainSidebar = document.getElementById("mainSidebar");
var setting = document.getElementById("setting");
var banner = document.getElementById("banner")
var overlay = document.getElementById("overlay")
var searchOrder = document.getElementById("orders-search")
var searchBAr = document.getElementById("searchBar")
var dropdown = document.getElementById('DropdownMenu');
var product = document.getElementById('product');
var Seodropdown = document.getElementById('SeoDropdownMenu');
var Seo = document.getElementById('Seo');


function Dropdown() {
    document.getElementById("headerDropdown").classList.toggle("show");
}

function closeNav() {
    mainSidebar.classList.toggle("closeSidebar");
    setting.classList.toggle("settings");
    product?.classList.toggle("pointer-events-none");
    dropdown?.classList.add("hidden");
    Seo?.classList.toggle("pointer-events-none");
    Seodropdown?.classList.add("hidden");

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
    Seo?.classList.remove("pointer-events-none");
    setting.classList.remove("respnsive-settings");
    banner.classList.remove("logo");
    mainSidebar.classList.remove("hideSidebar");
    overlay.style.display = "block";
}
function closeSidebar() {
    mainSidebar.classList.remove("showSidebar");
    product?.classList.add("pointer-events-none");
    Seo?.classList.add("pointer-events-none");
    setting.classList.toggle("respnsive-settings");
    banner.classList.toggle("logo");
    mainSidebar.classList.toggle("hideSidebar");
    overlay.style.display = "none";
}

function handleResize() {
    mainSidebar.classList.remove("showSidebar");
    product?.classList.add("pointer-events-none");
    dropdown?.classList.add("hidden")
    Seo?.classList.add("pointer-events-none");
    Seodropdown?.classList.add("hidden")
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
            Seo?.classList.remove("pointer-events-none");
        }
        else {
            setting.classList.add('settings');
            sidebar.classList.add('closeSidebar');
            product?.classList.add("pointer-events-none");
            Seo?.classList.add("pointer-events-none");
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
    // change user status
    const deactivate = document.getElementById('deactivate-modal');
    const deactivateout = document.getElementById('deactivate-out');
    // close modal when click outside
    if (event.target == nestedout2) {
        nestedModal2.classList.add('hide');
        setTimeout(() => {
            nestedModal2.classList.remove('show');
            nestedModal2.classList.remove('hide');
        }, 900);
    }
    if (event.target == deactivateout) {
        deactivate.classList.add('hide');
        setTimeout(() => {
            deactivate.classList.remove('show');
            deactivate.classList.remove('hide');
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



// toggle off-on for main pages
var row, newBlockedStatusInput, btn;

function openDeactiveModal(button) {
    row = button.closest(".deactivate");
    newBlockedStatusInput = row.querySelector('input[name="newBlockedStatus"]');
    btn = button.closest(".deactivateBtn");
    modal = document.getElementById("deactivate-modal");
    modal.classList.add('show');
}

function closeDeactiveModal() {
    var modal = document.getElementById("deactivate-modal");
    modal.classList.add('hide');
    setTimeout(() => {
        modal.classList.remove('show', 'hide');
    }, 900);
}

function confirmChanges() {
    closeDeactiveModal();
    // یافتن المان‌های مورد نظر در ردیف فعلی
    

    let status = newBlockedStatusInput.value === "true";
    // تغییر مقدار newBlockedStatus و کلاس disableRow
    if (!status) {
        newBlockedStatusInput.value = "true";
        row.classList.add("opacity-50");
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>`;
    } else {
        newBlockedStatusInput.value = "false";
        row.classList.remove("opacity-50");
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>`;
    }
}

// toggle button for quickedit page
function toggleRow(button) {
   // یافتن المان‌های مورد نظر در ردیف فعلی
   var row = button.closest(".deactivate");
   var newBlockedStatusInput = row.querySelector('input[name="newBlockedStatus"]');
   var btn = button.closest(".deactivateBtn");

   let status = newBlockedStatusInput.value === "true";
   // تغییر مقدار newBlockedStatus و کلاس disableRow
   if (!status) {
       newBlockedStatusInput.value = "true";
       row.classList.add("opacity-50");
       btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>`;
   } else {
       newBlockedStatusInput.value = "false";
       row.classList.remove("opacity-50");
       btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>`;
   }
}
// separate 3 numbers with .
function fitPrice(element) {
    var lastChar = element.value.slice(-1);
    if (isNaN(lastChar) || lastChar == " ") {
        element.value = element.value.slice(0, -1);
    }

    var numString = String(element.value.replaceAll(".", ""));
    var separatedArray = [];
    while (numString.length > 3) {
        separatedArray.unshift(numString.slice(-3));
        numString = numString.slice(0, -3);
    }
    separatedArray.unshift(numString);
    var result = separatedArray.join(".");
    element.value = result;
}

// product dorpdown
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('SideDropdown');
    button.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
    });

});

// Seo dorpdown
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('SeoDropdown');
    button.addEventListener('click', () => {
        Seodropdown.classList.toggle('hidden');
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
// add image for articles thumbnail
document.addEventListener("DOMContentLoaded", function () {
    const mainImageInput = document.getElementById("mainImageInput");
    const mainImagePreview = document.getElementById("mainImagePreview");
    const mainImagePreviewCombined = document.getElementById("mainImagePreviewCombined");
  
    mainImageInput?.addEventListener("change", function () {
      const file = mainImageInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          mainImagePreview.src = e.target.result;
          mainImagePreviewCombined.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        mainImagePreview.src = '';
        mainImagePreviewCombined.src = '';
      }
    });
  });

  // Get all buttons with the class "my-button"
  const brandbuttons = document.querySelectorAll(".brand-button");

  // Add a click event listener to each "my-button"
  brandbuttons.forEach((button) => {
    button.addEventListener("click", function() {
      // Remove the "active" class from all "my-button" elements
      brandbuttons.forEach((btn) => {
        btn.classList.remove("activebutton");
      });

      // Add the "active" class to the clicked "my-button"
      this.classList.add("activebutton");
    });
  });
    // Get all buttons with the class "my-button"
    const categorybuttons = document.querySelectorAll(".category-button");

    // Add a click event listener to each "my-button"
    categorybuttons.forEach((button) => {
      button.addEventListener("click", function() {
        // Remove the "active" class from all "my-button" elements
        categorybuttons.forEach((btn) => {
          btn.classList.remove("activebutton");
        });
  
        // Add the "active" class to the clicked "my-button"
        this.classList.add("activebutton");
      });
    });

    // Get all buttons with the class "my-button"
    const machinebuttons = document.querySelectorAll(".machine-button") 
    // Add a click event listener to each "my-button"
    machinebuttons.forEach((button) => {
      button.addEventListener("click", function() {
        // Remove the "active" class from all "my-button" elements
        machinebuttons.forEach((btn) => {
          btn.classList.remove("activebutton");
        });

        // Add the "active" class to the clicked "my-button"
        this.classList.add("activebutton");
      });
    });

    // Get all buttons with the class "my-button"
    const machinecategorybutton = document.querySelectorAll(".machine-category-button") 
    // Add a click event listener to each "my-button"
    machinecategorybutton.forEach((button) => {
      button.addEventListener("click", function() {
        // Remove the "active" class from all "my-button" elements
        machinecategorybutton.forEach((btn) => {
          btn.classList.remove("activebutton");
        });
    
        // Add the "active" class to the clicked "my-button"
        this.classList.add("activebutton");
      });
    });

    // Get the button element by its id
    const button = document.getElementById("Googleindex");

    // Initialize a state variable
    let isOn = false;
    
    // Function to toggle the state and update the button icon
    function toggleState() {
        isOn = !isOn;
        button.innerHTML = isOn
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16"><path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16"><path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/></svg>';
    }
    
    // Add a click event listener to the button
    button?.addEventListener("click", toggleState);