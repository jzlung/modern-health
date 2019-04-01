import { LOG_ACTIVITY } from '../constants/action-types'

export function logActivity(payload) {
  return { type: LOG_ACTIVITY, payload };
};

export default logActivity;