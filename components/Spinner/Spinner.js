class Spinner{

    handlerClear(){
        ROOT_SPINNER.innerHTML='';
    }

    render(){
        const html = `
        <div class="spinner-container">
            <div class="spinner-loader"></div>
        </div>
        `;

        ROOT_SPINNER.innerHTML = html;

    }

}

const spinnerPage = new Spinner();