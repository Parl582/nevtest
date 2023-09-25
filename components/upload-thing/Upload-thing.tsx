"use client";

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";

import { UploadButton } from "@/lib/uploadthing";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function UploadThing() {
  const [image, setImage] = useState<string | undefined>();

  return (
    <main className="flex  flex-col items-center space-y-8 p-24 bg-white-500">
      <div className="w-36 h-36 border-2 relative">
        {image && <Image src={image} alt="" fill />}
      </div>
      <UploadButton
        endpoint="imageUploader"
        
        onClientUploadComplete={(res) => {
          // Do something with the response
          //   console.log("Files: ", res);
          //   alert("Upload Completed");
          if (res) {
            setImage(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
