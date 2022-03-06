import {
  SvgIconComponent,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import { FC, InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: SvgIconComponent;
}

export const TextField: FC<TextFieldProps> = ({ Icon, type, ...atributes }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>
      {type !== 'password' ? (
        <>
          {Icon && <Icon data-testid="icon" />}
          <input {...atributes} type={type} />
        </>
      ) : (
        <>
          {Icon && <Icon data-testid="icon" />}
          <input {...atributes} type={!showPassword ? 'password' : 'text'} />
          {!showPassword ? (
            <Visibility
              className="password-visibility"
              data-testid="password-visibility"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <VisibilityOff
              className="password-visibility"
              data-testid="password-visibility"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </>
      )}
    </Container>
  );
};
