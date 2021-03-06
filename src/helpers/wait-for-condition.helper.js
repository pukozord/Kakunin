import config from './config.helper';
const timeout = parseInt(config.elementsVisibilityTimeout) * 1000;

export const waitForVisibilityOf = (element) => {
  return waitForCondition('visibilityOf', timeout)(element);
};

export const waitForInvisibilityOf = (element) => {
  return waitForCondition('invisibilityOf', timeout)(element);
};

export const waitForCondition = (condition, timeout) => {
  return element => {
    if (element instanceof protractor.ElementArrayFinder) {
      return browser.wait(protractor.ExpectedConditions[condition](element.first()), timeout);
    }

    return browser.wait(protractor.ExpectedConditions[condition](element), timeout);
  }
};
