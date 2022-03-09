import {
  SvgIconComponent,
  Visibility,
  VisibilityOff,
  Error,
} from '@material-ui/icons';
import { FC, InputHTMLAttributes, useState } from 'react';
import { Container } from './styles';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: SvgIconComponent;
  isError?: boolean;
}

export const TextField: FC<TextFieldProps> = ({
  Icon,
  type,
  isError,
  ...atributes
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container isError={isError}>
      {type !== 'password' ? (
        <>
          {Icon && <Icon data-testid="icon" />}
          <input {...atributes} type={type} />
          {isError && <Error />}
        </>
      ) : (
        <>
          {Icon && <Icon data-testid="icon" />}
          <input {...atributes} type={!showPassword ? 'password' : 'text'} />
          {isError ? (
            <Error />
          ) : (
            <>
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
        </>
      )}
    </Container>
  );
};
