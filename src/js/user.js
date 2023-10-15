    document.addEventListener('DOMContentLoaded', function () {    

    // main modal
    const outside = document.getElementById('modal-out');
    // nested modal
    const nestedout = document.getElementById('nested-out');
    // nested modal 2 
    const nestedout2 = document.getElementById('nested-out2');
    const nestedModal2 = document.getElementById("nestedmodal2");
    // change user status modal
    const openstatus = document.getElementById("openstatus");
    const closeusermodal = document.getElementById("closeusermodal");
    const closeusermodalBtn = document.getElementById("closeusermodalBtn");
    const userstatus = document.getElementById('userstatus-modal');
    const userstatusout = document.getElementById('userstatus-out');
    // edit user profile modal
    const openeditprofile = document.getElementById("open-editprofile");
    const editprofilemodal = document.getElementById("editprofile-modal");
    const closeEditmodal = document.getElementById("closeEditmodal");
    const closeEditmodalBtn = document.getElementById("closeEditmodalBtn");
    const editOut = document.getElementById("editprofile-out");
    // order history modal
    const openorderhistory = document.getElementById("open-orderHistory");
    const orderhistorymodal = document.getElementById("orderhistory-modal");
    const closeHistorymodal = document.getElementById("closeHistorymodal");
    const orderhistoryout = document.getElementById("orderhistory-out");
    // user info modal
    const openuserinfo = document.getElementById("open-userInfo");
    const userinfomodal = document.getElementById("user-info-modal");
    const closeinfomodal = document.getElementById("closeInfomodal");
    const userinfoout = document.getElementById("user-info-out");
    // add address modal
    const openAddress = document.getElementById("open-Address");
    const addaddressmodal = document.getElementById("add-address-modal");
    const closeAddress = document.getElementById("closeAddress");
    const closeAddressBtn = document.getElementById("closeAddressBtn");
    const addaddressout = document.getElementById("add-address-out");
    

    //  open modal
    openstatus.addEventListener('click', function () {
        userstatus.classList.add('show');
    });
    openeditprofile.addEventListener('click', function () {
        editprofilemodal.classList.add('show');
    });
    openorderhistory.addEventListener('click', function () {
        orderhistorymodal.classList.add('show');
    });
    openuserinfo.addEventListener('click', function () {
        userinfomodal.classList.add('show');
    });
    openAddress.addEventListener('click', function () {
        addaddressmodal.classList.add('show');
    });

    // close modal

    // close user status modal
    function closeStatus() {
        userstatus.classList.add('hide');
        setTimeout(() => {
            userstatus.classList.remove('show');
            userstatus.classList.remove('hide');
        }, 900);
    }
    closeusermodal.addEventListener('click', closeStatus);
    closeusermodalBtn.addEventListener('click', closeStatus);

    // close edit user profile modal
    function closeEditprofile() {
        editprofilemodal.classList.add('hide');
        setTimeout(() => {
            editprofilemodal.classList.remove('show');
            editprofilemodal.classList.remove('hide');
        }, 900);
    }
    closeEditmodal.addEventListener('click', closeEditprofile);
    closeEditmodalBtn.addEventListener('click', closeEditprofile);

    // close order history modal
    function closeorderHistory() {
        orderhistorymodal.classList.add('hide');
        setTimeout(() => {
            orderhistorymodal.classList.remove('show');
            orderhistorymodal.classList.remove('hide');
        }, 900);
    }
    closeHistorymodal.addEventListener('click', closeorderHistory);

    // close user info modal
    function closeuserInfo() {
        userinfomodal.classList.add('hide');
     setTimeout(() => {
        userinfomodal.classList.remove('show');
        userinfomodal.classList.remove('hide');
     }, 900);
    }
    closeinfomodal.addEventListener('click', closeuserInfo);

    // close add address modal
    function closesaddress() {
        addaddressmodal.classList.add('hide');
    setTimeout(() => {
        addaddressmodal.classList.remove('show');
        addaddressmodal.classList.remove('hide');
    }, 900);
    }
    closeAddress.addEventListener('click', closesaddress);
    closeAddressBtn.addEventListener('click', closesaddress);   
    
    // --------------------------------------------------------------

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
        if (event.target == editOut) {
            editOut.querySelector(".editprofile-content").classList.add("zoomin");
            editOut.querySelector(".editprofile-content").classList.remove("zoomout");
            setTimeout(function() {
                editOut.querySelector(".editprofile-content").classList.add("zoomout");
                editOut.querySelector(".editprofile-content").classList.remove("zoomin");
            }, 500);
        }
        if (event.target == orderhistoryout) {
            orderhistoryout.querySelector(".orderhistory-content").classList.add("zoomin");
            orderhistoryout.querySelector(".orderhistory-content").classList.remove("zoomout");
            setTimeout(function() {
                orderhistoryout.querySelector(".orderhistory-content").classList.add("zoomout");
                orderhistoryout.querySelector(".orderhistory-content").classList.remove("zoomin");
            }, 500);
        }
        if (event.target == userinfoout) {
            userinfoout.querySelector(".user-info-content").classList.add("zoomin");
            userinfoout.querySelector(".user-info-content").classList.remove("zoomout");
            setTimeout(function() {
                userinfoout.querySelector(".user-info-content").classList.add("zoomout");
                userinfoout.querySelector(".user-info-content").classList.remove("zoomin");
            }, 500);
        }
        if (event.target == addaddressout) {
            addaddressout.querySelector(".add-address-content").classList.add("zoomin");
            addaddressout.querySelector(".add-address-content").classList.remove("zoomout");
            setTimeout(function() {
                addaddressout.querySelector(".add-address-content").classList.add("zoomout");
                addaddressout.querySelector(".add-address-content").classList.remove("zoomin");
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
});