import { IconButton as MuiIconButton } from '@mui/material';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { FC } from 'react';

export const IconButton: FC<MuiIconButtonProps> = (props) => {
  return <MuiIconButton {...props}>{props.children}</MuiIconButton>;
};
