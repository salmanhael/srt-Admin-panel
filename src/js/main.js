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
    product.classList.toggle("pointer-events-none");
    dropdown.classList.add("hidden");

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
    product.classList.remove("pointer-events-none");
    setting.classList.remove("respnsive-settings");
    banner.classList.remove("logo");
    mainSidebar.classList.remove("hideSidebar");
    overlay.style.display = "block";
}
function closeSidebar() {
    mainSidebar.classList.remove("showSidebar");
    product.classList.add("pointer-events-none");
    setting.classList.toggle("respnsive-settings");
    banner.classList.toggle("logo");
    mainSidebar.classList.toggle("hideSidebar");
    overlay.style.display = "none";
}

function handleResize() {
    mainSidebar.classList.remove("showSidebar");
    product.classList.add("pointer-events-none");
    dropdown.classList.add("hidden")
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
            product.classList.remove("pointer-events-none");
        }
        else {
            setting.classList.add('settings');
            sidebar.classList.add('closeSidebar');
            product.classList.add("pointer-events-none");
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

// // product dorpdown
// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById('SideDropdown');
//     button.addEventListener('click', () => {
//         dropdown.classList.toggle('hidden');
//     });

// });

// // add new input for part number
// document.addEventListener("DOMContentLoaded", function () {
//     const addInputButton = document.getElementById("addInputButton");
//     const partNumberContainer = document.getElementById("partNumberContainer");
//     let inputCount = 1;

//     addInputButton.addEventListener("click", function () {
//         if (inputCount < 4) {
//             const newInput = document.createElement("input");
//             newInput.type = "number";
//             newInput.className = "w-full border outline-1 outline-blue-500 h-10 py-2 px-3 mt-4";
//             partNumberContainer.appendChild(newInput);
//             inputCount++;
//             if (inputCount === 4) {
//                 addInputButton.style.display = "none";
//             }
//         }
//     });
// });
// // add new input for picture
// document.addEventListener("DOMContentLoaded", function () {
//     const mainImageInput = document.getElementById("mainImageInput");
//     const mainImagePreview = document.getElementById("mainImagePreview");
//     const mainImagePreviewCombined = document.getElementById("mainImagePreviewCombined");
//     const addInputPicture = document.getElementById("addInputPicture");
//     const PictureContainer = document.getElementById("PictureContainer");
//     const ImagePreviews = document.getElementById("ImagePreviews");
//     let inputCount = 1;

//     mainImageInput.addEventListener("change", function () {
//         const file = mainImageInput.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 mainImagePreview.src = e.target.result;
//                 mainImagePreviewCombined.src = e.target.result; // Display main image in the combined previews
//             };
//             reader.readAsDataURL(file);
//         } else {

//         }
//     });

//     addInputPicture.addEventListener("click", function () {
//         if (inputCount < 5) {
//             const newInput = document.createElement("input");
//             newInput.type = "file";
//             newInput.className = "w-full border outline-1 outline-blue-500 mt-4";
//             PictureContainer.appendChild(newInput);

//             const newImagePreview = document.createElement("img");
//             newImagePreview.src = "#"; // Set initial source to an empty image
//             newImagePreview.className = "w-52 rounded-lg m-2.5";
//             ImagePreviews.appendChild(newImagePreview);

//             newInput.addEventListener("change", function () {
//                 const file = newInput.files[0];
//                 if (file) {
//                     const reader = new FileReader();
//                     reader.onload = function (e) {
//                         newImagePreview.src = e.target.result;
//                     };
//                     reader.readAsDataURL(file);
//                 } else {
//                     newImagePreview.src = '#'; // Handle the case when no file is selected
//                 }
//             });

//             inputCount++;
//             if (inputCount === 5) {
//                 addInputPicture.style.display = "none";
//             }
//         }
//     });
// });




//    // Function to add a tag button to the container
//     function addTag(elementId, tagName) {
//       const element = document.getElementById(elementId);
//       if (element) {
//         const tagContainer = document.createElement('div');
//         const tagButton = document.createElement('button');
//         tagContainer.className = 'flex flex-row-reverse w-fit h-10 items-center bg-violet-700 m-2.5 rounded'
//         tagButton.textContent = tagName;
//         tagButton.className = 'tag-button p-2.5 text-white cursor-pointer';
//         tagButton.onclick = function() {
//           moveTagToSelected(tagButton, tagContainer);
//         };
//         const deleteButton = document.createElement('div');

//         // Insert the provided SVG as HTML content for removing tags
//         deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill ms-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg>';

//         deleteButton.className = 'delete-button text-white cursor-pointer';
//         deleteButton.onclick = function() {
//           removeTagFromSelected(tagButton, tagContainer);
//         };
    
//         tagContainer.appendChild(tagButton);
//         element.appendChild(tagContainer);
//         tagContainer.appendChild(deleteButton);
//       }
//     }

//     // Function to move a tag button to the selected tags container
//     function moveTagToSelected(tagButton, tagContainer) {
//       const selectedTagsContainer = document.getElementById('selectedTags');
//       if (selectedTagsContainer) {
//         selectedTagsContainer.appendChild(tagContainer);
//       }
//     }

//     // Function to remove a tag button from the selected tags container
//     function removeTagFromSelected(tagButton, tagContainer) {
//       tagContainer.remove();
//     }

//     // Function to add a tag button from the input field
//     function addTagFromInput() {
//       const tagName = document.getElementById('tagInput').value;
//       if (tagName.trim() !== '') {
//         addTag('tagContainer', tagName);
//         document.getElementById('tagInput').value = ''; // Clear the input field
//       }
//     }




document.addEventListener("DOMContentLoaded", function () {
    const addDetail = document.getElementById("addDetail");
    const container = document.getElementById("details-container");
    let detailCount = 1;
    
    addDetail.addEventListener("click", function () {
        if (detailCount < 4) { 
            const newDiv = document.createElement("div");
            newDiv.className = "flex flex-row-reverse justify-between items-center mb-4";
            const newInput1 = document.createElement("input");
            newInput1.type = "text";
            newInput1.className = "border w-64 outline-1 outline-blue-500 h-10 py-2 px-3 text-center rounded";
            const newInput2 = document.createElement("input");
            newInput2.type = "text";
            newInput2.className = "border w-64 bg-gray-200 text-gray-500 h-10 py-2 px-3 text-center rounded focus:bg-white focus:outline-blue-500";
            newInput2.placeholder = "عنوان";
            newDiv.appendChild(newInput1);
            newDiv.appendChild(newInput2);
            container.appendChild(newDiv);
            detailCount++;
            
            if (detailCount === 4) {
                addDetail.style.display = "none";
            }
        }
    });
});