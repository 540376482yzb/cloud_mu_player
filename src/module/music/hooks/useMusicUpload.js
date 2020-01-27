import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { firebase } from '../../../firebase';
import { musicAction } from '../redux/action'
const uploadAtRef = firebase.database().ref('uploadAt');

export const useMusicUpload = () => {
  const music = useSelector(state => state.music);
  const dispatch = useDispatch();
  const updateMusicStatus = useCallback(
    (ts) => dispatch(musicAction.updateMusicStatus(ts)),
    [dispatch]
  )
  useEffect(() => {
    uploadAtRef.on('value', snapshot => {
      updateMusicStatus(snapshot.val())
    })
    return () => {
      uploadAtRef.off('value')
    }
  }, [music.uploadAt, updateMusicStatus])

  return null
}

