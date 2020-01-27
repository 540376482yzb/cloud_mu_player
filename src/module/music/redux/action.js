
import { callApi } from '../../../util/api'
export const musicAction = {
  searchMusic: () => async (dispatch, getState) => {
    //init
    console.log('search music')
    dispatch({ type: 'SEARCH_MUSIC_START' });
    return callApi('get', 'music/search')
      .then(list => dispatch({ type: 'SEARCH_MUSIC_SUCCESS', list }))
      .catch(error => dispatch({ type: 'SEARCH_MUSIC_FAIL', error }))
  },
  uploadMusic: (files) => async (dispatch, getState) => {
    dispatch({ type: 'UPLOAD_MUSIC', files })
  },
  updateMusicStatus: (ts) => (dispatch, getState) => {
    dispatch({ type: 'UPDATE_MUSIC_STATUS', uploadAt: ts })
  }
}