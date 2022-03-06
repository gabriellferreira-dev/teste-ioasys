import { TextField, TextFieldProps } from '.';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MailOutline } from '@material-ui/icons';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe('<TextField />', () => {
  it('should be rendered on screen', () => {
    renderedTextField();

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  it('should appear an icon passed via props', () => {
    const defaultProps: TextFieldProps = {
      Icon: MailOutline,
    };

    renderedTextField(defaultProps);

    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it('should show or hide the password when clicking the button', () => {
    const defaultProps: TextFieldProps = {
      type: 'password',
    };

    const { debug } = renderedTextField(defaultProps);
    debug();

    const showBtn = screen.getByTestId('password-visibility');

    userEvent.click(showBtn);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });
});

const renderedTextField = (props?: TextFieldProps) => {
  return render(
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>,
  );
};
