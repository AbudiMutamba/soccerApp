import * as React from 'react'
import postData from '../helpers/postData'
import { Button, Form, Container, Header } from 'semantic-ui-react'


export default function Contact() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(
        //   {
        //     name: name,
        //     email: email,
        //     message: message 
        //   }
        // )
        await postData({ name, email, message})
  
        
        
        // const {value} = e.target
        
        // const { name, email, messege} = value;
        // console.log(name);
        // console.log(email);
        // console.log(messege);
       // console.log(e.target.value)
    }
    return (
        <>
        <Container fluid className="container">
        <Header as='h1'>Contact Us</Header>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Enter your name' type="text" name = "name" onChange={event => setName(event.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Enter your email' type="text" name = "email" onChange={event => setEmail(event.target.value)}/>
          </Form.Field>
          <Form.Field>
            <label>Messege</label>
            <input placeholder='Enter your messege' type="text" name = "Messege" onChange={event => setMessage(event.target.value)} />
          </Form.Field>

          <Button color="blue" type='submit'>Submit</Button>
        </Form>
      </Container>
      </>
    )
}
