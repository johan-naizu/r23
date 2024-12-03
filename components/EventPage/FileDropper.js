import React from "react";
import styles from "@/styles/EventPage.module.css";
import Image from "next/image";

const FileDropper = ({ data, dispatch }) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files];

    // ensure a file or files are dropped
    if (files && files.length > 0   && files.length < 2) {
      // loop over existing files
    //   const existingFiles = data.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
    //   files = files.filter((f) => !existingFiles.includes(f.name));

      // dispatch action to add droped file or files to fileList
      dispatch({ type: "ADD_FILE_TO_LIST", files });
      // reset inDropZone to false
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  const fileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
        dispatch({type: "ADD_FILE_TO_LIST",files:e.target.files})
    }
}

  return (
    <>
      <input  onChange={(e)=>fileSelect(e)}  className={styles.fileInput} type="file" id="file" name="file" />
      <label
        id={styles.file}
        htmlFor="file"
        className={`${styles.qr} `}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {!(data?.fileList[0])&&<>
        <Image
          className={styles.icon}
          src={`/images/assets/Line.svg`}
          width={24}
          height={24}
          />
        <div>PNG, JPEG or WEBP. Max 5Mb.</div>
          </>
        }
        {data?.fileList&& <div>{data?.fileList[0]?.name}</div> }
      </label>
    </>
  );
};

export default FileDropper;
