import { Container } from '../../App';
import {
  FooterBackground,
  FooterNavItem,
  FooterNavTitle,
  FooterWrapper,
} from './styled';
import { ReactComponent as Logo } from '../../assets/images/logoWhite.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <FooterBackground>
      <Container>
        <FooterWrapper>
          <div style={{ flexBasis: 250 }}>
            <Logo />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <div>
              <FooterNavTitle>Features</FooterNavTitle>
              <FooterNavItem>Link Shortening</FooterNavItem>
              <FooterNavItem>Branded Links</FooterNavItem>
              <FooterNavItem>Analytics</FooterNavItem>
            </div>
            <div>
              <FooterNavTitle>Resources</FooterNavTitle>
              <FooterNavItem>Blog</FooterNavItem>
              <FooterNavItem>Developers</FooterNavItem>
              <FooterNavItem>Support</FooterNavItem>
            </div>
            <div>
              <FooterNavTitle>Company</FooterNavTitle>
              <FooterNavItem>About</FooterNavItem>
              <FooterNavItem>Our Team</FooterNavItem>
              <FooterNavItem>Careers</FooterNavItem>
              <FooterNavItem>Contact</FooterNavItem>
            </div>
          </div>
          <div style={{ textAlign: 'right', flexBasis: 250 }}>
            <Facebook />
            <Twitter style={{ marginLeft: 24 }} />
            <Pinterest style={{ marginLeft: 24 }} />
            <Instagram style={{ marginLeft: 24 }} />
          </div>
        </FooterWrapper>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
