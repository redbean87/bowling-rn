import { Frame, Roll } from '../models/frame';

export const calculateFrameScore = (frame: Frame, nextFrames: Frame[]): number => {
  if (!frame.isComplete) {
    return 0;
  }

  let score = frame.rolls.reduce((sum: number, roll: Roll) => sum + roll.pinsKnockedDown, 0);

  // Handle strike bonus
  if (frame.isStrike) {
    const nextRolls = getNextTwoRolls(frame, nextFrames);
    if (nextRolls.length >= 2) {
      score += nextRolls[0].pinsKnockedDown + nextRolls[1].pinsKnockedDown;
    }
  }

  // Handle spare bonus
  if (frame.isSpare) {
    const nextRoll = getNextRoll(frame, nextFrames);
    if (nextRoll) {
      score += nextRoll.pinsKnockedDown;
    }
  }

  return score;
};

const getNextRoll = (currentFrame: Frame, nextFrames: Frame[]): Roll | null => {
  if (nextFrames.length === 0) return null;

  const nextFrame = nextFrames[0];
  if (nextFrame.rolls.length > 0) {
    return nextFrame.rolls[0];
  }
  return null;
};

const getNextTwoRolls = (currentFrame: Frame, nextFrames: Frame[]): Roll[] => {
  if (nextFrames.length === 0) return [];

  const nextFrame = nextFrames[0];
  const rolls: Roll[] = [];

  // Get rolls from next frame
  rolls.push(...nextFrame.rolls);

  // If we need more rolls and there's another frame, get from there
  if (rolls.length < 2 && nextFrames.length > 1) {
    rolls.push(...nextFrames[1].rolls);
  }

  return rolls.slice(0, 2);
};

export const isStrike = (roll: Roll): boolean => {
  return roll.pinsKnockedDown === 10;
};

export const isSpare = (frame: Frame): boolean => {
  if (frame.rolls.length < 2) return false;
  return frame.rolls[0].pinsKnockedDown + frame.rolls[1].pinsKnockedDown === 10;
};

export const isFrameComplete = (frame: Frame): boolean => {
  if (frame.isTenthFrame) {
    // Special rules for 10th frame
    if (frame.isStrike || frame.isSpare) {
      return frame.rolls.length === 3;
    }
    return frame.rolls.length === 2;
  }

  // Regular frames
  if (frame.isStrike) {
    return true;
  }
  return frame.rolls.length === 2;
};
