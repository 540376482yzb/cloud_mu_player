import React, { useState } from "react";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useSelector, useDispatch } from 'react-redux';
import { musicAction } from '../redux/action'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


function MusicUploadView() {
  const files = useSelector(state => state.music.files);
  const dispatch = useDispatch();
  const uploadMusic = (files) => dispatch(musicAction.uploadMusic(files))
  return (
    <div className="MusicUpload">
      <FilePond
        files={files}
        allowMultiple={true}
        onupdatefiles={uploadMusic}
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        server="https://us-central1-cloud-mu-player.cloudfunctions.net/app/api/music/upload"
      />
    </div>
  );
}

export { MusicUploadView };
