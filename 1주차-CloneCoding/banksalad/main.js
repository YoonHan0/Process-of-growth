const category_list = document.querySelector('.category_in_list_1');
const category = document.querySelector('.category');
const category_a = category.querySelector('a');

category_a.addEventListener("mouseover", ()=>{
    category_list.style.display = 'flex';
});
category_a.addEventListener("mouseout", ()=>{

    category_list.addEventListener("mouseout", ()=>{
        category_list.style.display = 'none';
    });
});
// 