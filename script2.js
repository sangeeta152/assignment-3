        // SOLUTION - 2

        orderData = {
            'Below 500': 20,
            '500-1000': 29,
            '1000-1500': 30,
            '1500-2000': 44,
            'Above 2000': 76
        }
        
        
        
        //2.a =>  Calculate the total number of orders placed for the restaurant
        let ordersValues = Object.values(orderData)
        let ordersKeys = Object.keys(orderData)
        
        function totalOrders(ordersValues){
                 
            let x = 0;
            for(let i = 0; i < ordersValues.length; i++){
                x = x + ordersValues[i]
            }
            console.log(`Total number of orders placed = ${x}`)
            return x
            
        }
        const x = totalOrders(ordersValues)
        
        
        
        
        //2.b => Calculate the number of order proportion options
        let orderFilters = Object.keys(orderData).length
        console.log(`Total number of order proportions = ${orderFilters}`)
        
        
        
        //2.c => Calculate the percentage of each proportion 
        
        function percentage(ordersKeys,ordersValues,x){
            let orderPercent = []
            let i
            for (i = 0; i < ordersValues.length; i++){
                
                const obj = {
                    id : i + 1,
                    order : ordersKeys[i],
                    "order percentage" : ((ordersValues[i]/x)*100).toFixed(2),
                    restaurant : " Punjabi Tadka"
                }
                orderPercent.push(obj)
            }
            console.log(orderPercent) 
        }
        percentage(ordersKeys,ordersValues,x)