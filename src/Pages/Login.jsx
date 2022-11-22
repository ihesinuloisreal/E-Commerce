import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)
    ), 
    url("https://images.pexels.com/photos/14387629/pexels-photo-14387629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%; 
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    margin-top:10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>SIGN IN  </Title>
            <Form>
                <Input placeholder ="username"/>
                <Input placeholder ="password"/>   
                <Button>LOGIN</Button>
                <Link>DO YOU NOT REMEMBER YOUR PASSWORD</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login