import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import colors from '../styles/colors';
import Container from '@material-ui/core/Container';

const StyledFooter = styled(Container)`
  margin-top: 2rem;
  background-color: #262626;
  color: ${colors.secondaryText};
  height: auto;
  min-height: 200px;
  text-align: center;
`

const StyledTextBox = styled.div`
  padding-top: 4rem;
  line-height: 1.5rem;
`

const StyledIconBox = styled.div`
  padding-top: 1rem;
  font-size: 1.5rem;
  color: ${colors.secondaryText};
`

const StyledP = styled.p`
  margin: 0;
`

const StyledLink = styled.a`
  color: ${colors.secondaryText};
`


const Footer = ({ author }) => (
  <footer>
    <StyledFooter>
      <StyledTextBox>
        <StyledP>© 2019 {author}</StyledP>
        <StyledP>Built with a mobile first approach</StyledP>
      </StyledTextBox>
      <StyledIconBox>
        <StyledLink target='_blank' href='https://github.com/cycho04'><FontAwesomeIcon icon={faGithub}/></StyledLink>
        &nbsp;
        &nbsp;
        <StyledLink target='_blank' href='https://www.linkedin.com/in/chrisycho/'><FontAwesomeIcon icon={faLinkedin}/></StyledLink>
      </StyledIconBox>
    </StyledFooter>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;