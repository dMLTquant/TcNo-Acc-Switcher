﻿function createAlert(str) {
    alert(str);
}

jQueryAppend = (jQuerySelector, strToInsert) => {
    console.log(jQuerySelector);
    console.log(strToInsert);

    $(jQuerySelector).append(strToInsert);
};

// Reloading the page is better for now.
//jQueryClearInner = (jQuerySelector) => { $(jQuerySelector).empty() }