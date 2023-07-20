document.querySelector('body').addEventListener('click', function(event){
    let nodeEl = event.target;
    dropdownOpen(nodeEl)
    dropdownClose(nodeEl)
    selectOpen(nodeEl)
    dellInputValue(nodeEl)
})

function dropdownOpen(e){
    if(!e.classList.contains('dropdown-button')){
        document.querySelectorAll('.dropdown').forEach(e=>{
            e.classList.remove('--is-active')
        })
        return
    }
    event.preventDefault()
    let parentNode = e.closest('.dropdown');
    let dropdownList = parentNode.querySelector('.dropdown-list')
    parentNode.classList.add('--is-active')
}

function dropdownClose(e){

    
    if(!e.classList.contains('dropdown-marcet-list__btn')){
        return
    }
    document.querySelectorAll('.dropdown').forEach(e=>{
        e.classList.remove('--is-active')
    })
    event.preventDefault()
    let parentNode = e.closest('.dropdown');
    let textContent = e.innerText;
    let dropdownItem = e.closest('.dropdown-marcet-list__item')
    parentNode.querySelectorAll('.dropdown-arrow__select').forEach(e => {
        e.classList.remove('--is-active')
    });
    dropdownItem.querySelector('.dropdown-arrow__select').classList.add('--is-active')
    parentNode.querySelector('.dropdown-button').innerText = textContent
    parentNode.classList.remove('--is-active')
}


function selectOpen(e){
    if(!e.classList.contains('select-button')){
        document.querySelectorAll('.select.--is-active').forEach(e=>{
            e.classList.remove('--is-active')
        })
        return
    }
    event.preventDefault()
    let parentNode = e.closest('.select');
    parentNode.classList.toggle('--is-active')
    
}


function dellInputValue(e){
    if(!e.classList.contains('dell-input-value')){
        return
    }
    let nodeEl = e.closest('.search-block');
    let nodeInput = nodeEl.querySelector('[type="search"]')
    if(nodeInput.value != ''){
        nodeInput.value = '';
    }
}

