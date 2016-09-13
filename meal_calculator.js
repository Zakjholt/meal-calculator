var Diner = {
    name: "",
    dishes: {},
    total: function() {
        var total = 0;
        for (var i in this.dishes) {
            total += this.dishes[i];
        }
        return total;
    },
    tax: function(taxPercent, dishes) {
        return (taxPercent / 100) * this.total(dishes);
    },
    tip: function(taxPercent, tipPercent, dishes) {
        return (tipPercent / 100) * (this.total(dishes) + this.tax(taxPercent, dishes));
    }
};

var Bill = {
    diners: [],
    totalDiners: function(diners, taxPercent) {
        var total = 0;
        for (var i = 0; i < diners.length; i++) {
            total += diners[i].total(this.dishes) + diners[i].tax(taxPercent, this.dishes);
        }
        console.log(total);
    },
    totalTips: function(diners, taxPercent, tipPercent) {
        var total = 0;
        for (var i = 0; i < diners.length; i++) {
            total += diners[i].tip(taxPercent, tipPercent, this.dishes);
        }
        console.log(total);
    },
    individualBill: function(diners, taxPercent, tipPercent) {
        var dinerTotal = 0;
        var dinerTax = 0;
        var dinerTip = 0;
        for (var i = 0; i < diners.length; i++) {
            dinerTotal = diners[i].total(this.dishes);
            dinerTax = diners[i].tax(taxPercent, this.dishes);
            dinerTip = diners[i].tip(taxPercent, tipPercent, this.dishes);
            console.log(i, dinerTotal, dinerTax, dinerTip);
        }
    }
};

var diner1 = Object.create(Diner);

diner1.name = "Zak";

diner1.dishes = {
    spaghetti: 10.50,
    soda: 2.50
};

var diner2 = Object.create(Diner);

diner2.name = "Lauren";

diner2.dishes = {
    pineapples: 5.00,
    water: 0,
};

var diner3 = Object.create(Diner);

diner3.name = "Corey";

diner3.dishes = {
    cheesesteak: 10.00,
    soda: 2.50
};

var newBill = Object.create(Bill);

newBill.diners.push(diner1);
newBill.diners.push(diner2);
newBill.diners.push(diner3);

newBill.totalDiners(newBill.diners, 7);

newBill.totalTips(newBill.diners, 6, 20);

newBill.individualBill(newBill.diners, 6, 20);
