import 'bulma/css/bulma.css'; 
import { 
  Container, 
  Title, 
  Field, 
  FieldLabel, 
  Label, 
  FieldBody,
  Input,
  Button,
  Control
} from 'bloomer';

export default class Login extends React.Component {
  constructor() {
    super();
  }
  render() {     
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <Field isHorizontal>
          <FieldLabel isNormal>
            <Label>Acceso</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Input placeholder='Correo electronico' />
            </Field>
            <Field>
              <Input placeholder='Contraseña' type='password' />
            </Field>
          </FieldBody>
        </Field>
        <Field isHorizontal>
          <FieldLabel />
          <FieldBody>
            <Control>
              <Button>Ingresar</Button>
            </Control>
          </FieldBody>
        </Field>
      </Container>
    );
  }
}
