import { useQuery } from 'react-query';
import { getGameData } from '../data';

const fetchGame = async () => {
  return await Promise.resolve(getGameData());
};

export default function useGame() {
  return useQuery(['game'], () => fetchGame());
}
