import Link from 'next/link';
import { Container, Title, Button, Columns, Column } from 'bloomer';
import 'bulma/css/bulma.css';

const Index = () => ( 
  <Container isFluid style={{ marginTop: 20 }}>
    <Title isSize={1} hasTextAlign='centered'>Condovive</Title>
    <Columns>
      <Column></Column>
      <Column></Column>
      <Column hasTextAlign='centered'>
        <Link href='/login'>
          <Button isColor='primary' hasTextAlign='centered'>Iniciar sesion</Button>
        </Link>
      </Column>
      <Column hasTextAlign='centered'>
        <Link href='/signup'>
          <Button isColor='primary' hasText_align='centered'>Registrarse</Button>
        </Link>
      </Column>
      <Column></Column>
      <Column></Column>
    </Columns>
  </Container>
)

export default Index;
