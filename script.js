// SOLUTION - 1
class restaurantManager {
    
    //restaurent_List_Array :
    restaurantList = [{
        id: 1, restaurant_Name: "Domino's", restaurant_Address: "kasana Tower", restaurant_City: "Noida",
    },
    {
        id: 2, restaurant_Name: "Burger king", restaurant_Address: "kaushambi", restaurant_City: "Ghaziabad",
    },
    {
        id: 3, restaurant_Name: "KFC", restaurant_Address: "PVR Plaza", restaurant_City: "Meerut",

    },
    {
        id: 4, restaurant_Name: "Vango", restaurant_Address: "DLF Mall", restaurant_City: "Delhi",
    },
    {
        id: 5, restaurant_Name: "Barista", restaurant_Address: "Ashok Nagar", restaurant_City: "Sonipat",
    }]
    //Function
    print_All_Restaurant_Names() {
        return this.restaurantList.forEach(
            function (restro) {
                console.log(restro.restaurant_Name);
            });
    }
    //Function
    filter_Restaurant_By_City = (restaurant_City) => {
        console.log(this.restaurantList.filter(list => list.restaurant_City == restaurant_City));
    }

}

let restaurant_list_Onconsole = new restaurantManager();
//1.a print_All_Restaurant_Names
restaurant_list_Onconsole.print_All_Restaurant_Names();

//1.b print_All_Restaurant_Names
restaurant_list_Onconsole.filter_Restaurant_By_City("Meerut");



