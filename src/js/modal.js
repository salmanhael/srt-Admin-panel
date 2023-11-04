// modals
const orderDetailsModal = document.getElementById("orderDetailsModal");
const nestedModal = document.getElementById("nestedModal");
const nestedModal2 = document.getElementById("nestedmodal2");
const editprofilemodal = document.getElementById("editprofile-modal");
const orderhistorymodal = document.getElementById("orderhistory-modal");
const userinfomodal = document.getElementById("user-info-modal");
const addaddressmodal = document.getElementById("add-address-modal");
const partnumbermodal = document.getElementById("part-number-modal");
const sellersmodal = document.getElementById("sellers-modal");
const productinfomodal = document.getElementById("product-info-modal");
const Addexistingmodal = document.getElementById("add-existing-modal");
const AddCustomizeproductmodal = document.getElementById("add-customizeproduct-modal");
const editItemModal = document.getElementById("edit-item-modal");
const Categorytextmodal = document.getElementById("Categorytext-modal");
const Commonquestionsmodal = document.getElementById("Commonquestions-modal");
const addquestionmodal = document.getElementById("addquestion-modal");
const deletequstionmodal = document.getElementById("deletequstion-modal");
const Addlistmodal = document.getElementById("addlist-modal");
const EditOperatormodal = document.getElementById("editoperator-modal");
const Addoperatormodal = document.getElementById("addoperator-modal");
const Metamodal = document.getElementById("Meta-modal");
const Groupsmodal = document.getElementById("groups-modal");
const selectgroupmodal = document.getElementById("select-group-modal");
const deletecategorymodal = document.getElementById("deletecategory-modal");
const editTagmodal = document.getElementById("editTag-modal");
const addDiscountModal = document.getElementById("add-discount-modal");
const DiscountListModal = document.getElementById("discount-list-modal");
const EditSellerModal = document.getElementById("edit-seller-modal");

// Function to open a modal
function openModal(modalElement) {
    modalElement.classList.add("show");
    modalElement.scrollTop = 0;
}

// Function to close a modal
function closeModal(element) {
    var modal = element.closest(".modal");
    modal.classList.add("hide");
    setTimeout(() => {
        modal.classList.remove("show", "hide");
    }, 900);
}

// zoom in zoom out
function clickOnOut(element, event) {
    if (event.target.lastElementChild?.classList.contains("modal_content")) {
        const modalContent = element.querySelector(".modal_content");
        if (modalContent) {
            modalContent.classList.add("zoomin");
            modalContent.classList.remove("zoomout");
            setTimeout(function () {
                modalContent.classList.add("zoomout");
                modalContent.classList.remove("zoomin");
            }, 500);
        }
    }
}

function getOrderDetailsModal(){
    openModal(orderDetailsModal)
    // show loading
    // send request
    // get data
    // hide loading
    // replace data
}

function getNestedModal(){
    openModal(nestedModal)
}

function getNestedModal2(){
    openModal(nestedModal2)
}
function getEditprofileModal(){
    openModal(editprofilemodal)
}

function getOrderhistoryModal(){
    openModal(orderhistorymodal)
}
function getUserinfoModal(){
    openModal(userinfomodal)
}
function getAddaddressModal(){
    openModal(addaddressmodal)
}
function getPartnumberModal(){
    openModal(partnumbermodal)
}
function getSellersModal(){
    openModal(sellersmodal)
}
function getProductinfoModal(){
    openModal(productinfomodal)
}
function getAddexistingModal(){
    openModal(Addexistingmodal)
}
function getAddCustomizeproductModal(){
    openModal(AddCustomizeproductmodal)
}
function getEditItemModal(){
    openModal(editItemModal)
}
function getCategorytextModal(){
    openModal(Categorytextmodal)
}
function getCommonquestionsModal(){
    openModal(Commonquestionsmodal)
}
function getAddquestionModal(){
    openModal(addquestionmodal)
}
function getDeletequstionModal(){
    openModal(deletequstionmodal)
}
function getEditSellerModal(){
    openModal(EditSellerModal)
}
function getAddDiscountModal(){
    openModal(addDiscountModal)
}
function getDiscountListModal(){
    openModal(DiscountListModal)
}
function getAddlistmodal(){
    openModal(Addlistmodal)
}
function getAddoperatorModal(){
    openModal(Addoperatormodal)
}
function getEditOperatorModal(){
    openModal(EditOperatormodal)
}
function getMetaModal(){
    openModal(Metamodal)
}
function getGroupsModal(){
    openModal(Groupsmodal)
}
function getDeletecategoryModal(){
    openModal(deletecategorymodal)
}
function getSelectgroupModal(){
    openModal(selectgroupmodal)
}
function getEditTagModal(){
    openModal(editTagmodal)
}