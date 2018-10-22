import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import { fetchPlaylists } from '@/components/playlist/actions';
import { fetchAlbums } from '@/components/album/actions';
import { fetchArtists } from '@/components/artist/actions';

import { ActionBar } from './ActionBar';

const mapStateToProps = state => {
  return {
    imported: state.action.imported,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...actions,
    fetchPlaylists,
    fetchArtists,
    fetchAlbums,
  },
  dispatch
);

export const ActionBarContainer = connect(mapStateToProps, mapDispatchToProps)(ActionBar);