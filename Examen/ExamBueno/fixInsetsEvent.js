import { Platform } from 'react-native';

if (Platform.OS === 'web') {
  const EventEmitter = require('react-native/Libraries/vendor/emitter/EventEmitter');
  const eventEmitter = new EventEmitter();

  eventEmitter.addListener('topInsetsChange', () => {});
}
