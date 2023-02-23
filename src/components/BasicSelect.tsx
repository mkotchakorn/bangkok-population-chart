import { FormControl, Select, SelectChangeEvent, styled } from '@mui/material';
import { colors } from 'constants/colors';

interface BasicSelectInterface {
  id: string;
  labelId?: string;
  value: string;
  option: any;
  onChange: (value: SelectChangeEvent) => void;
  renderValue?: (value: any) => string;
  formClass?: string;
}

export const CustomSelect = styled(FormControl)((theme) => ({
  backgroundColor: colors.white,
  borderRadius: 4,
  '.MuiSelect-select': {
    padding: '2px 8px',
    fontSize: 12,
    paddingRight: `20px !important`,
  },
  '.MuiSvgIcon-root': {
    color: colors.darkGray,
    fontSize: 18,
    right: 2,
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));

export default function BasicSelect(props: BasicSelectInterface) {
  return (
    <CustomSelect className={`${props.formClass || ''}`} fullWidth>
      <Select
        id={props.id}
        labelId={props.labelId || props.id}
        value={String(props.value)}
        onChange={props.onChange}
        size={'small'}
        renderValue={props.renderValue}
        MenuProps={{
          PaperProps: {
            sx: {
              marginTop: '5px',
              maxHeight: '250px',
              '.MuiMenuItem-root': {
                fontSize: '12px',
                '&:hover, &.Mui-selected': {
                  backgroundColor: colors.pink,
                },
              },
            },
          },
        }}
      >
        {props.option}
      </Select>
    </CustomSelect>
  );
}
