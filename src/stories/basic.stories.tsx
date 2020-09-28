import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ReactOlFiber } from "../types";

import { Map } from "../map";
import { Catalogue } from "../catalogue";
import { View, Collection, Feature } from "ol";
import GeometryLayout from "ol/geom/GeometryLayout";

// import "../types";

require("ol/ol.css");

export default {
  title: "Components/Basic",
  component: Map,
};

// export const Primary: Story<{}> = (args) => (
//   <Map style={{ width: "100%", height: "640px" }}>
//     <olView center={[0, 0]} zoom={2} />
//     <olLayerTile>
//       <olSourceOsm/>
//     </olLayerTile>
//   </Map>
// );

// const t: keyof ReactOlFiber.IntrinsicElementsAdHoc = "primitive";

// const t: keyof ReactOlFiber.IntrinsicElementsObject = "";

const t = {
  tutu: {
    object: View,
  },
  toto: {
    object: Feature,
  },
  tatar: true,
  titi: {
    object: true,
  },
};

// type Tttt = typeof t;
type Tttt = Catalogue;

type Uuuu = ReactOlFiber.PickOlObjectCatalogElements<Tttt>;

type Uuuu2 = ReactOlFiber.OmitOlObjectCatalogElements<Tttt>;

const u: Uuuu = { toto: { object: Feature } };
const u2: Uuuu2 = { tatar: true };
// Ok

type Iiii = keyof Uuuu;
type Iiii2 = keyof Uuuu2;

const i: Iiii = "toto";
const i2: Iiii2 = "tatar";

//ok

type Vvvv = {
  [T in Iiii]: boolean;
};
type Vvvv2 = {
  [T in Iiii2]: boolean;
};

const v: Vvvv = { tutu: true };
const v2: Vvvv2 = { tatar: true };
//ok

type Ffff = {
  [F in keyof ReactOlFiber.PickOlObjectCatalogElements<Tttt>]: boolean;
};
type Ffff2 = {
  [F in keyof ReactOlFiber.OmitOlObjectCatalogElements<Tttt>]: boolean;
};

const f: Ffff = {};
const f2: Ffff2 = {};

const wwwwss: ReactOlFiber.IntrinsicElementsSimpleObject = {
  olControlAttribution: {},
};

const aasoas: ReactOlFiber.IntrinsicElementsArgsObject = {
  olCollection: { args: [[1, 2], { unique: true }] },
  olGeomMultiPoint: {
    args: [
      [
        [1, 2],
        [3, 4],
      ],
      GeometryLayout.XYZ,
    ],
  },
};
//ok

// type ututu =
