import FooterLinkList from "../../util/FooterLinkList";
import { headerSocial } from "../../data/data";
import EachUtils from "../../util/EachUtils";

const FooterSocial = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold mb-2 md:text-base lg:text-lg">Social Media</h3>
      <EachUtils
        of={headerSocial}
        render={(data) => {
          return <FooterLinkList data={data} />;
        }}
      />
    </div>
  );
};

export default FooterSocial;
