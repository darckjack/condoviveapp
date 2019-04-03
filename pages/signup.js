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
  Control,
  Select
} from 'bloomer';

export default class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container isFluid style={{ marginTop: 20 }}>
        <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
        <Field isHorizontal>
          <FieldLabel>
            <Label>Usuario</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Input placeholder='Nombre' />
            </Field>
            <Field>
              <Input placeholder='Correo electronico' />
            </Field>
          </FieldBody>
        </Field>
        <Field isHorizontal>
          <FieldLabel />
          <FieldBody>
            <Field>
              <Input placeholder='Contraseña' />
            </Field>
            <Field>
              <Input placeholder='Confirme su contraseña' />
            </Field>
          </FieldBody>
        </Field>
        <Field isHorizontal style={{ marginTop: 50 }}>
          <FieldLabel>
            <Label>Informacion personal</Label>
          </FieldLabel>
          <FieldBody>
            <Field>
              <Input placeholder='Nombre' />
            </Field>
            <Field>
              <Input placeholder='Correo electronico' />
            </Field>
          </FieldBody>
        </Field>
        <Field isHorizontal>
          <FieldLabel />
          <FieldBody>
            <Field>
              <Input placeholder='Telefono' />
            </Field>
            <Field>
              <Control>
                <Select>
                  <option>Autoadministrable</option>
                </Select>
              </Control>
            </Field>
          </FieldBody>
        </Field>
      </Container>
    )
  }
}
