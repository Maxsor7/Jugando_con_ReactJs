import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom';

function Header() {
  const [value, setValue] = React.useState(0);

  return (
    <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
      {/* Título a la izquierda */}
      <h2>Mateo E. Perez Bruno</h2>

      {/* BottomNavigation en el extremo derecho */}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to = "/"><BottomNavigationAction label="Personal" icon={<PersonIcon />} /></Link>
        <Link to = "/Estudios"><BottomNavigationAction label="Estudios" icon={<CollectionsBookmarkIcon />} /></Link>
        <Link to = "/Experiencia"><BottomNavigationAction label="Experiencia" icon={<BuildIcon />} /></Link>
      </BottomNavigation>
    </Box>
    <Outlet></Outlet>
    

    </>
  );
}

export default Header;
