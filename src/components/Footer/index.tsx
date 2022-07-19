import { Container } from '../../App';
import {
  FooterBackground,
  FooterNavBlock,
  FooterNavItem,
  FooterNavTitle,
  FooterNavWrapper,
  FooterWrapper,
  ResponsiveFlexBasis,
  SocialWrapper,
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
          <ResponsiveFlexBasis>
            <Logo />
          </ResponsiveFlexBasis>
          <FooterNavWrapper>
            <FooterNavBlock>
              <FooterNavTitle>Features</FooterNavTitle>
              <FooterNavItem>Link Shortening</FooterNavItem>
              <FooterNavItem>Branded Links</FooterNavItem>
              <FooterNavItem>Analytics</FooterNavItem>
            </FooterNavBlock>
            <FooterNavBlock>
              <FooterNavTitle>Resources</FooterNavTitle>
              <FooterNavItem>Blog</FooterNavItem>
              <FooterNavItem>Developers</FooterNavItem>
              <FooterNavItem>Support</FooterNavItem>
            </FooterNavBlock>
            <FooterNavBlock>
              <FooterNavTitle>Company</FooterNavTitle>
              <FooterNavItem>About</FooterNavItem>
              <FooterNavItem>Our Team</FooterNavItem>
              <FooterNavItem>Careers</FooterNavItem>
              <FooterNavItem>Contact</FooterNavItem>
            </FooterNavBlock>
          </FooterNavWrapper>
          <SocialWrapper>
            <Facebook />
            <Twitter style={{ marginLeft: 24 }} />
            <Pinterest style={{ marginLeft: 24 }} />
            <Instagram style={{ marginLeft: 24 }} />
          </SocialWrapper>
        </FooterWrapper>
      </Container>
    </FooterBackground>
  );
};

export default Footer;
