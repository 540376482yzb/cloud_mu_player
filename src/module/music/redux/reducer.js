
const initialState = {
  loading: false,
  error: '',
  uploadAt: '',
  list: [],
  files: []
}

export const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_MUSIC_START':
      return { ...state, loading: true }
    case 'SEARCH_MUSIC_FAIL':
      return { ...state, loading: false, error: action.error }
    case 'SEARCH_MUSIC_SUCCESS':
      return { ...state, loading: false, list: action.list }
    case 'UPLOAD_MUSIC':
      return { ...state, files: action.files }
    case 'UPDATE_MUSIC_STATUS':
      return { ...state, uploadAt: action.uploadAt }
    default:
      return state
  }
}


