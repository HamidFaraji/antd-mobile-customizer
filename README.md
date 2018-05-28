# AntD Mobile Customizer
AntD Mobile Customizer is set of helpers and tools allow you to customize [antd-mobile](https://mobile.ant.design/) in both **react-native** and **web**.

## Add to your projects
1. Create a folder named `theme` or whatever you want.
2. Change all of `antd-mobile` imports to this folder. for example

```javascript
import { Button } from 'antd-mobile';
```
to

```javascript
import { Button } from '../theme';
```

## Change style of a component
1. Create a file in `theme/styles` named like you component but not CamelCase but snack-case: `ActivityIndecator` to `activity-indecator`
2. import it in `theme/styles/index.js` and add it to export default object with the exact name of component
3. In your style file style the antd component with the rules of that component. the `style-composer.js` was compose and merge default styles and your styles.

### Example:

theme/styles/activity-indicator.js
```javascript
const ActivityIndicatorStyles = {
  wrapper: {
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 6,
  },
  toast: {
    fontFamily: 'IRANSansLight',
  }
};

export default ActivityIndicatorStyles;
```

theme/styles/activity-indicator.js
```javascript
import ActivityIndicator from './activity-indicator';

const styles = {
  // ...otherStyles
  ActivityIndicator,
};

export default styles;
```