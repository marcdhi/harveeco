import pandas as pd
from prophet import Prophet

def forecasted_prediction(df, growth_time):
    model = Prophet()
    model.fit(df)
    future = model.make_future_dataframe(periods=growth_time)
    forecast = model.predict(future)
    selling_price = forecast['yhat'].tail(1).iloc[0]
    buying_price = df.iloc[-1].value
    return buying_price, selling_price

def forecasted_rainfall(df, growth_time):
    rainfall = []
    for colName in df.columns[2:]:  # Exclude the first two columns (SUBDIVISION and YEAR)
        model = Prophet()
        df_col = df[['YEAR', colName]].rename(columns={'YEAR': 'ds', colName: 'y'})
        model.fit(df_col)
        future = model.make_future_dataframe(periods=growth_time)
        forecast = model.predict(future)
        rain_fall = forecast['yhat'].tail(1).iloc[0]
        rainfall.append(rain_fall)

    return rainfall


