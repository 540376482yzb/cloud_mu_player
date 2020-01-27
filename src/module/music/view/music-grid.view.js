import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { musicAction } from '../redux/action';
import { FaPaperclip } from 'react-icons/fa';

export const MusicGridView = () => {
  const music = useSelector(state => state.music)
  const dispatch = useDispatch()
  const searchMusic = useCallback(
    () => dispatch(musicAction.searchMusic()),
    [dispatch]
  )
  useEffect(() => {
    searchMusic()
  }, [searchMusic, music.files, music.uploadAt])

  return <main className="shadow-sm border rounded-lg bg-white overflow-hidden">
    <GridTitleView />
    <GridContentView music={music} />
    <GridFooter />
  </main>
}

const GridTitleView = () => {
  return <React.Fragment>
    <section className="row p-2" style={styles.gridTitleLayout}>
      <span className="col-sm-5 text-muted">title</span>
      <span className="col-sm-2 text-muted">type</span>
      <span className="col-sm-2 text-muted">download</span>
      <span className="col-sm-3 text-muted">updated at</span>
    </section>
  </React.Fragment>
}
const GridContentView = ({ music }) => {
  return <div style={styles.gridContentLayout}>
    {music.list.map((entry, key) => <section key={key} className='row p-2'>
      <span className="col-sm-5 text-muted">{entry.title}</span>
      <span className="col-sm-2 text-muted">{entry.type}</span>
      <a className="col-sm-2" href={entry.src}><FaPaperclip color="#0288D1" /></a>
      <span className="col-sm-3 text-muted">{entry.updated_at}</span>
    </section>)}
  </div>
}

const GridFooter = () => {
  return <main className="row" style={styles.gridFooterLayout} />
}

const styles = {
  gridTitleLayout: { backgroundColor: '#FAFAFA' },
  gridContentLayout: { overflowY: 'overlay', overflowX: 'hidden', height: '65vh' },
  gridFooterLayout: { minHeight: '20px' }
}