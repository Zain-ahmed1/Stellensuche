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



// Payment Price Tabs Function
const TabContainer = document.querySelector(".tabs");
const Tabs = TabContainer.querySelectorAll(".tab"); // Change .querySelectorAll(".tab") to .querySelectorAll(".tabs .tab")
const ActiveTab = TabContainer.querySelector(".tab-active"); // Change .querySelector(".tab-active") to .querySelector(".tabs .tab-active")
const MonthlyPrice = document.querySelectorAll(".monthly-price");
const YearlyPrice = document.querySelectorAll(".yearly-price");

Tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        // Remove the 'active' class from all tabs
        Tabs.forEach((tab) => {
            tab.classList.remove("active");
        });

        // Add the 'active' class to the clicked tab
        tab.classList.add("active");

        // Update the border radius class for the active tab
        updateBorderRadiusClass(tab);

        // Get the left position of the clicked tab
        const leftPosition = tab.offsetLeft;

        // Set the left position of ActiveTab to match the clicked tab
        ActiveTab.style.left = `${leftPosition}px`;

        // Show/hide price sections based on the clicked tab index
        const tabIndex = Array.from(Tabs).indexOf(tab);
        if (tabIndex === 0) {
            // First tab (index 0) is for monthly
            MonthlyPrice.forEach(price => price.style.display = "flex");
            YearlyPrice.forEach(price => price.style.display = "none");
        } else {
            // Other tabs are for yearly
            MonthlyPrice.forEach(price => price.style.display = "none");
            YearlyPrice.forEach(price => price.style.display = "flex");
        }
    });
});

// Function to update border radius class based on the position of the clicked tab
function updateBorderRadiusClass(clickedTab) {
    const lastTab = Tabs[Tabs.length - 1];

    // Remove 'right-tab' class from ActiveTab
    ActiveTab.classList.remove("right-tab");

    // Add 'right-tab' class if the clicked tab is the last one
    if (clickedTab === lastTab) {
        ActiveTab.classList.add("right-tab");
    }
}
