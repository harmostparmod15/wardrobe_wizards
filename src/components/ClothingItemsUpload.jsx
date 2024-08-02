import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ClothingItemsUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();


    // on file change user selecting the file
    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };


    // if file is selected then upload it [ means call upload api ]
    useEffect(() => {
        if (selectedFile) onFileUpload();
    }
        , [selectedFile])

    // On file upload (click the upload button)
    const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            selectedFile?.name
        );

        // Details of the uploaded file
        console.log(selectedFile);
        if (selectedFile) alert("file uploaded")

        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };

    return (
        <div className="w-full bg-black h-[100vh] flex flex-col gap-10 justify-center items-center">


            {/*  upload image area version -2  */}
            <div className="flex items-center justify-center w-10/12 mx-auto">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={onFileChange} />
                </label>
            </div>

            <button className="text-slate-400 text-xl font-bold bg-blue-600 px-8 py-2 ">go to wardrobe</button>

        </div>
    )
}

export default ClothingItemsUpload;