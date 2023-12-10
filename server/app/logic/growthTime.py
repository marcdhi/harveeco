import numpy as np 

crops = ['Apple', 'Banana', 'Blackgram', 'ChickPea', 'Coconut', 'Coffee',
         'Cotton', 'Grapes', 'Jute', 'KidneyBeans', 'Lentil', 'Maize',
         'Mango', 'MothBeans', 'MungBean', 'Muskmelon', 'Orange', 'Papaya',
         'PigeonPeas', 'Pomegranate', 'Rice', 'Watermelon']

time_to_grow = [730, 180, 90, 120, 365, 365, 150, 180, 90, 120, 90, 120, 365, 90, 90, 90, 180, 180, 120, 150, 365, 180, 90]

crop_to_time_dict = dict(zip(crops, time_to_grow))
