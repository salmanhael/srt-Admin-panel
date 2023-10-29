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

    // product info
    const openaddExistingproduct = document.getElementById("open-addexistingproduct");
    const Addexistingmodal = document.getElementById("add-existing-modal");
    const closeAddExistingButtons = [document.getElementById('closeAddExistingproduct'), document.getElementById('closeAddExistingproductBtn')];

    // product info
    const openCustomizeProduct = document.getElementById("open-customizeproduct");
    const AddCustomizeproductmodal = document.getElementById("add-customizeproduct-modal");
    const CloseCustomizeProductButtons = [document.getElementById('closecustomizeproduct'), document.getElementById('customizeproductBtn')];

    // edit item modal
    const openedititem = document.getElementById("open-edit-item");
    const editItemModal = document.getElementById("edit-item-modal");
    const closeEdititemButtons = [document.getElementById('close-Edititem'), document.getElementById('close-EdititemBtn')];

    // Category text modal
    const OpenCategorytext = document.getElementById("Open-Category-text");
    const Categorytextmodal = document.getElementById("Categorytext-modal");
    const closeCategorytextButtons = [document.getElementById('closeCategorytextmodal'), document.getElementById('closeCategorytextmodalBtn')];
    
    // Category text modal
    const OpenCommonQuestions = document.getElementById("Open-Common-Questions");
    const Commonquestionsmodal = document.getElementById("Commonquestions-modal");
    const closeQuestionsmodal = [document.getElementById('closeQuestionsmodal')];

    // Category text modal
    const openaddquestion = document.getElementById("open-add-question");
    const addquestionmodal = document.getElementById("addquestion-modal");
    const closeAddquestionButtons = [document.getElementById('closeAddquestion'), document.getElementById('closecloseAddquestionBtn')];

    // delete common question modal
    const openDeletequstion = document.getElementById("open-deletequstion");
    const deletequstionmodal = document.getElementById("deletequstion-modal");
    const closeDeleteQButtons = [document.getElementById('closeDeleteQ'), document.getElementById('closeDeleteQBtn')];

    // add new list modal
    const openAddlist = document.getElementById("open-addlist");
    const Addlistmodal = document.getElementById("addlist-modal");
    const closeAddlistButtons = [document.getElementById('closeAddlistmodal'), document.getElementById('closeAddlistmodalBtn')];

    // edit operator profile modal
    const OpenEditOperator = document.getElementById("open-EditOperator");
    const EditOperatormodal = document.getElementById("editoperator-modal");
    const closeOperatorButtons = [document.getElementById('closeOperatormodal'), document.getElementById('closeOperatormodalBtn')];

    // edit operator profile modal
    const openAddOperator = document.getElementById("open-addoperator");
    const Addoperatormodal = document.getElementById("addoperator-modal");
    const closeAddOperatorButtons = [document.getElementById('closeAddOperatormodal'), document.getElementById('closeAddOperatormodalBtn')];

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
    openaddExistingproduct?.addEventListener('click', () => openModal(Addexistingmodal));
    openCustomizeProduct?.addEventListener('click', () => openModal(AddCustomizeproductmodal));
    openedititem?.addEventListener('click', () => openModal(editItemModal));
    OpenCategorytext?.addEventListener('click', () => openModal(Categorytextmodal));
    OpenCommonQuestions?.addEventListener('click', () => openModal(Commonquestionsmodal));
    openaddquestion?.addEventListener('click', () => openModal(addquestionmodal));
    openDeletequstion?.addEventListener('click', () => openModal(deletequstionmodal));
    openAddlist?.addEventListener('click', () => openModal(Addlistmodal));
    OpenEditOperator?.addEventListener('click', () => openModal(EditOperatormodal));
    openAddOperator?.addEventListener('click', () => openModal(Addoperatormodal));

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
    closeAddExistingButtons.forEach((button) => button?.addEventListener('click', () => closeModal(Addexistingmodal)));
    CloseCustomizeProductButtons.forEach((button) => button?.addEventListener('click', () => closeModal(AddCustomizeproductmodal)));
    closeEdititemButtons.forEach((button) => button?.addEventListener('click', () => closeModal(editItemModal)));
    closeCategorytextButtons.forEach((button) => button?.addEventListener('click', () => closeModal(Categorytextmodal)));
    closeQuestionsmodal.forEach((button) => button?.addEventListener('click', () => closeModal(Commonquestionsmodal)));
    closeAddquestionButtons.forEach((button) => button?.addEventListener('click', () => closeModal(addquestionmodal)));
    closeDeleteQButtons.forEach((button) => button?.addEventListener('click', () => closeModal(deletequstionmodal)));
    closeAddlistButtons.forEach((button) => button?.addEventListener('click', () => closeModal(Addlistmodal)));
    closeOperatorButtons.forEach((button) => button?.addEventListener('click', () => closeModal(EditOperatormodal)));
    closeAddOperatorButtons.forEach((button) => button?.addEventListener('click', () => closeModal(Addoperatormodal)));
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
        { triggerId: 'add-existing-out', contentClass: 'add-existing-content' },
        { triggerId: 'add-customizeproduct-out', contentClass: 'add-customizeproduct-content' },
        { triggerId: 'edit-item-out', contentClass: 'edit-item-content' },
        { triggerId: 'Categorytext-out', contentClass: 'Categorytext-content' },
        { triggerId: 'Commonquestions-out', contentClass: 'Commonquestions-content' },
        { triggerId: 'addquestion-out', contentClass: 'addquestion-content' },
        { triggerId: 'deletequstion-out', contentClass: 'deletequstion-content' },
        { triggerId: 'addlist-out', contentClass: 'addlist-content' },
        { triggerId: 'editoperator-out', contentClass: 'editoperator-content' },
        { triggerId: 'addoperator-out', contentClass: 'addoperator-content' },
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

