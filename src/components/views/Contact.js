import * as React from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'


export default function Contact() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [messege, setMessege] = React.useState('')

    const changeHandler = event => { 
        const {value} = event.target
    }
    const handleSubmit = e => {
        e.preventDefault();
        const { name, email, messege} = value;
        console.log(name);
        console.log(email);
        console.log(messege);
    }
    return (
        <>
        <Container fluid className="container">
        <Header as='h1'>Contact Us</Header>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name"  onChange={changeHandler}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your email' type="number" name = "email"  onChange={changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Messege</label>
            <input placeholder='Enter your messege' type="number" name = "Messege" onChange={changeHandler} />
          </Form.Field>

          <Button color="blue" type='submit' >Submit</Button>
        </Form>
      </Container>
      </>
    )
}
