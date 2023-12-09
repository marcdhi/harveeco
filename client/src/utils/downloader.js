export const downloadFile = async (cid, path) => {
  const response = await fetch(
    `https://gateway.lighthouse.storage/ipfs/${cid}`
  );
  const data = await response.json();

  console.log(data);
  const test = JSON.parse(data);
  console.log(test);

  const predictions = await fetch(
    "https://c3a2-14-195-9-98.ngrok-free.app/crop_predictions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),
    }
  );
  //   const predictionsJson = await predictions.json();
  const predictionsJson = { data: '["Orange", "Watermelon", "KidneyBeans"]' };
  console.log("predictionsJson", JSON.parse(predictionsJson.data));
};
