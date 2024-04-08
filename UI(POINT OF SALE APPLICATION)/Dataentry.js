var proArr = [ 
    { pid: 101, name: 'Dal', unitprice: 119, tax: 2},
    { pid: 102, name: 'Sweet Corn', unitprice: 109, tax: 3},
    { pid: 103, name: 'Leafy Vegetable', unitprice: 199, tax: 1},
    { pid: 104, name: 'Apple', unitprice: 99, tax: 2},
    { pid: 105, name: 'Mango', unitprice: 99, tax: 3},
    { pid: 106, name: 'Milk', unitprice: 50, tax: 1},
    { pid: 107, name: 'Pasta', unitprice: 19, tax: 2},
    { pid: 108, name: 'Banana', unitprice: 19, tax: 3}, 
    { pid: 109, name: 'Carrot', unitprice: 39, tax: 1},
    { pid: 110, name: 'Potato', unitprice: 49, tax: 1},
    { pid: 111, name: 'cheese', unitprice: 49, tax: 1},
    { pid: 112, name: 'butter', unitprice: 49, tax: 1},
    { pid: 113, name: 'Noodles', unitprice: 49, tax: 1},
    { pid: 114, name: 'Curd', unitprice: 49, tax: 1},
    { pid: 115, name: 'Orange', unitprice: 49, tax: 1},
    { pid: 116, name: 'Toothpaste', unitprice: 49, tax: 1},
    { pid: 117, name: 'shampoo', unitprice: 49, tax: 1},
    { pid: 118, name: 'Conditioner', unitprice: 49, tax: 1},
    { pid: 119, name: 'Soap', unitprice: 49, tax: 1},
    { pid: 120, name: 'Brush', unitprice: 49, tax: 1},
    { pid: 121, name: 'HandWash', unitprice: 49, tax: 1},
    { pid: 122, name: 'Biscit', unitprice: 49, tax: 1},
    { pid: 123, name: 'chocolates', unitprice: 49, tax: 1},
    { pid: 124, name: 'chips', unitprice: 49, tax: 1},
    { pid: 125, name: 'kurkure', unitprice: 49, tax: 1},
    { pid: 126, name: 'nachos', unitprice: 49, tax: 1},
    { pid: 127, name: 'pineapple', unitprice: 49, tax: 1},
    { pid: 128, name: 'yogurt', unitprice: 49, tax: 1},
    { pid: 129, name: 'dragon fruit', unitprice: 49, tax: 1},
    { pid: 130, name: 'grapes', unitprice: 49, tax: 1},

    
]; 


var products = []

var j=0

var tot=0


function addInventory(pid, units) {
    var ch = false
    var k = 0

    for(k=0;k<products.length;k++){
        if(products[k].pid === parseInt(pid)){
            ch=true
            var q = products[k].qty + parseInt(units)
            products[k].qty = q
            var t = (parseInt(products[k].unitprice)+parseInt(products[k].tax))*parseInt(products[k].qty)
            tot-=products[k].line_total
            products[k].line_total = t
            break
        }
    }

    if(ch === false){
        if(products.length == 5) {
            alert("You can give only 5 items per person")
            return
        }
        var c = false
        for(var i=0;i<proArr.length;i++){
            if(proArr[i].pid === parseInt(pid)){
                var t = (parseInt(proArr[i].unitprice)+parseInt(proArr[i].tax))*parseInt(units)
                products[products.length] = { 
                    pid: proArr[i].pid, 
                    qty: parseInt(units), 
                    name: proArr[i].name,
                    unitprice: proArr[i].unitprice, 
                    tax: proArr[i].tax,
                    line_total: t
                }
                c = true
                break
            }
        }
        if(c === false){
            alert("Give appropriate Id")
            return
        }
    }

    console.log(products)

    if(ch === false){
        tot+=products[j].line_total
        add(products, j)
        j++
    }else{
        update(products, k)
        tot+=products[k].line_total
    }

    console.log(tot)
    grand_total(tot)
}

function getObject() {
    console.log(products)
    return products
}