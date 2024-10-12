import FooterLinkList from "../../util/FooterLinkList";
import { footerNavigation } from "../../data/data";
import EachUtils from "../../util/EachUtils";

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Navigation</h3>
      <EachUtils
        of={footerNavigation}
        render={(data) => {
          return <FooterLinkList data={data} />;
        }}
      />
    </div>
  );
};

export default FooterNavigation;
