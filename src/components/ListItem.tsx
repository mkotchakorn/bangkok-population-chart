import { Link } from '@mui/material';
import * as UsedStyled from 'assets/style';
import { ListInterface, ListItemInterface } from 'assets/interface';

export default function ListItem(props: ListInterface) {
  return (
    <UsedStyled.StyleList>
      {props.data.length > 0 &&
        props.data.map((list: ListItemInterface, index: number) => {
          return (
            <UsedStyled.StyleListItem key={index} className={`flex`}>
              <UsedStyled.Body className={`px-5 m-0`}>•</UsedStyled.Body>
              <Link href={list.path} target={`_blank`}>
                {list.title}
              </Link>
            </UsedStyled.StyleListItem>
          );
        })}
    </UsedStyled.StyleList>
  );
}
