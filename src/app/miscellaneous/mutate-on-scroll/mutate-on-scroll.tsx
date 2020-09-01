import * as React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export default function MutateOnScroll(props: { children: React.ReactElement, before: any, after: any }) {
  const { children, before, after} = props;

  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  });

  return React.cloneElement(children, trigger ? after : before); 
}
