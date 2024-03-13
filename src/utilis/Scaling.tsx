/**
 *
 * Normalize sizes for different screen densities
 *
 */

import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;

const scale = (size: number) => (SCREEN_WIDTH / guidelineBaseWidth) * size;
export const normalize = (size: number, factor = 1) =>
  size + (scale(size) - size) * factor;

/**
 *
 * Responsive font size
 *
 */

export const RLFontSize = (
  maxFontSize: number,
  length: number,
  text: string
) => {
  return length < text.length
    ? (length / text.length) * maxFontSize
    : maxFontSize;
};

const { width, height } = Dimensions.get("window");

const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const isTablet = width >= 600 ? true : false;

export { horizontalScale, verticalScale, moderateScale, isTablet };
