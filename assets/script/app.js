// Adjust scrollbar position by setting scrollLeft property

document.addEventListener("DOMContentLoaded", function () {
    const selectWrappers = document.querySelectorAll('.select-wrapper');

    selectWrappers.forEach(selectWrapper => {
        const select = selectWrapper.querySelector('.select');
        const selectSelected = select.querySelector('.select-selected');
        const selectArrow = select.querySelector('.select-arrow');
        const selectOptions = select.querySelector('.select-options');
        const selectOptionElements = Array.from(select.querySelectorAll('.select-option'));
        const selectedOptionInput = selectWrapper.querySelector('.selected-option');

        // Toggle select options visibility and arrow rotation
        selectSelected.addEventListener('click', function () {
            select.classList.toggle('select-open');
            selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
        });

        // Handle option selection
        selectOptionElements.forEach(option => {
            option.addEventListener('click', function () {
                const value = this.getAttribute('data-value');
                const text = this.textContent;
                selectSelected.textContent = text;
                if (selectedOptionInput) {
                    selectedOptionInput.value = value;
                }
                selectOptions.style.display = 'none'; // Close the options after selection
                select.classList.remove('select-open');
                selectSelected.classList.add('selected');
            });
        });

        // Close select options when clicking outside
        document.addEventListener('click', function (event) {
            if (!select.contains(event.target)) {
                selectOptions.style.display = 'none';
                select.classList.remove('select-open');
            }
        });
    });

    const selectContainer = document.querySelector(".select-container");
    
    document.querySelectorAll(".filter").forEach((Filter) => {
        Filter.addEventListener('click', function () {
            selectContainer.classList.toggle('selectOpen'); // Toggle the 'selectOpen' class

            // Prevent event propagation to avoid immediate hiding of the select container
            event.stopPropagation();
        })

        // Close select options when clicking outside
        document.addEventListener('click', function (event) {
            // Check if select container is visible and the click is outside of it
            if (selectContainer.classList.contains('selectOpen') && !selectContainer.contains(event.target)) {
                selectContainer.classList.remove('selectOpen'); // Remove the class to hide the select container
            }
        });

    });
});
