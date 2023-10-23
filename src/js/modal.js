document.addEventListener('DOMContentLoaded', function () {
    // Function to open a modal
    function openModal(modalElement) {
        modalElement.classList.add('show');
    }

    // Function to close a modal
    function closeModal(modalElement) {
        modalElement.classList.add('hide');
        setTimeout(() => {
            modalElement.classList.remove('show', 'hide');
        }, 900);
    }

    // Main modal
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButtons = [document.getElementById('closeModal'), document.getElementById('closemodalBtn')];

    // Nested modal
    const nestedModal = document.getElementById('nestedModal');
    const openNestedModalBtn = document.getElementById('openNestedModalBtn');
    const closeNestedModalButtons = [document.getElementById('closeNestedModalBtn'), document.getElementById('closeNestedmodal')];

    // Nested modal 2
    const nestedModal2 = document.getElementById('nestedmodal2');
    const openNestedModal2Btn = document.getElementById('openNestedModal2Btn');
    const closeNestedModal2Buttons = [document.getElementById('closenestedModal2'), document.getElementById('closeNestedModal2Btn')];

    // edit user profile modal
    const editprofilemodal = document.getElementById('editprofile-modal');
    const openeditprofile = document.getElementById("open-editprofile");
    const closeEditmodalButtons = [document.getElementById('closeEditmodal'), document.getElementById('closeEditmodalBtn')];

    // order history modal
    const orderhistorymodal = document.getElementById('orderhistory-modal');
    const openorderhistory = document.getElementById("open-orderHistory");
    const closeHistoryButtons = [document.getElementById('closeHistorymodal')];

    // user info modal
    const openuserinfo = document.getElementById("open-userInfo");
    const userinfomodal = document.getElementById("user-info-modal");
    const closeinfomodalButtons = [document.getElementById('closeInfomodal')];

    // add address modal
    const openAddress = document.getElementById("open-Address");
    const addaddressmodal = document.getElementById("add-address-modal");
    const closeAddressButtons = [document.getElementById('closeAddress'), document.getElementById('closeAddressBtn')];

    // part number modal
    const openpartnumber = document.getElementById("open-partnumber");
    const partnumbermodal = document.getElementById("part-number-modal");
    const closepartmodalButton = [document.getElementById('closePartmodal')];

    // seller modal
    const opensellers = document.getElementById("open-sellers");
    const sellersmodal = document.getElementById("sellers-modal");
    const closeSellermodalButton = [document.getElementById('closeSellermodal')];

    // product info
    const openproductinfo = document.getElementById("open-productinfo");
    const productinfomodal = document.getElementById("product-info-modal");
    const closeProductmodalButton = [document.getElementById('closeProductmodal')];
    // Event listeners
    openModalButton?.addEventListener('click', () => openModal(modal));
    openNestedModalBtn?.addEventListener('click', () => openModal(nestedModal));
    openNestedModal2Btn?.addEventListener('click', () => openModal(nestedModal2));
    openeditprofile?.addEventListener('click', () => openModal(editprofilemodal));
    openorderhistory?.addEventListener('click', () => openModal(orderhistorymodal));
    openuserinfo?.addEventListener('click', () => openModal(userinfomodal));
    openAddress?.addEventListener('click', () => openModal(addaddressmodal));
    openpartnumber?.addEventListener('click', () => openModal(partnumbermodal));
    opensellers?.addEventListener('click', () => openModal(sellersmodal));
    openproductinfo?.addEventListener('click', () => openModal(productinfomodal));

    closeModalButtons.forEach((button) => button?.addEventListener('click', () => closeModal(modal)));
    closeNestedModalButtons.forEach((button) => button?.addEventListener('click', () => closeModal(nestedModal)));
    closeNestedModal2Buttons.forEach((button) => button?.addEventListener('click', () => closeModal(nestedModal2)));
    closeEditmodalButtons.forEach((button) => button?.addEventListener('click', () => closeModal(editprofilemodal)));
    closeHistoryButtons.forEach((button) => button?.addEventListener('click', () => closeModal(orderhistorymodal)));
    closeinfomodalButtons.forEach((button) => button?.addEventListener('click', () => closeModal(userinfomodal)));
    closeAddressButtons.forEach((button) => button?.addEventListener('click', () => closeModal(addaddressmodal)));
    closepartmodalButton.forEach((button) => button?.addEventListener('click', () => closeModal(partnumbermodal)));
    closeSellermodalButton.forEach((button) => button?.addEventListener('click', () => closeModal(sellersmodal)));
    closeProductmodalButton.forEach((button) => button?.addEventListener('click', () => closeModal(productinfomodal)));
});



// function for zoom in and out modal
document.addEventListener('DOMContentLoaded', function () {
    function applyZoomEffect(target, contentClass) {
        const modalContent = target.querySelector(`.${contentClass}`);
        modalContent.classList.add("zoomin");
        modalContent.classList.remove("zoomout");
        setTimeout(function () {
            modalContent.classList.add("zoomout");
            modalContent.classList.remove("zoomin");
        }, 500);
    }


    const modalElements = [
        { triggerId: 'modal-out', contentClass: 'modal-content' },
        { triggerId: 'nested-out', contentClass: 'nested-content' },
        { triggerId: 'editprofile-out', contentClass: 'editprofile-content' },
        { triggerId: 'orderhistory-out', contentClass: 'orderhistory-content' },
        { triggerId: 'user-info-out', contentClass: 'user-info-content' },
        { triggerId: 'add-address-out', contentClass: 'add-address-content' },
        { triggerId: 'part-number-out', contentClass: 'part-number-content' },
        { triggerId: 'sellers-out', contentClass: 'sellers-content' },
        { triggerId: 'product-info-out', contentClass: 'product-info-content' },
    ];

    modalElements.forEach(element => {
        const trigger = document.getElementById(element.triggerId);
        if (trigger) {
            trigger.addEventListener('click', event => {
                if (event.target === trigger) { 
                    applyZoomEffect(trigger, element.contentClass);
                }
            });
        }
    });
});

