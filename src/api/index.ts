import { useQuery } from '@tanstack/react-query';
import { getGameData } from '../data';

export const fetchGame = async () => await Promise.resolve(getGameData());

export const useGame = () => useQuery(['game'], () => fetchGame());
