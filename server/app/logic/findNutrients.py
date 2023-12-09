def value_n(state):

    N_dict = {'Andaman and Nicobar': 81.46666666666667,
 'Andhra Pradesh': 80.85714285714286,
 'Assam': 80.62068965517241,
 'Chattisgarh': 67.0,
 'Goa': 77.33333333333333,
 'Gujarat': 77.64601769911505,
 'Haryana': 39.83076923076923,
 'Himachal Pradesh': 27.647058823529413,
 'Jammu and Kashmir': 19.666666666666668,
 'Karnataka': 21.083333333333332,
 'Kerala': 21.01094890510949,
 'Madhya Pradesh': 32.29545454545455,
 'Maharashtra': 28.228395061728396,
 'Manipur': 17.576923076923077,
 'Meghalaya': 23.666666666666668,
 'Nagaland': 15.0,
 'Odisha': 54.93023255813954,
 'Pondicherry': 99.71428571428571,
 'Punjab': 45.19444444444444,
 'Rajasthan': 21.804878048780488,
 'Tamil Nadu': 85.8415300546448,
 'Telangana': 100.06666666666666,
 'Tripura': 100.5,
 'Uttar Pradesh': 50.76829268292683,
 'Uttrakhand': 78.14285714285714,
 'West Bengal': 97.04032258064517}
    
    for i in N_dict:
        if i == state:
            return N_dict[i]

def value_p(state):

    P_dict = {'Andaman and Nicobar': 50.13333333333333,
 'Andhra Pradesh': 39.857142857142854,
 'Assam': 47.62068965517241,
 'Chattisgarh': 51.2,
 'Goa': 51.0,
 'Gujarat': 48.424778761061944,
 'Haryana': 68.0,
 'Himachal Pradesh': 67.53921568627452,
 'Jammu and Kashmir': 65.66666666666667,
 'Karnataka': 67.77777777777777,
 'Kerala': 54.57299270072993,
 'Madhya Pradesh': 56.65909090909091,
 'Maharashtra': 68.25925925925925,
 'Manipur': 31.923076923076923,
 'Meghalaya': 22.0,
 'Nagaland': 19.666666666666668,
 'Odisha': 45.66279069767442,
 'Pondicherry': 79.71428571428571,
 'Punjab': 58.18888888888889,
 'Rajasthan': 132.90243902439025,
 'Tamil Nadu': 39.49726775956284,
 'Telangana': 15.2,
 'Tripura': 16.944444444444443,
 'Uttar Pradesh': 52.65679442508711,
 'Uttrakhand': 46.285714285714285,
 'West Bengal': 32.24193548387097}
    
    for i in P_dict:
        if i == state:
            return P_dict[i]

def value_k(state):

    K_dict = {'Andaman and Nicobar': 40.333333333333336,
 'Andhra Pradesh': 39.142857142857146,
 'Assam': 39.89655172413793,
 'Chattisgarh': 39.8,
 'Goa': 40.0,
 'Gujarat': 22.398230088495577,
 'Haryana': 80.01538461538462,
 'Himachal Pradesh': 40.07843137254902,
 'Jammu and Kashmir': 21.666666666666668,
 'Karnataka': 20.083333333333332,
 'Kerala': 20.182481751824817,
 'Madhya Pradesh': 19.40909090909091,
 'Maharashtra': 19.228395061728396,
 'Manipur': 34.90384615384615,
 'Meghalaya': 39.166666666666664,
 'Nagaland': 39.666666666666664,
 'Odisha': 44.44186046511628,
 'Pondicherry': 51.42857142857143,
 'Punjab': 58.88333333333333,
 'Rajasthan': 199.85365853658536,
 'Tamil Nadu': 79.01639344262296,
 'Telangana': 47.733333333333334,
 'Tripura': 50.166666666666664,
 'Uttar Pradesh': 59.562717770034844,
 'Uttrakhand': 39.714285714285715,
 'West Bengal': 31.806451612903224}
    
    for i in K_dict:
        if i == state:
            return K_dict[i]
        
def forecasted_rainfall(df, days):
    pass