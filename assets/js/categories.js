document.addEventListener('DOMContentLoaded', () => {

    const categoryList = document.querySelector("#category-list");
    const categories = categoryList.querySelectorAll("li");
    let stateCategories = (localStorage.getItem('stateCategories') != null) ? JSON.parse(localStorage.getItem('stateCategories')) : [];
    
    
    categories.forEach((category, index) => {
        const icon = category.querySelector(".my-li i");
        const dropdownList = category.querySelector(".hidden-list");
        icon.addEventListener('click', () => toggleCategory(index));
        
        setCategoryMode(stateCategories[index]);
        
        function setCategoryMode(mode) {
            dropdownList.style.display = mode;
            icon.classList = (mode == "block") ? "fa-solid fa-angle-down fa-sm" : "fa-solid fa-angle-right fa-sm";
        }
        
        function toggleCategory(index) {
            if (stateCategories[index] == "block")
                setCategoryMode("none");
            else
                setCategoryMode("block");
            stateCategories[index] = dropdownList.style.display;
            localStorage.setItem('stateCategories', JSON.stringify(stateCategories));
        }
    })
});