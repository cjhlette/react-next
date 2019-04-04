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
        <input type='file' multiple='multiple' onChange={this.fileuploadHandler} />
        {/*<button onClick={this.fileuploadHandler}>Upload</button>*/}
      </>
    )
  }
}

export default FileUploadTest
