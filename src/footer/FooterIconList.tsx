import { ReactNode } from "react";

type IFooterIconListProps = {
  children: ReactNode;
};

const FooterIconList = (props: IFooterIconListProps) => (
  <div className="footer-icon-list flex justify-around">{props.children}</div>
);

export { FooterIconList };
