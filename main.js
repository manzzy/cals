



document.querySelector('.calc-btn').addEventListener('click', () => {
    let miles_ = parseFloat(document.querySelector('.miles').value)
    document.querySelector('.fair-price').innerText = "$ " + calc_cost(miles_ + 50)
})

function calc_cost(miles) {
    let mpg = 14.5
    let fuel_per_gallon_cost = 3.1
    let fuel_consumption = (miles / mpg) * fuel_per_gallon_cost
    
    let maintenace_cost = 100
    // let dh_componsation = 35
    
    let other_costs = 50
    let variation = 0
    if(miles > 350)
        variation = 100

    let predicted_cost = fuel_consumption + maintenace_cost  + other_costs + variation
    let profit = (0.25 * predicted_cost) 
    profit = parseInt(profit)

    total = parseInt(profit + predicted_cost)


    return total
}