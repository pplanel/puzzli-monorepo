// Dependencies
import React, { useEffect, useState } from 'react';

// Utils
import playlist from '~/utils/mocks/playlist';

// Assets
import { Content } from './web-components.styles';

const WebComponents: React.FC = () => {
  const [
    pzlPlaylist,
    setPzlPlaylist,
  ] = useState<HTMLPzlPlaylistElement | null>();

  useEffect(() => {
    setPzlPlaylist(document.querySelector('pzl-playlist'));
  }, []);

  useEffect(() => {
    if (pzlPlaylist) {
      pzlPlaylist.playlist = playlist;
    }
  }, [pzlPlaylist]);

  return (
    <Content>
      <pzl-playlist class="pzl-webc" />
    </Content>
  );
};

export default WebComponents;
