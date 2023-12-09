
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn.preprocessing import LabelEncoder

from sklearn.model_selection import train_test_split

from sklearn.metrics import accuracy_score, log_loss

import pickle


df=pd.read_csv('./data/indiancrop_dataset.csv')


df["STATE"].value_counts()

df.drop(['STATE'],axis=1,inplace=True)

df.P_SOIL=np.log(df['P_SOIL'])

df.K_SOIL=np.log(df['K_SOIL'])

df['HUMIDITY']=np.log(df['HUMIDITY'])

iq1=df['CROP_PRICE'].quantile(0.25)

iq2=df['CROP_PRICE'].quantile(0.75)


df['CROP_PRICE']=np.where(df['CROP_PRICE']<iq1,iq1,df['CROP_PRICE'])

df['CROP_PRICE']=np.where(df['CROP_PRICE']>iq2,iq2,df['CROP_PRICE'])


le1=LabelEncoder()

le2=LabelEncoder()

df['CROP']=le1.fit_transform(df['CROP'])
# encoded_labels = le1.fit_transform(df['CROP'])
# decoded_labels = le1.inverse_transform(encoded_labels)
# #df['STATE']=le2.fit_transform(df['STATE'])


def get_mapping():
    label_mapping = dict(zip(range(len(le1.classes_)), le1.classes_))
    return label_mapping



y = df.pop("CROP")
X = df

x_train,x_test,y_train,y_test=train_test_split(X,y,train_size=0.7,random_state=1)


print("Training data",x_train.shape)


print("Training data",x_test.shape)


from sklearn.naive_bayes import GaussianNB
model = GaussianNB()


model.fit(x_train,y_train)


# **PREDICTION OF CROP**

y_prediction=model.predict_proba(x_test)


1-log_loss(y_test,y_prediction)



def get_three_max_indices(numbers):
    indices = np.argsort(numbers)[-3:][::-1]
    return indices




maps = get_mapping()

# loaded_model=pickle.load(open('./logic/ml_models/crop_model_final.sav','rb'))

# input_data=(49,4.234107,4.406719,34.315615,2.731860,7.263119,81.787105,350.0)

def infer(input_data, model = model):
    input_array=np.asarray(input_data)
    data_reshape=input_array.reshape(1,-1)
    prediction=model.predict_proba(data_reshape)
    flattened_array = prediction.flatten()
    top_three_indices = np.argsort(flattened_array)[-3:][::-1]
    crop_list = [maps[i] for i in top_three_indices]
    print(crop_list)
    return crop_list, np.sort(flattened_array)[-3:][::-1]






