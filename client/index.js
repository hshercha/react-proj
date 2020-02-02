import {render} from "react-dom";
import React from "react";

import { DynamicList } from "./List";

const LIST = ['apple', 'banana']
render(<DynamicList items={LIST}/>, document.getElementById('react-root'));

/*
- declare properties of list in the index file
- create a list component in a separate file
- import the list component into this filename
- render it
- add more items
- remove items
- edit items
*/
