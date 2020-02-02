import {render} from "react-dom";
import React from "react";

import {DynamicList} from "./List";

const list = ['apple', 'banana']
render(<DynamicList items={list}/>, document.getElementById('react-root'));

/*
- declare properties of list in the index file
- create a list component in a separate file
- import the list component into this filename
- render it
- add more items
- remove items
- edit items
*/
