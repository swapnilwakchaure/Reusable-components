import { useEffect } from "react";
import { useState } from "react";

const DownloadFiles = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/download_gallery/files')
        .then((res) => res.json())
        .then((res) => {
            setFiles(res);
            console.log('res: ', res.length);
        })
        .catch((error) => console.log('error: ', error))
    }, []);

    return (
        <div>
            <h1>Download Files</h1>
            <a target="_blank" rel="noreferrer" href="https://res.cloudinary.com/dvtq5nrrm/image/upload/v1631188868/Downloads/English/Psycho-Feedback_Therapy_English_Brochure_iuz45r.pdf">pdf</a>

            {files.length > 0 && files.map((el) => (
                <div key={el.download_image_id}>
                    <a target="_blank" rel="noreferrer" href={el.image_name}>pdf-{el.download_image_id}</a>
                </div>
            ))}
        </div>
    )
}

export default DownloadFiles;
