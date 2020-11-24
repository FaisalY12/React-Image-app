import React from 'react';
import { useState} from 'react';
import ProcessBar from './ProcessBar';


const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    
    const types = ['image/jpeg', 'image/png'];

    const changeHandler = ({target}) => {

        let selected = target.files[0];
        console.log(selected);
    
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Please select a valid image file (jpeg, png)')
        }
    }

    console.log(file);

    

    return (
        <form>
            <label>
            <input type='file' onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className= "output">
                { error && <div className="error">{error}</div> }
                { file && <div className="file">{file.name}</div> }
                { file && <ProcessBar file={file} setFile={setFile} /> }
            </div>
        </form>

    );
}

export default UploadForm;
