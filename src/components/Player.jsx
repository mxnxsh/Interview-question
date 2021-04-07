import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Player = props => {
  const { Id, PFName, SkillDesc, Value, UpComingMatchesList } = props.player;
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-image'>
          <img src={`assets/${Id}.jpg`} alt={Id} />
        </div>
        <div className='card-content'>
          <p>{PFName}</p>
          <p>{SkillDesc}</p>
          <p>$ {Value}</p>
        </div>
      </div>
      <div className='hr'></div>
      <div className='card-footer'>
        <h3>UpComing Matches</h3>
        {UpComingMatchesList.map(match => (
          <p key={uuidv4()}>
            <span style={{ color: 'red' }}>{match.CCode}&nbsp;</span>{' '}
            <span style={{ textTransform: 'lowercase' }}>vs</span>&nbsp;
            <span style={{ color: 'blue' }}>{` ${match.VsCCode} `}</span>{' '}
            &nbsp;&nbsp;&nbsp;Date:-
            {match.MDate.split('/').join('-')}
          </p>
          
        ))}
      </div>
    </div>
  );
};

export default Player;
