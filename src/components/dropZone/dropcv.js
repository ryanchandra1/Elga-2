import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DropCV = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here
    setUploadedFiles(acceptedFiles);
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed border-gray-300 p-32 rounded-md flex flex-col justify-center items-center ${
        isDragActive ? 'bg-gray-200' : ''
      }`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-gray-600">Drop the files here...</p>
      ) : (
        <p className="text-gray-600">Drop your CV here or click to upload</p>
      )}

      {/* Display uploaded files */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium text-lg text-gray-700">Uploaded Files:</h4>
          <ul className="list-disc list-inside">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-gray-600">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropCV;
