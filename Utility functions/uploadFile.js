// this example shows how to handle only jpg files upload

function importFileUploadHandler(e) {
      const inputFile = e.target.files[0];
      const uploadURL = e.target.value;
      const uploadExtension = uploadURL.slice(uploadURL.lastIndexOf('.') + 1).toLowerCase();

      if (e.target.files && inputFile && uploadExtension === 'jpg') {
         console.log(inputFile);
      }
}