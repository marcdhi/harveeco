
crops = ['Apple', 'Banana', 'Blackgram', 'ChickPea', 'Coconut', 'Coffee',
         'Cotton', 'Grapes', 'Jute', 'KidneyBeans', 'Lentil', 'Maize',
         'Mango', 'MothBeans', 'MungBean', 'Muskmelon', 'Orange', 'Papaya',
         'PigeonPeas', 'Pomegranate', 'Rice', 'Watermelon']

# Assumed approximate area required for 1 kg of each crop (in square meters)
area_per_kg = [8, 0.25, 0.5, 1.5, 0.05, 0.5, 2, 0.5, 1.0, 1.5, 1.0, 0.5, 0.3, 2.0, 1.5, 1.0, 0.1, 0.25, 1.5, 0.5, 0.2, 3, 2]

crop_to_area_dict = dict(zip(crops, area_per_kg))