import React from 'react';
import { useParams } from 'react-router-dom';

const TeamContainer = () => {
  const { teamId } = useParams();

  return (
    <div>
      the team id is { teamId }
    </div>
  )
}

export default TeamContainer;