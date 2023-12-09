import { DataOptions } from "@/components/DataOptions";
import { downloadFile } from "@/utils/downloader";
// // import { DialogDemo } from "@/components/Dialog";
// import { TableDemo } from "@/components/Proposals";
// import { Button } from "@/components/ui/button";
import lighthouse from "@lighthouse-web3/sdk";

export default async function Profile() {
  const response = await lighthouse.getUploads(
    "2a1b6927.d5bbb91c306340aa934793ed01f54fac"
  );

  console.log(response);

  downloadFile(
    "QmT1MRTH2XmjHDQHLyPp6UZ9pYDTPpiPGr789CGxf6RXmE",
    "temp.json"
  )

  return (
    <div>
      <h1>Profile</h1>
      <h2 className="text-3xl">
        Total Files: {response.data.totalFiles}
      </h2>
      <DataOptions filelist={response.data.fileList}/>
    </div>
  );
}
