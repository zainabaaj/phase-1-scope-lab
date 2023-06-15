var customerName = 'bob';

function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
        return customerName;
    } else {
        return "Customer name is not defined.";
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
    throw new Error("Assignment to constant variable.");
}
