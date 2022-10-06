let allEvent: any[] = [];

const filterEventObject = (obj: any): any => {
  if (obj.hasOwnProperty('events') && !(obj.events instanceof Array)) {
    return filterEventObject(obj.events);
  }

  if (obj.hasOwnProperty('children')) {
    checkChildren(obj.children);
  }

  return allEvent;
};

const checkChildren = (array: any) => {
  array.map((ele: any) => {
    if (ele.hasOwnProperty('events') && ele.events instanceof Array) {
      allEvent.push(...ele.events);
    }

    if (ele.hasOwnProperty('children')) {
      checkChildren(ele.children);
    }

    return ele;
  });
};

export {filterEventObject};
