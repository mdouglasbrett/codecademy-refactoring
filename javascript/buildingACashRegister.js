'use strict';

function employee(name, discount) {
	var employeeObj = {
		'name': name,
		'discount': discount
	}
	return employeeObj;
}

var sally = employee('Sally', 5);
var bob = employee('Bob', 10);
var mike = employee('Mike', 20);

var cashRegister = {
    'total': 0,
    'lastTransactionAmount': 0,
    
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    
    scan: function(item, quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    
    applyStaffDiscount : function(employee){
   	this.total -= (this.total*(employee.discount / 100));
    }
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
cashRegister.applyStaffDiscount(sally);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

cashRegister.voidLastTransaction();

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(bob);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

cashRegister.voidLastTransaction();

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(mike);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
