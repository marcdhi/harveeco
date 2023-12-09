from scipy.optimize import linprog

from logic.growthTime import crop_to_time_dict
from logic.averageArea import crop_to_area_dict
# from prophetInference import forecasted_prediction
from logic.CropsFinal import get_mapping, infer


#from dictPriceSeries import dataframes



#Top crops is a list containing the top 3 crops. Can make a dictionary with the 
#crop as the key and the dataframe as the value.



# dataframes ={}

buying_price_list = []
selling_price_list = []

# # for crop in top_crops:
#     grow_time = crop_to_time_dict[crop]
#     buying_price, selling_price = forecasted_prediction(dataframes[crop], grow_time)
#     buying_price_list.append(buying_price)
#     selling_price_list.append(selling_price)


"""
Top crops will be a list where each item of this list will be a key to the dictionary we will make
"""

def allocate_optimal_land(current_money = 100,buying_price1 = buying_price_list, price_per_kg1= selling_price_list):
    """
    
    Arguments : top_crops, current_money, buying_price, selling_price, output_per_area, time_to_grow
    
    Returns : Optimal allocation of land to each crop
    
    General Notes : 
    
    top_crops : Name crops with highest probability, a list. Each element of this list is a key for the dictionary.
    current_money : integer 
    buying_price : current price 
    selling_price : forecasted price
    output_per_area : dictionary for each crop
    time_to_grow : dictionary for each crop
    
    """

    top_crops, probs = infer()
    maps = get_mapping()
    output_per_area = [crop_to_area_dict[crop] for crop in top_crops]
    print(output_per_area)
    time_to_grow = [crop_to_time_dict[crop] for crop in top_crops]
    print(time_to_grow)

    #current_money = 70
    buying_price = [4,6,7]
    price_per_kg = [5, 80, 90]
    # output_per_area = [0.5, 4, 2]
    # time_to_grow = [10, 4, 2]

    max_time_to_grow = max(time_to_grow) 

    scaled_growth = [max_time_to_grow//x for x in time_to_grow]
    total_land_area = 15

    c = [-(price_per_kg[i]*scaled_growth[i]*output_per_area[i]) for i in range(len(time_to_grow))]

    A_eq = [[1, 1, 1], [buying_price[i]*output_per_area[i]*scaled_growth[i] for i in range(len(buying_price))]]

    b_eq = [total_land_area, current_money]

    bounds = [(0, total_land_area) for _ in range(3)] 

    available_land = total_land_area

    b_eq[0] = available_land

    result = linprog(c, A_eq=A_eq, b_eq=b_eq, bounds=bounds, method='highs')

    print(result)

    land_allocation = result.x[:3]

    for j, allocation in enumerate(land_allocation):
        print(f"Allocate {allocation:.2f} units of land to Crop {j + 1}")


