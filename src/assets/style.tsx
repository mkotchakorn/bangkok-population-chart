import { styled, Typography, Box } from '@mui/material';
import { colors } from 'constants/colors';

export const Container = styled(Box)((theme) => ({
  maxWidth: '660px',
}));

export const Typo = styled(Typography)((theme) => ({
  fontFamily: `'Bai Jamjuree', 'sans-serif'`,
  color: colors.white,
}));

export const Header = styled(Typo)((theme) => ({
  fontSize: 28,
  fontWeight: 700,
}));

export const SubHeader = styled(Typo)((theme) => ({
  fontSize: 24,
  fontWeight: 700,
}));

export const Title = styled(Typo)((theme) => ({
  fontSize: 18,
  fontWeight: 700,
}));

export const SubTitle = styled(Typo)((theme) => ({
  fontSize: 16,
  fontWeight: 700,
}));

export const Body = styled(Typo)((theme) => ({
  fontSize: 14,
  fontWeight: 400,
}));

export const StyleList = styled(Box)((theme) => ({}));
export const StyleListItem = styled(Box)((theme) => ({
  '.MuiLink-root': {
    fontSize: 14,
    color: colors.white,
    textDecorationColor: colors.white,
    transition: 'all .3s ease-out',
    '&:hover': {
      color: colors.darkPink,
      textDecorationColor: colors.darkPink,
    },
    '&:focus': {
      color: colors.pink,
      textDecorationColor: colors.pink,
    },
  },
}));
