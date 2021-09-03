function render(){
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();


}

spinnerPage.render();
let CATALOG = [];


fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        setTimeout(()=>{
            spinnerPage.handlerClear();
            render();
        }, 1000);

})
    .catch(err => {
        spinnerPage.handlerClear();
        errorPage.render();
    });