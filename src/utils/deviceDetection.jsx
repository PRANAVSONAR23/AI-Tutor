// utils/deviceDetection.js
import { isMobile } from 'react-device-detect';

export const useDeviceType = () => {
	return isMobile;
};
