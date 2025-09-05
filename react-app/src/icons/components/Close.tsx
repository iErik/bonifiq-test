import type { SVGProps } from "react";
import { type Ref, forwardRef } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path d="M19.4355 5.99988L13.6318 11.8026L19.8495 18.0204L18.4355 19.4354L12.2177 13.2177L5.99992 19.4354L4.58586 18.0204L10.8027 11.8026L4.99992 5.99988L6.41399 4.58582L12.2167 10.3885L18.0204 4.58582L19.4355 5.99988Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgClose);
export default ForwardRef;
