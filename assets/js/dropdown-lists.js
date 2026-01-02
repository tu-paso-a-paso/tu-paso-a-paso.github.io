document.addEventListener('DOMContentLoaded', () => {

    const dropdownItem = document.querySelectorAll(".fa-dropdown-list li");
    let stateItems = (localStorage.getItem('stateItems') != null) ? JSON.parse(localStorage.getItem('stateItems')) : [];
    
    dropdownItem.forEach((category, index) => {
        const icon = category.querySelector(".i-btn i");
        const dropdownList = category.querySelector(".hidden-list");
        icon.addEventListener('click', () => toggleCategory(index));
        
        setCategoryMode(stateItems[index]);
        
        function setCategoryMode(mode) {
            dropdownList.style.display = mode;
            icon.classList = "fa-solid fa-angle-" + ((mode == "block") ? "down" : "right") + " fa-sm";
        }
        
        function toggleCategory(index) {
            if (stateItems[index] == "block")
                setCategoryMode("none");
            else
                setCategoryMode("block");
            stateItems[index] = dropdownList.style.display;
            localStorage.setItem('stateItems', JSON.stringify(stateItems));
        }
    })
});