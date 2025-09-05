import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgArrowUp = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M21.96 14.3477C22.5963 14.8779 22.6825 15.8235 22.1523 16.46C21.622 17.0963 20.6764 17.1825 20.04 16.6523L12 9.95215L3.95996 16.6523C3.32354 17.1825 2.37794 17.0963 1.84765 16.46C1.31748 15.8235 1.40368 14.8779 2.04003 14.3477L12 6.04785L21.96 14.3477Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowUp);
export default ForwardRef;
