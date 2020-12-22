import React from "react";
import "../styles/vip-table.css";
import CloseIcon from "../../../icons/close-icon";
import CheckMarkIcon from "../../../icons/checkmark-icon";

export default function VipTable() {
  return (
    <div className="vip-table-body">
      <div className="header-row">
        <div className="main-header-cell" />
        <div className="header-cell header-default">Vanlig</div>
        <div className="header-cell header-vip">VIP</div>
        <div className="header-cell header-vip-plus">VIP+</div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span>Max antal hem</span>
        </div>
        <div className="cell">2st</div>
        <div className="cell vip">4st</div>
        <div className="cell vip-plus">6st</div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span>Färg i discord/minecraft</span>
        </div>
        <div className="cell">Vit</div>
        <div className="cell vip">Guld</div>
        <div className="cell vip-plus">Lila</div>
      </div>
      <div className="row">
        <div className="cell main-cell">Modifiera armorstand med flint</div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">Antal auktioner i /ah</div>
        <div className="cell">2</div>
        <div className="cell vip">5</div>
        <div className="cell vip-plus">8</div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/craft</span>
          <br />
          <span>Öppna en craftingbench</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/enderchest</span>
          <br />
          <span>Öppna en enderchest</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/getpos</span>
          <br />
          <span>Hämta en spelares position</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/hat</span>
          <br />
          <span>Gör det block du håller i handen till en hatt</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/near</span>
          <br />
          <span>Se vilka som är nära dig</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/playerskull [namn]</span>
          <br />
          <span>Ändra skin på ett spelarhuvud</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/sit</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/crawl</span>
          <br />
          <span>Lägger dig i kravlingsläge</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/lay</span>
          <br />
          <span>Lägg dig och sov på marken</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/top</span>
          <br />
          <span>Tar dig till den högsta platsen ovanför dig</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/tpa, /tpahere</span>
          <br />
          <span>Tp:a dig till någon, eller någon till dig.</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">/trail</span>
          <br />
          <span>Sätt en kosmetisk effekt på dig själv</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
      <div className="row">
        <div className="cell main-cell">
          <span className="fc-green">Tillgång till afk</span>
          <br />
          <span>Afka utan att bli kickad</span>
        </div>
        <div className="cell vip fc-gray">
          <CloseIcon height={20} />
        </div>
        <div className="cell vip fc-green">
          <CheckMarkIcon height={20} />
        </div>
        <div className="cell vip-plus fc-green">
          <CheckMarkIcon height={20} />
        </div>
      </div>
    </div>
  );
}
