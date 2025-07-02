import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #e50914; /* merah khas Netflix */
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const FooterTitle = styled.h2`
  margin-bottom: 1rem;
`;

const FooterAuthor = styled.p`
  margin-bottom: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <footer>
        <FooterTitle>Movie App</FooterTitle>
        <FooterAuthor>Create Deden rafi Akbar</FooterAuthor>
      </footer>
    </FooterContainer>
  );
}

export default Footer;
