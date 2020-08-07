import * as React from "react";
import { connect } from "react-redux";

import { View } from "./About.view";

const About = connect()(View);

export { About };
