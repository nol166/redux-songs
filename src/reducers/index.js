// TODO: look at redux docs on imports
import { combineReducers } from 'redux'
import { selectSong } from '../actions'

const songsReducer = () => {
    return [
        { title: 'No scrubs', duration: '4:05' },
        { title: 'I want it that way', duration: '4:34' },
        { title: 'All Star', duration: '3:00' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return selectedSong
    }

    return selectSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})
