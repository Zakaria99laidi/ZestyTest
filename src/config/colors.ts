import {Colors} from 'react-native/Libraries/NewAppScreen';
interface color {
  light: string;
  medium: string;
  white: string;
  yellow: string;
  dark: string;
  [key: string]: string;
}

export default <color>{
  light: '#fafafa',
  medium: '#cfcfcf',
  white: '#fff',
  yellow: '#ffed4e',
  dark: '#0c0c0c',
};
