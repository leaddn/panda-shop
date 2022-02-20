import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2em;
`
const Center = styled.div`
    flex: 1;
    padding: 2em;
`
const Right = styled.div`
    flex: 1;
    padding: 2em;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 1em;

`
const Logo = styled.h1``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-between;
`
const SocialIcon = styled.div`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PANDA.</Logo>
        <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt esse maxime odit eveniet mollitia. Vero labore, voluptates officiis laudantium voluptatum quasi deserunt quis dolorem temporibus, perspiciatis praesentium, enim sed animi.
        </Desc>
        <SocialContainer>
            <SocialIcon color='3B5999'>
                <Facebook/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Instagram/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Twitter/>
            </SocialIcon>
            <SocialIcon color='E4405F'>
                <Pinterest/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>Useful Links</Title>
          <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>Woman Fashion</ListItem>
              <ListItem>Man Fashion</ListItem>
              <ListItem>Accessories</ListItem>
              <ListItem>My Account</ListItem>
              <ListItem>Order Tracking</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
          </List>
      </Center>
      <Right>
          <Title>Contact</Title>
          <ContactItem><Room style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336</ContactItem>
          <ContactItem><Phone style={{marginRight:"10px"}}/> +1 234 56 78</ContactItem>
          <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@panda.dev</ContactItem>
          <Payment/>
      </Right>
    </Container>
  )
}

export default Footer
