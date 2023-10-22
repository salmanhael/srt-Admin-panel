// add new input for part number
document.addEventListener("DOMContentLoaded", function () {
    const addInputButton = document.getElementById("addInputButton");
    const partNumberContainer = document.getElementById("partNumberContainer");
    let inputCount = 1;

    addInputButton.addEventListener("click", function () {
        if (inputCount < 4) {
            const newInput = document.createElement("input");
            newInput.type = "number";
            newInput.className = "w-full border outline-1 outline-blue-500 h-10 py-2 px-3 mt-4";
            partNumberContainer.appendChild(newInput);
            inputCount++;
            if (inputCount === 4) {
                addInputButton.style.display = "none";
            }
        }
    });
});
// add new input for picture
document.addEventListener("DOMContentLoaded", function () {
    const mainImageInput = document.getElementById("mainImageInput");
    const mainImagePreview = document.getElementById("mainImagePreview");
    const mainImagePreviewCombined = document.getElementById("mainImagePreviewCombined");
    const addInputPicture = document.getElementById("addInputPicture");
    const PictureContainer = document.getElementById("PictureContainer");
    const ImagePreviews = document.getElementById("ImagePreviews");
    let inputCount = 1;

    mainImageInput.addEventListener("change", function () {
        const file = mainImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                mainImagePreview.src = e.target.result;
                mainImagePreviewCombined.src = e.target.result; 
            };
            reader.readAsDataURL(file);
        } else {

        }
    });

    addInputPicture.addEventListener("click", function () {
        if (inputCount < 5) {
            const newInput = document.createElement("input");
            newInput.type = "file";
            newInput.className = "w-full border outline-1 outline-blue-500 mt-4";
            PictureContainer.appendChild(newInput);

            const newImagePreview = document.createElement("img");
            newImagePreview.src = "#"; 
            newImagePreview.className = "w-52 rounded-lg m-2.5";
            ImagePreviews.appendChild(newImagePreview);

            newInput.addEventListener("change", function () {
                const file = newInput.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        newImagePreview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                } else {
                    newImagePreview.src = '#'; 
                }
            });

            inputCount++;
            if (inputCount === 5) {
                addInputPicture.style.display = "none";
            }
        }
    });
});




   // Function to add a tag button to the container
    function addTag(elementId, tagName) {
      const element = document.getElementById(elementId);
      if (element) {
        const tagContainer = document.createElement('div');
        const tagButton = document.createElement('button');
        tagContainer.className = 'flex flex-row-reverse w-fit h-10 items-center bg-violet-700 m-2.5 rounded'
        tagButton.textContent = tagName;
        tagButton.className = 'tag-button p-2.5 text-white cursor-pointer';
        tagButton.onclick = function() {
          moveTagToSelected(tagButton, tagContainer);
        };
        const deleteButton = document.createElement('div');

        deleteButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill ms-2" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path></svg>';

        deleteButton.className = 'delete-button text-white cursor-pointer';
        deleteButton.onclick = function() {
          removeTagFromSelected(tagButton, tagContainer);
        };
    
        tagContainer.appendChild(tagButton);
        element.appendChild(tagContainer);
        tagContainer.appendChild(deleteButton);
      }
    }

    // Function to move a tag button to the selected tags container
    function moveTagToSelected(tagButton, tagContainer) {
      const selectedTagsContainer = document.getElementById('selectedTags');
      if (selectedTagsContainer) {
        selectedTagsContainer.appendChild(tagContainer);
      }
    }

    // Function to remove a tag button from the selected tags container
    function removeTagFromSelected(tagButton, tagContainer) {
      tagContainer.remove();
    }

    // Function to add a tag button from the input field
    function addTagFromInput() {
      const tagName = document.getElementById('tagInput').value;
      if (tagName.trim() !== '') {
        addTag('tagContainer', tagName);
        document.getElementById('tagInput').value = '';
      }
    }