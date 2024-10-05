import { Avatar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import img from '../../images/icon.webp'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Updock } from 'next/font/google';

const qwitcher = Updock({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
})

export default function NavBar() {

  return (
    <Box>
      <AppBar position='sticky' color='primary'>
        <Toolbar className='justify-center'>
          <div className='w-full max-w-[1200px] flex items-center'>
            {/* <IconButton>
              <Avatar className='bg-[#F6E1CF]' variant='square' >
                <Image className='bg-transparent' src={img} alt="teste" width={30} height={30} />
              </Avatar>
            </IconButton> */}
            <Box>
              <span className={`${qwitcher.className} text-5xl`}>
                Eduarda Borges
              </span>
              {/* <Typography className='text-zinc-600 font-mono -mt-2' variant='subtitle1'>
                Psicóloga CRP 08/40348
              </Typography> */}
            </Box>
            <Box className={'grow flex justify-center gap-5'}>
              <div>Inicio</div>
              <div>Abordagem</div>
              <div>Experiência</div>
            </Box>
            <Box className='flex'>
              <Button variant='outlined' className='border-pink-800 text-pink-800 hover:bg-pink-800 hover:text-white me-4'>
                FAQ
              </Button>
              <Button
                variant='contained'
                className='bg-green-500 text-white hover:bg-green-700'
                endIcon={<WhatsAppIcon />}
              >
                Fale comigo
              </Button>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
