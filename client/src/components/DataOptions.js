"use client";

import Link from "next/link";

// {
//   data: {
//     fileList: [
//       {
//         publicKey: '0x4e6d5be93ab7c1f75e30dd5a7f574f42f675eed3',
//         fileName: 'sample.txt',
//         mimeType: 'text/plain',
//         txHash: '',
//         status: 'queued',
//         createdAt: 1691087810426,
//         fileSizeInBytes: '14',
//         cid: 'QmQK9V46b4vpNUd7pe7EcCqihBEmcSLH4NVNWukLJhGzgN',
//         id: '1b2623bd-64ca-4434-8619-24c9a1eca840',
//         lastUpdate: 1691087810426,
//         encryption: false
//       }
//     ]
//   }
// }

export function DataOptions({ filelist }) {
  return (
    <div className="flex space-y-4">
      {filelist.map((file, index) => (
        <div key={index} className="bg-gray-100 p-2 rounded-md ">
          <h3 className="break-words">
            <Link href={`/file/${file.cid}`}>{file.fileName}</Link>
          </h3>
          <p>{file.txHash}</p>
          <p>{file.fileSizeInBytes}</p>
          <p>{file.status}</p>
          <p>{file.encryption}</p>
          <p>{file.mimeType}</p>
        </div>
      ))}
    </div>
  );
}
