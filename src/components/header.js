import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components';
import Dehaze from "@material-ui/icons/Dehaze";

const StyledHeader = styled.div`
  color: rgba(255,255,255,0.9);
  width: 100%;
  height: 5rem;
  padding: 0 2.3rem;
  box-sizing: border-box;
  line-height: 5rem;
`

const StyledTitle = styled.h5`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`

const StyledIcon = styled(Dehaze)`
  margin: 0;
  float: right;
  padding-top: 1.6rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <StyledTitle>
        CYC
        {/* <StyledIcon /> */}
      </StyledTitle> 
    </StyledHeader>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
