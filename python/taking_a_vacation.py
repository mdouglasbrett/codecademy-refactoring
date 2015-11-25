def hotel_cost(nights):
    return 140 * nights

def plane_ride_cost(city):
    if city == "Charlotte":
        return 183
    elif city == "Tampa":
        return 220
    elif city == "Pittsburgh":
        return 222
    elif city == "Los Angeles":
        return 475

def rental_car_cost(days):
    day_cost = 40
    if days >= 7:
        total = (day_cost * days) - 50
        return total
    elif days >= 3:
        total = (day_cost * days) - 20
        return total
    elif days >= 1:
        return day_cost * days
    else: 
        return 0

def trip_cost(city, days, spending_money):
    return rental_car_cost(days) + hotel_cost(days) + plane_ride_cost(city) + spending_money
    
print trip_cost("Los Angeles", 5, 600)
