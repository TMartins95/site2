class FormData {
    constructor(transactionID, clientID, bearerToken, serviceEntity) {
        this.transactionID = transactionID;
        this.clientID = clientID;
        this.bearerToken = bearerToken;
        this.serviceEntity = serviceEntity;
    }
}

class FormDataCollection {
    constructor() {
        this.data = this.loadFromLocalStorage() || [];
    }

    addData(transactionID, clientID, bearerToken, serviceEntity) {
        const formData = new FormData(transactionID, clientID, bearerToken, serviceEntity);
        this.data.push(formData);
        this.saveToLocalStorage();
    }

    getAllData() {
        return this.data;
    }

    saveToLocalStorage() {
        localStorage.setItem('formDataCollection', JSON.stringify(this.data));
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('formDataCollection');
        return data ? JSON.parse(data) : [];
    }
}

const formDataCollection = new FormDataCollection();

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos inputs
    const transactionID = document.getElementById('transaction_id').value;
    const clientID = document.getElementById('client_id').value;
    const bearerToken = document.getElementById('bearer_token').value;
    const serviceEntity = document.getElementById('service_entity').value;

    // Adiciona os dados à coleção
    formDataCollection.addData(transactionID, clientID, bearerToken, serviceEntity);

    alert('Dados armazenados na classe e no localStorage!');
});

document.getElementById('showData').addEventListener('click', function() {
    const allData = formDataCollection.getAllData();
    const dataDisplay = document.getElementById('dataDisplay');
    
    // Exibe os dados armazenados
    dataDisplay.textContent = JSON.stringify(allData, null, 2);
});
