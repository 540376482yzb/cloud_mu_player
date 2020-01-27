import React from 'react'
import { MusicGridView } from './music-grid.view'
import { MusicUploadView } from './music-upload.view'
import { useMusicUpload } from '../hooks/useMusicUpload'

const MusicView = () => {
  useMusicUpload()
  return <main className="container">
    <MusicUploadView />
    <MusicGridView />
  </main>
}

export { MusicGridView, MusicUploadView, MusicView }
