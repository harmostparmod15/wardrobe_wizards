import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


// show successfull image upload modal 
const SuccessFileUploadModal = ({ closemodel }) => {
    const navigate = useNavigate();
    return (
        <div id="popup-modal" tabindex="-1" className="flex  flex-col h-full   overflow-x-hidden  z-50 justify-center items-center w-full  ">
            <div class="relative p-4 w-9/12 mx-auto h-7/12   ">
                <div class="relative py-24 bg-white rounded-lg shadow dark:bg-gray-700">

                    {/*  inner content */}
                    <div class="p-4 md:p-5 text-center">

                        <svg className="mx-auto mb-4 text-gray-400 w-24 h-24 dark:text-gray-200" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#34C759" stroke-width="2">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Image uploaded Successfully</h3>


                        {/*  buttons */}
                        <div className=" w-4/12 mx-auto flex justify-around ">
                            <button onClick={() => closemodel()} data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">upload more</button>
                            <button onClick={() => navigate("/virtual-wardrobe")} data-modal-hide="popup-modal" type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                go to wardrobe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const ClothingItemsUpload = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

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
        if (selectedFile) {
            // alert("file uploaded")
            setShowSuccessModal(true);
        }


        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
    };

    return (
        <div className="w-full bg-black h-[100vh] flex flex-col gap-10 justify-center items-center">

            {/*  success image uplaod modal */}
            {showSuccessModal && <SuccessFileUploadModal closemodel={() => setShowSuccessModal(false)} />}

            {/*  upload image area version -2  */}
            <div className={"flex items-center justify-center w-10/12 mx-auto " + (showSuccessModal && " hidden")}>
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
            {/*  go to wardrobe button */}
            <button onClick={() => navigate("/virtual-wardrobe")} className={"text-slate-400 text-xl font-bold bg-blue-600 px-8 py-2 " + (showSuccessModal && "blur-xl")}>go to wardrobe</button>

        </div>
    )
}

export default ClothingItemsUpload;