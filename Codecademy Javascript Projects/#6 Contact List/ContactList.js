

var friends = new Object();

    friends.bill= new Object();
    friends.bill.firstName = "Bill";
    friends.bill.lastName = "Gates";
    friends.bill.number = "206-555-5555";
    friends.bill.address = ['1111', 'Some Address', 'Seattle', 'WA', '66666'];
    friends.steve= new Object();
    friends.steve.firstName = "Steve";
    friends.steve.lastName = "Jobs";
    friends.steve.number ="415-666-6666";
    friends.steve.address = ['2222', 'Sweet Paradise', 'Cupertino', 'CA', '99999'];
var list = function (object) {
    for (var key in object) {
        console.log(key);
    }
};

var search = function(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
        }
    }
};

list (friends);
search ('Bill');