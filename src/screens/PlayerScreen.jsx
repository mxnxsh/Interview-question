import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Player from '../components/Player';
import LoadingBox from '../components/LoadingBox';

const PlayerScreen = props => {
  const [playersList, setPlayersList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Axios.get(
          `https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e`
        );
        setLoading(false);
        setPlayersList(data.data.playerList.reverse());
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.log(err.message);
      }
    };
    getData();
  }, []);
  const items =
    props.text === ''
      ? playersList
      : playersList.filter(
          player =>
            player.PFName.toLowerCase().includes(props.text.toLowerCase()) ||
            player.TName.toLowerCase().includes(props.text.toLowerCase())
        );
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <p
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        color: 'red',
        fontWeight: 'bold',
      }}
    >
      {error}
    </p>
  ) : (
    <div className='row center'>
      {items.length === 0 ? (
        <p>No search found</p>
      ) : (
        items.map(player => <Player key={player.Id} player={player} />)
      )}
    </div>
  );
};

export default PlayerScreen;
