import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';

import { reducer as song } from '@/components/song';
import { reducer as playlist } from '@/components/playlist';
import { reducer as album } from '@/components/album';
import { reducer as artist } from '@/components/artist';
import { reducer as action } from '@/components/actionBar';

export const rootReducer = combineReducers({
  toastr,
  song,
  playlist,
  album,
  artist,
  action,
});
