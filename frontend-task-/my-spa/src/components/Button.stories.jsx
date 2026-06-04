import Button from './Button';
export default {
  title: 'Components/Button',
  component: Button,
};
export const Default = () => <Button label="Click Me" onClick={() => alert('Clicked!')} />;
