import { DataOptions } from "@/components/DataOptions";
import { downloadFile } from "@/utils/downloader";
import lighthouse from "@lighthouse-web3/sdk";
import Token from "@/components/Token";
import { Withdraw } from "@/components/Withdraw";

export default async function Profile() {
  const response = await lighthouse.getUploads(
    "2a1b6927.d5bbb91c306340aa934793ed01f54fac"
  );

  console.log(response);

  let totalBytes = 0;

  response.data.fileList.map((file, index) => {
    downloadFile(file.cid, file.fileName);
    totalBytes += parseInt(file.fileSizeInBytes);
  });

  return (
    <div className="flex flex-col items-center justify-center">
      {/* <h1>Profile</h1>
      <h2 className="text-3xl">Total Files: {response.data.totalFiles}</h2>

      <h2 className="text-3xl">
        Estimated earning this month (HVC):{totalBytes * 0.01}
      </h2> */}

      <h1 className="">Profile</h1>

      <h2 className="">Total Files: {response.data.totalFiles}</h2>

      <h2 className="">
        Estimated earning this month (HVC):
        <b className="font-bold">{totalBytes * 0.001}</b>
      </h2>

      <div className="flex flex-row justify-between w-1/2">
        <Token />

        <Withdraw amount={totalBytes * 0.001} />
      </div>

      <DataOptions filelist={response.data.fileList} />
    </div>
  );
}
