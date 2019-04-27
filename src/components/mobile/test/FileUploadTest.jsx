import React from 'react'

class FileUploadTest extends React.Component {
  state = {
    selectedFile: null,
  }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileuploadHandler = () => {
    console.log('fileuploadHandler')
  }

  render() {
    return (
      <>
        기본:<input type='file' onChange={this.fileuploadHandler} /><br/><br/>
        이미지만:<input type='file' accept="image/*" multiple='multiple' onChange={this.fileuploadHandler} /><br/><br/>
        카메라:<input type='file' accept="image/*" capture="camera" onChange={this.fileuploadHandler} /><br/><br/>
        <img id="blah" src="#" alt="your image" />
        {/*<button onClick={this.fileuploadHandler}>Upload</button>*/}
      </>
    )
  }
}

export default FileUploadTest
