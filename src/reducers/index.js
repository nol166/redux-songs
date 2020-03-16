// TODO: look at redux docs on imports
import { combineReducers } from 'redux'
import { selectSong } from '../actions'

const songsReducer = () => {
    return [
        { title: 'Dammnit', duration: '4:05' },
        { title: 'Dumpweed', duration: '4:34' },
        { title: 'All The Small Things', duration: '3:00' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
})
