import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Player from '../components/Player';

const PlayerScreen = () => {
  const [playersList, setPlayersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Axios.get(
          `https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e`
        );
        setLoading(false);
        setPlayersList(data.data.playerList.reverse());
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    getData();
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    { error }
  ) : (
    <div className='row center'>
      {playersList.map(player => (
        <Player key={player.Id} player={player} />
      ))}
    </div>
  );
};

export default PlayerScreen;