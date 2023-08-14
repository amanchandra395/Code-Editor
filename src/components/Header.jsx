import { AppBar, Toolbar, styled } from "@mui/material";
import Logo from "../components/logo.png";
import '../App.css';
import Pic from "../components/logo192.png";
const Container = styled(AppBar)`
  background: #060606;
  position: static;
  border-bottom: 1px solid #2f2f2f;
  height: 9vh;
`;

const Header = () => {
  return (
    <div>
      <Container position="static">
        <Toolbar>
          <img src={Logo} alt="logo" style={{ width: 45 }} />
          <h2 className="code1"> Code Editor</h2>
          <img className="code1"  src={Pic} alt="react" style={{ width: 45 }} />
        </Toolbar>
      </Container>
    </div>
  );
};
export default Header;
