// import original module declarations
import 'styled-components';

// and extend DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
    };
  }
}
