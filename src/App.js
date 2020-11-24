import React, { useState } from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/imageGrid';
import Modal from './components/modal';

function App() {
  const [selectedImg, setSelectedImg] = useState()
  


  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal  selectedImg= {selectedImg} setSelectedImg= {setSelectedImg} />}
    </div>
  );
}

export default App;
