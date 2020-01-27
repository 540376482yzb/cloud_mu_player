import { rootReducerMap } from '../../root/reducer'
import { rootRoute } from '../../root/route'
import { musicReducer } from './redux/reducer'
import { MusicView, MusicUploadView, MusicGridView } from './view'
import './hooks/useMusicUpload'
export { MusicUploadView, MusicGridView }
rootReducerMap.music = musicReducer;
rootRoute.push({ path: "/music", component: MusicView })

console.log('load music module')

