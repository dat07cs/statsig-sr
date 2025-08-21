import {STATSIG_INIT_CONFIG} from '@statsig/angular-bindings';
import {StatsigSessionReplayPlugin} from '@statsig/session-replay';
import {StatsigAutoCapturePlugin} from '@statsig/web-analytics';

export const StatsigConfig = {
  sdkKey: "client-w1n24t3gcGO4l6iL4G3wOOSqdZc2G6iE1L826gz06GX",
  user: {userID: 'a-user'}, // initial user object
  options: {disableCompression: true, plugins: [StatsigSessionReplayPlugin, StatsigAutoCapturePlugin]}
}
